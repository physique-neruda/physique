# -*- coding: utf-8 -*-
"""
construire.py — fabrique les fichiers de données d'entraînement du BTS CRSA
et du BTS ET à partir des sources LaTeX de leur collection.

    python3 outils/construire.py bts-crsa <...>/BTS_CRSA_LaTeX/collection ../entrainement
    python3 outils/construire.py bts-et   <...>/BTS_ET_LaTeX               ../entrainement

  bilan   : lu dans le .tex du bilan   (QCM déjà rédigé + corrigé commenté)
  cartes  : lues dans le .tex du cours (les \\trou{} du cours à compléter)
  prereq  : ABSENTS pour l'instant. Les prérequis papier de ces deux filières
            sont des questions ouvertes ; ils ne se convertissent pas
            automatiquement. Il faudra les rédiger à la main, comme l'a été
            outils/prerequis_tsma.py pour le TSMA.

Les deux filières n'écrivent pas leur QCM de la même façon :

  CRSA   \\q{énoncé}  puis  \\choix{a}{b}{c}{d}          — quatre propositions,
         corrigé en \\item \\textbf{b.} explication      dans l'ordre des questions.
  ET     \\q{énoncé}  puis  \\opt{\\textbf{a.} ...} ×3   — trois propositions,
         corrigé en \\cor{4. b.}{explication}            numéroté explicitement.

Le reste (traduction du LaTeX en texte lisible, fabrication des cartes) est
commun, et repris tel quel de construire_tsma.py.
"""
import json, os, re, sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from construire_tsma import tex2txt, _arg   # noqa: E402
from cartes import fabriquer as fabriquer_cartes   # noqa: E402

NIVEAUX = {"bts-crsa": "BTS CRSA", "bts-et": "BTS ET"}


# ----------------------------------------------------------- lecture du QCM
def _pre(t):
    """Nettoyages qui doivent précéder tex2txt.

    \\dot\\omega et \\omega donnaient tous deux « ω » : deux propositions de QCM
    devenaient identiques, et l'étudiant voyait deux fois la même ligne.
    """
    t = re.sub(r"\\dot\s*\{?\\?([a-zA-Z]+)\}?", r"d\1/dt", t)
    t = re.sub(r"\\ddot\s*\{?\\?([a-zA-Z]+)\}?", r"d²\1/dt²", t)
    return t


def _questions(enonce, macro_opts):
    """Énoncés + propositions, en lecture d'accolades équilibrées."""
    questions, i = [], 0
    while True:
        m = re.compile(r"\\q\{").search(enonce, i)
        if not m:
            break
        q, i = _arg(enonce, m.end() - 1)
        suite = enonce.find("\\q{", i)
        zone = enonce[i:suite if suite > 0 else len(enonce)]
        questions.append({"q": tex2txt(q), "choix": macro_opts(zone)})
    return questions


def _saute(zone, i):
    """Avance sur les blancs et les commentaires %, qui peuvent séparer deux
    arguments d'une même macro (\\choix{a}{b}%\\n{c}{d})."""
    while i < len(zone):
        if zone[i] in " \t\n\r":
            i += 1
        elif zone[i] == "%":
            f = zone.find("\n", i)
            i = len(zone) if f < 0 else f + 1
        else:
            break
    return i


def _opts_choix(zone):
    """CRSA : \\choix{a}{b}{c}{d} — quatre arguments consécutifs."""
    m = re.compile(r"\\choix\{").search(zone)
    if not m:
        return []
    out, i = [], m.end() - 1
    for _ in range(4):
        i = _saute(zone, i)
        if i >= len(zone) or zone[i] != "{":
            break
        a, i = _arg(zone, i)
        out.append(tex2txt(_pre(a)).strip())
    return out


def _opts_opt(zone):
    """ET : une suite de \\opt{\\textbf{a.} proposition}."""
    out, j = [], 0
    while True:
        m = re.compile(r"\\opt\{").search(zone, j)
        if not m:
            break
        o, j = _arg(zone, m.end() - 1)
        o = tex2txt(_pre(o))
        out.append(re.sub(r"^[a-d]\.\s*", "", o).strip())
    return out


def _corrige_enumerate(corrige, n):
    """CRSA : \\item \\textbf{b.} explication, dans l'ordre des questions."""
    items = list(re.finditer(r"\\item\s*\\textbf\{([a-d])\.?\}", corrige))
    rep, expl = {}, {}
    for k, m in enumerate(items, 1):
        fin = items[k].start() if k < len(items) else len(corrige)
        texte = tex2txt(corrige[m.end():fin]).strip()
        texte = re.sub(r"\s*(tcolorbox|document|enumerate)\s*$", "", texte).strip()
        rep[k] = "abcd".index(m.group(1))
        expl[k] = texte
    return rep, expl


def _corrige_paires(corrige, n):
    """Troisième écriture rencontrée : \\textbf{1 b} et \\textbf{2 b} — le numéro
    et la lettre dans la même accolade, parfois groupés par deux dans la
    même phrase. Le chapitre 0 du CRSA est écrit ainsi ; sans ce lecteur,
    toutes ses réponses tombaient sur la première proposition."""
    rep, expl = {}, {}
    trouves = list(re.finditer(r"\\textbf\{\s*(\d+)\s*([a-d])\s*\}", corrige))
    for k, m in enumerate(trouves):
        fin = trouves[k + 1].start() if k + 1 < len(trouves) else len(corrige)
        num = int(m.group(1))
        rep[num] = "abcd".index(m.group(2))
        texte = tex2txt(corrige[m.end():fin]).strip(" —-–\n\t")
        texte = re.sub(r"^(et|,)\s*", "", texte).strip()
        texte = re.sub(r"\s*(tcolorbox|document|enumerate)\s*$", "", texte).strip()
        expl[num] = texte
    # « 1 b et 2 b — <explication> » : le texte suit le second numéro mais
    # vaut pour les deux. On le partage plutôt que de laisser un trou.
    for num in sorted(expl):
        if not expl[num]:
            suite = [n for n in sorted(expl) if n > num and expl[n]]
            if suite and suite[0] - num == 1:
                expl[num] = expl[suite[0]]
    return rep, expl


