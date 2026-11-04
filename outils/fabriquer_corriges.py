# -*- coding: utf-8 -*-
"""
fabriquer_corriges.py — les corrigés « à débloquer » du site (v64.2, 4 novembre 2026).

    python3 -I fabriquer_corriges.py <atelier site-physique> <prive-atelier> <collections> <travail> [fil/ch …]

Pour chaque chapitre VISIBLE des élèves (catalogue de l'atelier), à partir des sources LaTeX des collections :
  - un PDF de corrigé PAR EXERCICE : la feuille d'exercices compilée en corrigé, chaque exercice commençant sur
    une nouvelle page, puis découpée ; numéros, figures et renvois restent ceux du corrigé complet, la page est
    numérotée « 1 / n » dans chaque morceau ;
  - un PDF de corrigé PAR ACTIVITÉ, ou par PARTIE quand l'activité se fait en plusieurs fois (repères
    \\section{Partie …} en 1re STI2D, \\grandepartie{Partie …} en BTS CRSA, \\partieA{Partie …} en BTS ET) ;
    une activité découpée forme un GROUPE (un code de classe pour toute l'activité, en plus d'un par partie).
Les notes pour le professeur n'y figurent pas : \\noteprof neutralisé, encadrés et environnements annoncés comme
notes (« Note(s) au / pour le professeur », « … à / pour l'enseignant », title={…}, [Notes pour le professeur]) et
passages « Pour le professeur … » retirés de la source avant compilation. Contrôle : s'il en reste une mention dans la
source ou dans le PDF (lignes recollées), l'élément n'est PAS publié (ÉCHEC, code de sortie 1) ; de même pour une
compilation en erreur. Une note doit donc être écrite avec \\noteprof ou dans un encadré titré : une note sur plusieurs
paragraphes sans étiquette ne peut pas être reconnue.

Écrit prive-atelier/corriges/<filière>/<chapitre>/<élément>.pdf et la liste prive-atelier/donnees/corriges.json.
Rien n'est chiffré ici : outils/chiffrer.py (v64.2) chiffre chaque corrigé avec sa propre clé.
Hors du périmètre : ADM, chapitres cachés, tests, devoirs, CCF, oraux, E4, U51 (espace enseignant seulement).
Contrôle : le texte des morceaux, mis bout à bout, est comparé à celui du corrigé complet de l'espace
enseignant (en-têtes et pieds de page mis à part) ; seules les notes retirées doivent manquer.
"""
import datetime, difflib, json, os, re, shutil, subprocess, sys, threading
from concurrent.futures import ThreadPoolExecutor

ATELIER, PRIVE, COLL, TRAVAIL = (os.path.abspath(x) for x in sys.argv[1:5])
SEULS = set(sys.argv[5:])

sys.path.insert(0, os.path.join(ATELIER, "outils"))
import chiffrer as CH          # lire_catalogue
from filieres import CHAPITRES_CACHES, DOSSIERS_ET

COLLECTIONS = {
    "1sti2d":   {"racine": "sti2d/STI2D_annee_19ch_avec_ch00", "sources": "collection/{ch}/sources",
                 "fichier": "{ch}_{doc}.tex", "gabarit": None},
    "bts-crsa": {"racine": "crsa/BTS_CRSA_LaTeX", "sources": "collection/{ch}/sources",
                 "fichier": "CRSA_{ch}_{doc}.tex", "gabarit": "gabarit"},
    "bts-tsma": {"racine": "tsma/BTS_TSMA_LaTeX", "sources": "collection/{ch}/sources",
                 "fichier": "{ch}_{doc}.tex", "gabarit": "gabarit"},
    "bts-et":   {"racine": "et/BTS_ET_LaTeX", "sources": "{CH}/sources",
                 "fichier": "{ch}_{doc}.tex", "gabarit": None},
}
ACTIVITE = re.compile(r"^(activite(?:_[a-z]+)?\d?|a\d_[a-z]+)$")        # documents élèves qui sont des activités
EXCLUS = re.compile(r"^(activite_bis_\w+)$")                                # ADM 0 bis : hors périmètre
MARQUE_PARTIE = re.compile(r"^\s*\\(?:section\*?|grandepartie|partieA)\s*\{\s*Partie\s+([A-Z]|\d+)\b")
TOUTE_PARTIE = re.compile(r"\\(?:old)?section\*?\s*\{\s*Partie\s+([A-Z]|\d+)\b|\\(?:grandepartie|partieA)\s*\{\s*Partie\s+([A-Z]|\d+)\b")
EXO = re.compile(r"^\s*\\exo\s*[\[{]")
# Notes pour le professeur : « Note(s) au / pour le professeur », « Pour le professeur », « Note(s) à / pour l'enseignant »,
# « Remarque(s) / Conseil(s) pour le professeur », « À l'attention du professeur » (pas « sous le contrôle du professeur »,
# consigne de sécurité destinée aux élèves)
_QUI = r"(?:professeur|enseignant|enseignante)"
NOTE = re.compile(r"(?:Notes?|Remarques?|Conseils?)\s+(?:au|à\s+l['’]|pour\s+le|pour\s+l['’]|pour\s+la)\s*" + _QUI
                  + r"|Pour\s+(?:le|l['’])\s*" + _QUI + r"|(?:À|A)\s+l['’]attention\s+(?:du|de\s+l['’])\s*" + _QUI, re.I)
NOTE_CMD = re.compile(r"(?:\\(?:emph|textit|textbf|textsc|paragraph\*?)\s*\{|\{\s*\\(?:bfseries|itshape|scshape)\b[^{}]{0,40}?)\s*(?:"
                      + NOTE.pattern + r")", re.I)

# Repères de découpage : \nerudacoupe{nom} ferme le morceau en cours (page neuve), note sa longueur
# (fichier .coupes, et .aux pour le « n » du pied de page « k / n ») et repart à la page 1.
PREAMBULE = r"""
%% --- ajouté par fabriquer_corriges.py (site v64.2) : un morceau par élément, numéroté 1 / n ---
\makeatletter
\newwrite\nerudacoupes
\gdef\nerudacourant{%(premier)s}
\newcommand\nerudafin[2]{\expandafter\gdef\csname nerudafin@#1\endcsname{#2}}
\newcommand\nerudatotal{\ifcsname nerudafin@\nerudacourant\endcsname\csname nerudafin@\nerudacourant\endcsname\else ?\fi}
\newcommand\nerudaferme{\clearpage
  \immediate\write\nerudacoupes{\nerudacourant\space\the\numexpr\c@page-1\relax}%%
  \immediate\write\@auxout{\string\nerudafin{\nerudacourant}{\the\numexpr\c@page-1\relax}}}
\newcommand\nerudacoupe[1]{\nerudaferme\gdef\nerudacourant{#1}\setcounter{page}{1}}
\AtBeginDocument{\immediate\openout\nerudacoupes=\jobname.coupes
  \providecommand{\noteprof}[1]{}\renewcommand{\noteprof}[1]{}%%
  \rfoot{\footnotesize\color{grisf}\thepage\,/\,\nerudatotal}}
\AtEndDocument{\nerudaferme}
\makeatother
"""

VERROU = threading.Lock()
JOURNAL = []


def noter(x):
    with VERROU:
        JOURNAL.append(x)