def _corrige_cor(corrige, n):
    """ET : \\cor{4. b.}{explication} — le numéro est écrit."""
    rep, expl = {}, {}
    for m in re.finditer(r"\\cor\{\s*(\d+)\.?\s*([a-d])\.?\s*\}", corrige):
        texte, _ = _arg(corrige, m.end())
        rep[int(m.group(1))] = "abcd".index(m.group(2))
        expl[int(m.group(1))] = tex2txt(texte).strip()
    return rep, expl


def lire_bilan(src, filiere):
    corps = re.split(r"Corrigé commenté", src)
    enonce, corrige = corps[0], ("Corrigé commenté".join(corps[1:]) if len(corps) > 1 else "")
    # le format se lit dans la source, pas dans la filière : le ch.0 du CRSA
    # emploie les \opt{} du BTS ET, alors que ses autres chapitres ont \choix{}
    questions = _questions(enonce, _opts_choix if "\\choix{" in enonce else _opts_opt)
    if "\\cor{" in corrige:
        rep, expl = _corrige_cor(corrige, len(questions))
    elif re.search(r"\\item\s*\\textbf\{[a-d]", corrige):
        rep, expl = _corrige_enumerate(corrige, len(questions))
    else:
        rep, expl = _corrige_paires(corrige, len(questions))
    # aucune réponse trouvée : on refuse de publier un questionnaire muet
    if not rep:
        print("    !! corrigé illisible — questionnaire non fiable", file=sys.stderr)
    for n, q in enumerate(questions, 1):
        q["bonne"] = rep.get(n, 0)
        q["expl"] = expl.get(n, "")
        if n not in rep:
            print(f"    !! réponse introuvable, question {n}", file=sys.stderr)
        elif not q["choix"]:
            print(f"    !! propositions introuvables, question {n}", file=sys.stderr)
    return questions


# ------------------------------------------------------------- assemblage
def _fichiers(filiere, racine, ch):
    """(bilan.tex, cours.tex) pour un chapitre, ou (None, None)."""
    if filiere == "bts-crsa":
        d = os.path.join(racine, ch, "sources")
        b, c = f"CRSA_{ch}_bilan.tex", f"CRSA_{ch}_cours.tex"
    else:
        from filieres import DOSSIERS_ET
        d = os.path.join(racine, DOSSIERS_ET[ch], "sources")
        b, c = f"{ch}_bilan.tex", f"{ch}_cours.tex"
    b, c = os.path.join(d, b), os.path.join(d, c)
    return (b if os.path.exists(b) else None, c if os.path.exists(c) else None)


def construire(filiere, racine, sortie):
    with open(os.path.join(ICI, "..", "chapitres", filiere + ".json"), encoding="utf-8") as f:
        chaps = json.load(f)
    os.makedirs(sortie, exist_ok=True)
    resume = []
    for ch, info in chaps.items():
        fb, fc = _fichiers(filiere, racine, ch)
        if not fb:
            print(f"  {ch} : pas de bilan, ignoré", file=sys.stderr)
            continue
        print(f"  {ch}")
        bilan = lire_bilan(open(fb, encoding="utf-8").read(), filiere)
        cours = open(fc, encoding="utf-8").read() if fc else ""
        cartes = fabriquer_cartes(cours, bilan=bilan)
        titre = info["titre"].split("—", 1)[-1].strip()
        # les prérequis sont écrits à la main (prerequis_<filiere>.py) : on les
        # relit dans le fichier existant plutôt que de les effacer
        cible = os.path.join(sortie, f"qcm-{filiere}-{ch}.js")
        anciens = []
        if os.path.exists(cible):
            vieux = open(cible, encoding="utf-8").read()
            m = "window.CHAPITRE = "
            if m in vieux:
                try:
                    anciens = json.loads(
                        vieux[vieux.index(m) + len(m): vieux.rindex("}") + 1]
                    ).get("prerequis") or []
                except ValueError:
                    anciens = []
        data = {"filiere": filiere, "num": info["num"], "titre": titre,
                "niveau": NIVEAUX[filiere], "prerequis": anciens,
                "bilan": bilan, "cartes": cartes}
        entete = (f"/* Engendré par outils/construire.py — ne pas éditer à la main.\n"
                  f"   {NIVEAUX[filiere]} · {info['titre']}\n"
                  f"   Le bilan vient de {os.path.basename(fb)}, les cartes des \\trou{{}} de\n"
                  f"   {os.path.basename(fc) if fc else '—'}. */\n")
        with open(cible, "w", encoding="utf-8") as f:
            f.write(entete + "window.CHAPITRE = "
                    + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
        resume.append((ch, len(bilan), len(cartes)))
    return resume


if __name__ == "__main__":
    filiere, racine, sortie = sys.argv[1], sys.argv[2], sys.argv[3]
    r = construire(filiere, racine, sortie)
    print(f"\n{'chapitre':10} {'bilan':>7} {'cartes':>8}")
    for ch, b, c in r:
        print(f"{ch:10} {b:>7} {c:>8}")
    print(f"{'TOTAL':10} {sum(x[1] for x in r):>7} {sum(x[2] for x in r):>8}")