# ------------------------------------------------------------------ titres
INDICES = str.maketrans("0123456789+-", "₀₁₂₃₄₅₆₇₈₉₊₋")
EXPOSANTS = str.maketrans("0123456789+-", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻")
UNITES = {"volt": "V", "ampere": "A", "ohm": "Ω", "watt": "W", "hertz": "Hz", "kilo": "k", "milli": "m",
          "micro": "µ", "mega": "M", "second": "s", "meter": "m", "metre": "m", "newton": "N", "joule": "J",
          "percent": "%", "celsius": "°C", "degreeCelsius": "°C", "degree": "°", "farad": "F", "henry": "H",
          "pascal": "Pa", "bar": "bar", "liter": "L", "litre": "L", "gram": "g", "kelvin": "K", "minute": "min",
          "hour": "h", "decibel": "dB", "lux": "lx", "lumen": "lm", "candela": "cd", "tesla": "T", "weber": "Wb"}
GRECQUES = {"lambda": "λ", "Omega": "Ω", "omega": "ω", "mu": "µ", "Delta": "Δ", "delta": "δ", "varphi": "φ",
            "phi": "φ", "theta": "θ", "alpha": "α", "beta": "β", "eta": "η", "rho": "ρ", "Phi": "Φ", "tau": "τ",
            "times": "×", "cdot": "·", "approx": "≈", "pi": "π", "sigma": "σ", "epsilon": "ε"}


def fin_groupe(texte, i):
    """Indice qui suit l'accolade fermante du groupe ouvert en i."""
    assert texte[i] == "{"
    n, j = 0, i
    while j < len(texte):
        c = texte[j]
        if c == "\\":
            j += 2; continue
        if c == "%":
            k = texte.find("\n", j)
            j = len(texte) if k < 0 else k + 1; continue
        if c == "{":
            n += 1
        elif c == "}":
            n -= 1
            if n == 0:
                return j + 1
        j += 1
    raise ValueError("accolade non fermée")


def argument(texte, i):
    """Contenu de l'argument {…} qui commence à l'indice i (accolade ouvrante), accolades équilibrées."""
    return texte[i + 1:fin_groupe(texte, i) - 1]


def unites(u):
    return "".join(UNITES.get(x, x) for x in re.findall(r"\\([A-Za-z]+)", u)) or u


def titre_clair(t):
    """Titre LaTeX → texte (pour la liste du site) : commandes courantes retirées, maths simplifiées."""
    t = t.replace("\\horsprog", " (hors programme)")
    t = re.sub(r"\\(?:SI|qty)\s*\{([^{}]*)\}\s*\{([^{}]*)\}", lambda m: m.group(1).replace(".", ",") + " " + unites(m.group(2)), t)
    t = re.sub(r"\\num\s*\{([^{}]*)\}", lambda m: m.group(1).replace(".", ","), t)
    t = re.sub(r"\\ce\s*\{([^{}]*)\}", lambda m: re.sub(r"(?<=[A-Za-z)])(\d+)", lambda d: d.group(1).translate(INDICES), m.group(1)), t)
    t = re.sub(r"_\{?([0-9+-]+)\}?", lambda m: m.group(1).translate(INDICES), t)
    t = re.sub(r"\^\{?([0-9+-]+)\}?", lambda m: m.group(1).translate(EXPOSANTS), t)
    t = re.sub(r"\\(" + "|".join(GRECQUES) + r")(?![A-Za-z])", lambda m: GRECQUES[m.group(1)], t)
    for _ in range(3):
        t = re.sub(r"\\(?:textbf|emph|textit|mathrm|text|ensuremath|mathit|textsc|mbox)\s*\{([^{}]*)\}", r"\1", t)
    t = re.sub(r"\\textemdash\b\s*|---", "—", t).replace("--", "–")
    t = t.replace("\\og", "«").replace("\\fg", "»").replace("~", " ").replace("\\,", " ").replace("$", "")
    t = t.replace("\\%", "%").replace("\\&", "&").replace("\\_", "_")
    t = re.sub(r"\\[A-Za-z]+\*?", "", t)
    t = t.replace("{", "").replace("}", "")
    return re.sub(r"\s+", " ", t).strip(" .")


# ------------------------------------------------------------------ notes pour le professeur
def retirer_notes(t):
    """Retire de la source les notes pour le professeur : encadrés tcolorbox titrés « Note(s) au / pour le
    professeur », groupes \\emph{Pour le professeur …} (ou \\emph{Note au professeur} suivi de son texte, jusqu'à
    la fin du groupe ou du paragraphe qui le contient). Rend (texte, nombre de notes retirées)."""
    n = 0
    # 1. encadrés et environnements : une note annoncée dans les OPTIONS (title={Note pour le professeur},
    #    \begin{depannage}[Notes pour le professeur]…), ou en tête d'un encadré (tcolorbox, …box) ; jamais un
    #    environnement ordinaire (itemize, center, minipage…) au seul motif qu'une note s'y trouve : elle y est
    #    retirée par le point 2, et ce qui resterait arrête la publication de l'élément (contrôle final)
    pos = 0
    debut_env = re.compile(r"\\begin\{([A-Za-z]+\*?)\}")
    while True:
        m = debut_env.search(t, pos)
        if not m:
            break
        nom = m.group(1)
        motif = re.compile(r"\\(begin|end)\{" + re.escape(nom) + r"\}")
        prof, fin = 0, None
        for mm in motif.finditer(t, m.start()):
            prof += 1 if mm.group(1) == "begin" else -1
            if prof == 0:
                fin = mm.end(); break
        if fin is None or nom == "document":
            pos = m.end(); continue
        corps, options = t[m.end():fin], ""
        if corps.lstrip().startswith("["):                     # options [...] (crochets équilibrés)
            k, p = corps.index("["), 0
            for x in range(k, len(corps)):
                p += {"[": 1, "]": -1}.get(corps[x], 0)
                if p == 0:
                    options, corps = corps[k:x + 1], corps[x + 1:]; break
        encadre = nom == "tcolorbox" or nom.lower().endswith("box")
        if NOTE.search(options) or (encadre and NOTE.search(corps[:300])):
            t = t[:m.start()] + "% (note pour le professeur retirée)\n" + t[fin:]
            n += 1
            pos = m.start()
        else:
            pos = m.end()
    # 2. passages en ligne
    while True:
        m = NOTE_CMD.search(t)
        if not m:
            break
        k = t.index("{", m.start())
        f = fin_groupe(t, k)
        if len(t[k + 1:f - 1].strip()) > 40:                   # le groupe contient la note elle-même
            fin = f
        else:                                                   # « \emph{Note au professeur} : … » → fin du groupe englobant
            p, j, fin = 0, f, len(t)
            while j < len(t):
                c = t[j]
                if c == "\\":
                    j += 2; continue
                if c == "{":
                    p += 1
                elif c == "}":
                    if p == 0:
                        fin = j; break
                    p -= 1
                elif c == "\n" and p == 0 and re.match(r"\n[ \t]*\n", t[j:j + 40]):
                    fin = j; break
                j += 1
        debut = m.start()
        avant = re.search(r"\\\\(\[[^\]]*\])?\s*$", t[:debut])  # saut de ligne qui précédait la note
        if avant:
            debut = avant.start()
        t = t[:debut] + t[fin:]
        n += 1
    return t, n


def reste_des_notes(t):
    """Mentions « note pour le professeur » encore présentes hors commentaires et hors \\noteprof (contrôle)."""
    sans = "\n".join(re.sub(r"(?<!\\)%.*$", "", l) for l in t.split("\n"))
    return [m.group(0) for m in NOTE.finditer(sans)]


# ------------------------------------------------------------------ compilation et découpage
def lancer(cmd, cwd, env):
    r = subprocess.run(cmd, cwd=cwd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, timeout=900)
    return r.returncode


def compiler(dossier, fichier, job, env):
    """Deux passages (renvois, nombre de pages des morceaux). Rend le chemin du PDF, ou None — aussi quand le second
    passage s'arrête sur une erreur : un PDF issu d'une compilation en erreur n'est jamais publié."""
    rc = 1
    for _ in range(2):
        rc = lancer(["pdflatex", "-interaction=nonstopmode", "-halt-on-error", "-jobname=" + job, fichier], dossier, env)
    p = os.path.join(dossier, job + ".pdf")
    return p if (rc == 0 and os.path.exists(p)) else None


def nb_pages(pdf):
    return int(subprocess.run(["qpdf", "--show-npages", pdf], stdout=subprocess.PIPE, text=True).stdout.strip())


def extraire(pdf, debut, fin, sortie):
    # un seul passage, identifiant du PDF tiré du contenu : même source → même fichier, octet pour octet
    # (pas de nouvelle version Git à chaque fabrication)
    os.makedirs(os.path.dirname(sortie), exist_ok=True)
    subprocess.run(["qpdf", "--empty", "--deterministic-id", "--linearize", "--pages", pdf, f"{debut}-{fin}", "--",
                    sortie], check=True)


def point_d_insertion(lignes, i):
    """Remonte au-dessus des lignes vides, des commentaires et des \\Needspace qui précèdent la ligne i."""
    j = i
    while j - 1 >= 0:
        l = lignes[j - 1].strip()
        if not l or l.startswith("%") or re.match(r"^(\\ifcorrige)?\\Needspace\*?\{[^}]*\}(\\fi)?$", l) \
                or l in ("\\clearpage", "\\newpage", "\\goodbreak", "\\pagebreak"):
            j -= 1
            continue
        break
    return j


def preparer(source, marques, premier, job):
    """Copie modifiée de la source : version corrigé, repères de coupe avant les lignes de `marques`
    [(indice, nom)], notes du professeur retirées. Rend (nom du fichier, notes retirées, mentions restantes)."""
    lignes = open(source, encoding="utf-8").read().split("\n")
    n = 0
    for i, l in enumerate(lignes):
        if l.strip() == "\\corrigefalse":
            lignes[i] = "\\corrigetrue"; n += 1
    if n == 0:
        raise RuntimeError("pas de \\corrigefalse dans " + os.path.basename(source))
    for i, nom in sorted(marques, key=lambda x: -x[0]):
        lignes.insert(point_d_insertion(lignes, i), "\\nerudacoupe{" + nom + "}")
    texte = "\n".join(lignes)
    pos = texte.index("\\begin{document}")
    corps, retirees = retirer_notes(texte[pos:])        # (\noteprof est défini dans le préambule : neutralisé)
    retirees += len(re.findall(r"(?<!\\newcommand\{)\\noteprof\s*\{", corps))
    restes = reste_des_notes(corps)
    texte = texte[:pos] + PREAMBULE % {"premier": premier} + corps
    with open(os.path.join(os.path.dirname(source), job + ".tex"), "w", encoding="utf-8") as h:
        h.write(texte)
    return job + ".tex", retirees, restes


def morceaux(dossier, job):
    """[(nom, nombre de pages)] dans l'ordre, d'après le fichier .coupes."""
    p = os.path.join(dossier, job + ".coupes")
    out = []
    if os.path.exists(p):
        for l in open(p, encoding="utf-8"):
            m = re.match(r"^(\S+) (-?\d+)\s*$", l)
            if m:
                out.append((m.group(1), int(m.group(2))))
    return out


def decouper(pdf, attendus, fil, ch, quoi):
    """Vérifie les repères et rend [(nom, début, fin)] (pages du PDF complet)."""
    total, cp = nb_pages(pdf), morceaux(os.path.dirname(pdf), os.path.splitext(os.path.basename(pdf))[0])
    if [x[0] for x in cp] != attendus:
        noter(f"{fil}/{ch} : {quoi} — repères incomplets {[x[0] for x in cp]} (attendus {attendus})")
        return None
    if any(x[1] < 1 for x in cp) or sum(x[1] for x in cp) != total:
        noter(f"{fil}/{ch} : {quoi} — longueurs {[x[1] for x in cp]} incohérentes avec {total} pages")
        return None
    out, p = [], 1
    for nom, n in cp:
        out.append((nom, p, p + n - 1)); p += n
    return out


# ------------------------------------------------------------------ contrôles
def texte_pdf(pdf):
    return subprocess.run(["pdftotext", "-enc", "UTF-8", pdf, "-"], stdout=subprocess.PIPE).stdout.decode("utf-8", "replace")


def sans_cadre(texte, cadre):
    lignes = [l.strip() for l in texte.split("\n")]
    return [w for l in lignes if l and l not in cadre and not re.fullmatch(r"\d+\s*/\s*\d+", l) for w in l.split()]


def cadre_de(texte):
    """Lignes d'en-tête et de pied de page : présentes sur au moins 60 % des pages."""
    pages = [p for p in texte.split("\f") if p.strip()]
    compte = {}
    for p in pages:
        for l in set(x.strip() for x in p.split("\n") if x.strip()):
            compte[l] = compte.get(l, 0) + 1
    return {l for l, c in compte.items() if c >= max(2, 0.6 * len(pages))}


def comparer(reference, pieces, fil, ch, quoi, notes_retirees):
    """Texte des morceaux bout à bout = texte du corrigé complet de l'espace enseignant (cadres mis à part)."""
    if not os.path.exists(reference):
        noter(f"{fil}/{ch} : {quoi} — pas de corrigé complet dans l'espace enseignant pour comparer")
        return
    ref = texte_pdf(reference)
    tout = "\f".join(texte_pdf(p) for p in pieces)
    cadre = cadre_de(ref) | (cadre_de(tout) if len(pieces) > 2 else set())
    a, b = sans_cadre(ref, cadre), sans_cadre(tout, cadre)
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    retire, ajoute, autres = [], [], []
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == "equal":
            continue
        x, y = a[i1:i2], b[j1:j2]
        if op == "delete" or (op == "replace" and len(x) > 25 and len(y) <= 3):
            retire.append(" ".join(x))
        elif op == "insert":
            ajoute.append(" ".join(y))
        else:
            autres.append(" ".join(x) + " => " + " ".join(y))
    # déplacements (pastilles de compétences, etc.) : mêmes mots retirés ici, ajoutés là
    if sorted(" ".join(retire).split()) == sorted(" ".join(ajoute).split()):
        retire, ajoute = [], []
    lourd = [x for x in retire if len(x.split()) > 6]
    if notes_retirees:
        sans_prof = [x for x in lourd if not re.search(r"professeur", x, re.I) and len(x.split()) > 12]
        if sans_prof or ajoute or autres:
            noter(f"{fil}/{ch} : {quoi} — {notes_retirees} note(s) retirée(s) ; écarts à revoir : retirés "
                  f"{[x[:120] for x in sans_prof][:3]} ajoutés {[x[:80] for x in ajoute][:3]} autres {[x[:80] for x in autres][:3]}")
        else:
            noter(f"{fil}/{ch} : {quoi} — {notes_retirees} note(s) pour le professeur retirée(s) "
                  f"({sum(len(x.split()) for x in retire)} mots), le reste identique")
    elif lourd or len(ajoute) > 2 or autres:
        noter(f"{fil}/{ch} : {quoi} — écarts avec le corrigé complet : retirés {[x[:100] for x in retire][:3]} "
              f"ajoutés {[x[:100] for x in ajoute][:3]} autres {[x[:100] for x in autres][:3]}")


def controler_pieds(pdf, fil, ch, nom):
    """Chaque page du morceau porte « k / n » (n = pages du morceau) et aucune note pour le professeur. Rend faux (et
    efface le PDF) si une note est restée : l'élément n'est pas publié."""
    n = nb_pages(pdf)
    pages = texte_pdf(pdf).split("\f")[:n]
    for k, p in enumerate(pages, 1):
        nums = re.findall(r"(?m)^\s*(\d+)\s*/\s*(\d+)\s*$", p)
        if (str(k), str(n)) not in nums:
            noter(f"{fil}/{ch} : {nom} — pied de page de la page {k} : {nums[-1:] or 'absent'} au lieu de {k} / {n}")
            break
    t = re.sub(r"-\s*\n\s*", "", " ".join(pages))            # lignes recollées (césures comprises)
    t = re.sub(r"\s+", " ", t)
    if NOTE.search(t):
        noter(f"{fil}/{ch} : ÉCHEC {nom} — « {NOTE.search(t).group(0)} » dans le PDF : non publié")
        os.remove(pdf)
        return False
    return True


# ------------------------------------------------------------------ chapitres
def chapitres_visibles():
    _, filieres, documents = CH.lire_catalogue(os.path.join(ATELIER, "catalogue.js"))
    vus = {}
    for d in documents:
        m = re.match(r"^docs/([a-z0-9-]+)/([a-z0-9]+)/([a-z0-9_]+)\.pdf$", d.get("fichier", ""))
        if not m:
            continue
        fil, ch, doc = m.groups()
        if fil not in COLLECTIONS or ch in CHAPITRES_CACHES.get(fil, ()) or ch.startswith("adm"):
            continue
        e = vus.setdefault((fil, ch), {"chapitre": d["chapitre"], "docs": [], "titres": {}})
        e["docs"].append(doc); e["titres"][doc] = d["titre"]
    return vus


def traiter(fil, ch, info):
    try:
        return _traiter(fil, ch, info)
    except Exception as e:                                      # un chapitre en échec n'arrête pas les autres
        noter(f"{fil}/{ch} : ÉCHEC {type(e).__name__} : {e}")
        return [], []


def _traiter(fil, ch, info):
    c = COLLECTIONS[fil]
    racine = os.path.join(COLL, c["racine"])
    src = os.path.join(racine, c["sources"].format(ch=ch, CH=DOSSIERS_ET.get(ch, ch)))
    if not os.path.isdir(src):
        noter(f"{fil}/{ch} : sources absentes ({src})")
        return [], []
    build = os.path.join(TRAVAIL, "corriges_build", fil, ch)
    if os.path.exists(build):
        shutil.rmtree(build)
    shutil.copytree(src, build, ignore=shutil.ignore_patterns("*.aux", "*.log", "*.out"))
    env = dict(os.environ)
    if c["gabarit"]:
        env["TEXINPUTS"] = os.path.join(racine, c["gabarit"]) + "//:"
    elements, groupes = [], []
    base = f"{fil}.{ch}."

    # ---------------- exercices
    if "exercices" in info["docs"]:
        f = os.path.join(build, c["fichier"].format(ch=ch, doc="exercices"))
        if not os.path.exists(f):
            noter(f"{fil}/{ch} : {os.path.basename(f)} absent")
        else:
            lignes = open(f, encoding="utf-8").read().split("\n")
            idx = [i for i, l in enumerate(lignes) if EXO.match(l)]
            titres, etoiles = [], []
            for i in idx:
                l = lignes[i]
                k = l.index("\\exo") + 4
                while l[k] in " \t":
                    k += 1
                if l[k] == "[":
                    k = l.index("]", k) + 1
                titres.append(titre_clair(argument(l, k)))
                m = re.match(r"\s*\{\s*\\etoiles\{(\d)\}", l[fin_groupe(l, k):])
                etoiles.append(int(m.group(1)) if m else 0)
            noms = ["ex%02d" % (n + 1) for n in range(len(idx))]
            job = "zz_coupe_exercices"
            fich, retirees, restes = preparer(f, list(zip(idx, noms))[1:], noms[0], job)
            pdf = None
            if restes:
                noter(f"{fil}/{ch} : ÉCHEC exercices — note(s) pour le professeur non retirée(s) {restes[:3]} : feuille non publiée")
            else:
                pdf = compiler(build, fich, job, env)
                if not pdf:
                    noter(f"{fil}/{ch} : ÉCHEC exercices — la compilation a échoué ({build}/{job}.log)")
            if pdf:
                coupe = decouper(pdf, noms, fil, ch, "exercices")
                if coupe:
                    faits = []
                    for n, (nom, p, q) in enumerate(coupe):
                        sortie = os.path.join(PRIVE, "corriges", fil, ch, nom + ".pdf")
                        extraire(pdf, p, q, sortie)
                        if not controler_pieds(sortie, fil, ch, nom):
                            continue
                        faits.append(sortie)
                        elements.append({"id": base + nom, "fil": fil, "ch": ch, "el": nom, "sorte": "exercice",
                                         "n": n + 1, "titre": titres[n], "etoiles": etoiles[n], "pages": q - p + 1,
                                         "fichier": f"corriges/{fil}/{ch}/{nom}.pdf"})
                    comparer(os.path.join(PRIVE, fil, ch, "exercices_corrige.pdf"), faits, fil, ch, "exercices", retirees)

    # ---------------- activités
    for doc in info["docs"]:
        if not ACTIVITE.match(doc) or EXCLUS.match(doc):
            continue
        f = os.path.join(build, c["fichier"].format(ch=ch, doc=doc))
        if not os.path.exists(f):
            noter(f"{fil}/{ch} : source de l'activité {doc} absente")
            continue
        lignes = open(f, encoding="utf-8").read().split("\n")
        parties = [(i, m.group(1)) for i, l in enumerate(lignes) for m in [MARQUE_PARTIE.match(l)] if m]
        if len(parties) < 2:
            parties = []
        noms = [doc + "-" + p for (_, p) in parties] or [doc]
        job = "zz_coupe_" + doc
        fich, retirees, restes = preparer(f, [(i, nom) for (i, _), nom in zip(parties, noms)][1:], noms[0], job)
        if restes:
            noter(f"{fil}/{ch} : ÉCHEC activité {doc} — note(s) pour le professeur non retirée(s) {restes[:3]} : non publiée")
            continue
        pdf = compiler(build, fich, job, env)
        if not pdf:
            noter(f"{fil}/{ch} : ÉCHEC activité {doc} — la compilation a échoué ({build}/{job}.log)")
            continue
        coupe = decouper(pdf, noms, fil, ch, "activité " + doc)
        if not coupe:
            continue
        titre_doc = info["titres"].get(doc, "Activité")
        bornes = [i for (i, _) in parties] + [len(lignes)]
        faits, rate = [], False
        for n, (nom, p, q) in enumerate(coupe):
            lib = ""
            if parties:
                # libellé : toutes les « Partie X » du morceau (« Parties B et C » quand C suit B sans coupure)
                morceau = "\n".join(lignes[(0 if n == 0 else bornes[n]):bornes[n + 1]])
                vues = []
                for m in TOUTE_PARTIE.finditer(morceau):
                    x = m.group(1) or m.group(2)
                    if x not in vues:
                        vues.append(x)
                if parties[n][1] not in vues:
                    vues.insert(0, parties[n][1])
                lib = ("Partie " + vues[0]) if len(vues) == 1 else ("Parties " + ", ".join(vues[:-1]) + " et " + vues[-1])
            sortie = os.path.join(PRIVE, "corriges", fil, ch, nom + ".pdf")
            extraire(pdf, p, q, sortie)
            if not controler_pieds(sortie, fil, ch, nom):
                rate = True
                continue
            faits.append(sortie)
            e = {"id": base + nom, "fil": fil, "ch": ch, "el": nom, "sorte": "activite", "doc": doc,
                 "titre": titre_doc, "partie": lib, "pages": q - p + 1, "fichier": f"corriges/{fil}/{ch}/{nom}.pdf"}
            if parties:
                e["groupe"] = base + doc
            elements.append(e)
        if parties and not rate:                                # un groupe n'existe qu'avec toutes ses parties
            groupes.append({"id": base + doc, "fil": fil, "ch": ch, "doc": doc, "titre": titre_doc,
                            "membres": [base + nom for nom in noms]})
        elif parties:
            for e in elements:
                if e.get("groupe") == base + doc:
                    e.pop("groupe", None)
        comparer(os.path.join(PRIVE, fil, ch, doc + "_corrige.pdf"), faits, fil, ch, "activité " + doc, retirees)
    return elements, groupes


def main():
    vus = chapitres_visibles()
    cibles = [(k, v) for k, v in sorted(vus.items()) if not SEULS or (k[0] + "/" + k[1]) in SEULS]
    dest = os.path.join(PRIVE, "corriges")
    if not SEULS and os.path.exists(dest):
        shutil.rmtree(dest)
    with ThreadPoolExecutor(max_workers=max(1, os.cpu_count() or 1)) as ex:
        res = list(ex.map(lambda kv: traiter(kv[0][0], kv[0][1], kv[1]), cibles))
    elements, groupes = [], []
    for (k, v), (els, grs) in zip(cibles, res):
        for e in els + grs:
            e["chapitre"] = v["chapitre"]
        elements.extend(els); groupes.extend(grs)
    ordre = {"exercice": 0, "activite": 1}
    elements.sort(key=lambda e: (e["fil"], e["ch"], ordre[e["sorte"]], e.get("n", 0), e.get("doc", ""), e["el"]))
    groupes.sort(key=lambda g: g["id"])
    man = {"v": 1, "fabrique": datetime.date.today().isoformat(),
           "note": "Corrigés à débloquer par code (site v64.2) : liste fabriquée par fabriquer_corriges.py. "
                   "Un élément = un PDF de prive-atelier/corriges/ ; un groupe = une activité découpée en parties.",
           "elements": elements, "groupes": groupes}
    sortie = os.path.join(TRAVAIL, "corriges_essai.json") if SEULS else os.path.join(PRIVE, "donnees", "corriges.json")
    with open(sortie, "w", encoding="utf-8") as h:
        json.dump(man, h, ensure_ascii=False, indent=1)
    n_ex = sum(1 for e in elements if e["sorte"] == "exercice")
    print(f"{len(cibles)} chapitres ; {n_ex} corrigés d'exercices, {len(elements) - n_ex} corrigés d'activités "
          f"(ou de parties), {len(groupes)} activités en plusieurs parties ; liste : {sortie}")
    for l in sorted(JOURNAL):
        print("  !", l)
    echecs = [l for l in JOURNAL if "ÉCHEC" in l]
    if echecs:
        print(f"{len(echecs)} ÉCHEC(S) : les éléments concernés ne sont pas dans la liste (rien de ce qui reste n'est publié).")
        sys.exit(1)


if __name__ == "__main__":
    main()
