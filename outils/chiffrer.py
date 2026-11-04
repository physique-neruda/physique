# -*- coding: utf-8 -*-
"""
chiffrer.py — fabrique la version EN LIGNE du site. Depuis la v64 (novembre 2026), le site est
FERMÉ : rien ne s'ouvre sans un compte élève (Firebase) ou un code de secours.

    python3 outils/chiffrer.py site-physique site-en-ligne --cles mots_de_passe_v3.json --prive prive-atelier

  site-physique/          l'atelier : tout en clair (PDF, animations, questionnaires, catalogue).
  site-en-ligne/          ce qui part sur GitHub : le contenu chiffré, plus acces.js.
  mots_de_passe_v3.json   les clés et les mots de passe de secours. JAMAIS dans le site ni sur GitHub
                          (dossier NE_PAS_PUBLIER du Drive, et Bitwarden).

PREMIÈRE FOIS (passage de la v63 à la v64) :
    python3 outils/chiffrer.py site-physique site-en-ligne --cles mots_de_passe_v3.json \\
            --depuis mots_de_passe_v2.json --prive prive-atelier
crée mots_de_passe_v3.json : une clé ALÉATOIRE par filière et une clé commune, de NOUVEAUX mots de
passe de classe (gardés comme accès de secours), le même code enseignant, la même clé de l'espace
enseignant. Puis outils de comptes v5 : « python comptes_firebase.py cles --cles mots_de_passe_v3.json »
dépose les clés dans la base, où chaque compte ne lit que celles de sa classe.

LES CLÉS (v64)
  - une clé par filière (1sti2d, bts-crsa, bts-et, bts-tsma) : documents (docs/<filière>/), questionnaires
    et cartes (entrainement/qcm-<filière>-<chapitre>.js), partie de la filière du catalogue ;
  - une clé commune : toutes les animations (animations/*.html), la partie commune du catalogue
    (classes, animations de toutes les classes, outils) ;
  - la clé de l'espace enseignant (inchangée) : prive/, les animations des chapitres retirés du site
    élèves (CHAPITRES_CACHES), catalogue/source.enc (le catalogue exact, pour reconstruire l'atelier) et
    les sources de l'atelier qui portent du contenu (outils/cartes_manuelles/, outils/prerequis_*.py,
    outils/filieres.py, chapitres/*.json : <fichier>.enc).
  Un élève connecté reçoit, depuis la base, la clé commune et celle de sa filière ; le compte invité la
  clé commune seulement ; le compte prof toutes les clés de filière.
  Secours (base indisponible, élève sans compte) : le MOT DE PASSE DE LA CLASSE ouvre la clé de la
  filière et la clé commune (enveloppes dans acces.js) ; le CODE ENSEIGNANT ouvre tout.

CHANGER UN MOT DE PASSE DE SECOURS : --nouveau bts-et (ou --nouveau prof pour le code enseignant) ;
  --mot "…" pour l'imposer (une seule filière). Les clés ne changent pas : rien n'est rechiffré.
  ATTENTION : --nouveau seul ne retire l'accès à personne. Qui connaît l'ancien mot de passe a déjà pu
  garder la clé, et l'ancienne enveloppe reste dans l'historique du dépôt. Un mot de passe qui a circulé
  se traite comme une clé qui a circulé : --nouvelle-cle.
CHANGER UNE CLÉ (si elle ou le mot de passe de secours de la classe a circulé) : --nouvelle-cle bts-et
  (ou commune) ; pour une filière, elle tire aussi un nouveau mot de passe de secours ; les fichiers concernés sont
  rechiffrés, puis relancer « comptes_firebase.py cles » ; les appareils reprennent la clé à la connexion.
  Les versions déjà publiées restent lisibles avec l'ancienne clé dans l'historique du dépôt : seul ce
  qui est publié ensuite est protégé.

CORRIGÉS À DÉBLOQUER (v64.2) : prive-atelier/corriges/<filière>/<chapitre>/<élément>.pdf (un PDF par exercice, par
  activité ou par partie d'activité ; liste prive-atelier/donnees/corriges.json, fabriqués par
  outils/fabriquer_corriges.py) → corriges/<identifiant opaque>.enc, chacun chiffré avec SA clé :
    clé du corrigé  = HMAC-SHA256(kpr, "neruda|corriges|cle|" + id)   (stable d'une année à l'autre)
    nom du fichier  = HMAC-SHA256(kpr, "neruda|corriges|nom|" + id), 20 premiers chiffres hexadécimaux
  (kpr = clé de l'espace enseignant ; id = <filière>.<chapitre>.<élément>, ex. bts-tsma.ch07.ex03). Les CODES, eux,
  changent à chaque année scolaire (--annee, par défaut celle du jour : août = nouvelle année) :
    Kc              = HMAC-SHA256(kpr, "neruda|codes-corriges|" + année)          ex. année = "2026-2027"
    code de classe  = 10 signes de ALPHABET_CODES tirés de HMAC-SHA256(Kc, "classe|" + classe + "|" + id)
    code nominatif  = 10 signes tirés de HMAC-SHA256(Kc, "nominatif|" + identifiant + "|" + id) : sans rapport
                      avec le code de la classe ni avec les autres codes de l'élève ;
  et, dans la partie de la filière du catalogue (chiffrée avec la clé de la filière), pour chaque classe et chaque
  corrigé, une enveloppe : la clé du corrigé chiffrée avec PBKDF2-HMAC-SHA256(code de classe, sel de la classe,
  100 000 tours) (sel = HMAC-SHA256(Kc, "sel|" + classe), 16 octets ; donnée authentifiée "corrige|" + classe + "|"
  + id ; IV = HMAC-SHA256(clé d'enveloppe, "enveloppe|" + id + "|" + SHA-256 du contenu), 12 octets). Une activité
  découpée en parties forme un groupe : son code ouvre les clés de toutes ses parties. Les enveloppes des codes
  NOMINATIFS ne sont pas dans le site : « comptes_firebase.py cles » (outils de comptes v6) les dépose dans
  codes/{uid}, lisible par l'élève seul (même forme, sel = HMAC-SHA256(Kc, "sel-nominatif|" + identifiant),
  donnée authentifiée "nominatif|" + identifiant + "|" + id). Le code enseignant ouvre tout (kpr). Aucun code
  n'est écrit nulle part : la page « Codes des corrigés » de l'espace prof les recalcule avec le code enseignant.

Principe cryptographique (inchangé pour chaque fichier) :
  - fichier chiffré = "NRD1" + IV (12 octets) + AES-256-GCM(contenu), avec le chemin du fichier en
    clair comme donnée authentifiée (docs/…/cours.pdf, animations/…html, entrainement/qcm-…js,
    catalogue/<partie>) : un fichier ne peut pas en remplacer un autre ;
  - IV = HMAC-SHA256(clé, chemin + empreinte du contenu), 12 premiers octets : un fichier inchangé
    donne exactement le même fichier chiffré, GitHub ne voit pas de modification ;
  - acces.js : pour chaque clé, son identifiant et un témoin chiffré ; les enveloppes de secours
    (clés chiffrées avec PBKDF2-HMAC-SHA256(mot de passe, sel, 300 000 tours)) ; celles du code
    enseignant (window.ACCES_PROF, même forme qu'en v62, plus la clé commune). Aucun mot de passe,
    aucune clé en clair.
"""
import argparse, base64, datetime, glob, hashlib, hmac, json, os, re, secrets, shutil, stat, sys

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

TOURS = 300_000
MAGIC = b"NRD1"
PROTEGEES = ["1sti2d", "bts-crsa", "bts-et", "bts-tsma"]
CHIFFRES = (".pdf", ".apkg")          # ce qui est chiffré dans docs/<filière>/
TEMOIN = "acces-ok:"                  # texte témoin, suivi du nom de la clé
NE_PAS_COPIER = {".git", "__pycache__", ".DS_Store", "Thumbs.db", "desktop.ini"}
# Ce qui sert à fabriquer le site mais porte du contenu de cours (cartes écrites à la main, questions des
# prérequis, liste des documents, chapitres) : chiffré avec la clé de l'espace enseignant (<fichier>.enc),
# rendu en clair à l'atelier par reconstruire_atelier_v4.py. Rien de tout cela ne sert aux pages du site.
ATELIER_CHIFFRE = re.compile(r"^(outils/cartes_manuelles/[^/]+\.py|outils/prerequis_[a-z0-9_]+\.py|outils/filieres\.py"
                             r"|chapitres/[^/]+\.json)$")
# Ce qui peut rester EN CLAIR dans le site publié (pages, scripts, notices, pages d'accès) : tout autre fichier
# en clair arrête la fabrication.
CLAIR_PERMIS = [re.compile(x) for x in (
    r"^index\.html$", r"^catalogue\.js$", r"^acces\.js$", r"^LISEZMOI\.md$", r"^MODELE_animation\.html$",
    r"^\.gitattributes$", r"^(calorimetre|rayonnement|flux-thermique)\.html$",
    r"^commun/[a-z]+\.(js|css)$", r"^commun/polices/[A-Za-z0-9_.-]+\.(woff2|txt)$",
    r"^entrainement/(cartes|qcm|espace)\.html$", r"^entrainement/(srs|compte|firebase-config)\.js$",
    r"^entrainement/LISEZMOI_espace\.md$", r"^entrainement/tests/[a-z0-9_]+\.test\.mjs$",
    r"^animations/[a-z0-9-]+\.html$", r"^prof/[A-Za-z0-9_]+\.(html|js|css|md)$", r"^outils/[a-z0-9_]+\.(py|html)$",
    r"^docs/[a-z0-9-]+/LISEZMOI\.txt$")]
MOTIF_QCM = re.compile(r"^qcm-(" + "|".join(re.escape(f) for f in PROTEGEES) + r")-([0-9A-Za-z]+)\.js$")
CLASSES_DE = {"1sti2d": ["sti2d"], "bts-crsa": ["crsa1", "crsa2"], "bts-tsma": ["tsma1", "tsma2"],
              "bts-et": ["et1", "et1a"]}

MOTS = """
    abeille acier aimant algue alpage ancre anneau arbre arche argent ascenseur atelier
    aurore avion bague balcon baleine bambou banane barque bassin bateau berger biscuit
    blason bobine bocal bougie boussole branche brique brouette bruine buffet bureau
    cabane cactus cadran caillou camion canard canon cargo carotte cascade castor
    cerise chalet chameau chandail chapeau chariot chateau chemin cheval chiffre cigale
    citron clairon clocher cobalt colline comete compas concert copeau corail cornet
    coton crayon criquet cuivre cyclone dauphin delta diamant domino dragon dune eclair
    ecluse ecorce ecureuil enclume epice escargot etoile falaise fanfare farine faucon
    fenetre fougere fourmi fromage fusee galet gazelle geyser girafe glacier gland gong
    goudron grenier griffon guitare hamac hangar harpe hibou horloge hublot igloo ile
    jardin jonque kayak koala lagune lampion lanterne lapin laurier lavande levier
    lezard licorne lierre loutre lune lynx manege marmotte marteau melon meteore meule
    mouette moulin muguet nacelle navire neige noisette nuage oasis ocean olive orage
    orange ortie ourson outil palmier panda papillon parapluie pelican perle phare
    piano pigeon pinceau piolet pirogue plage plume poivre pollen pommier pont potager
    poulie prairie puits quartz radeau rameau raquette recif renard requin riviere
    robot rocher roseau rubis sablier sapin saumon savane sentier serpe silex sirene
    soleil sorbet source sphinx tambour tapis tempete tigre tonneau torrent tortue
    toupie tracteur train trefle tulipe turbine vague vallee vapeur velo verger viaduc
    violon volcan wagon yacht zebre zephyr""".split()


def b64(b):
    return base64.b64encode(b).decode("ascii")


def ub64(s):
    return base64.b64decode(s)


def tirer_mot_de_passe(n=5):
    """n mots courants et deux chiffres : facile à dicter et à taper sur un téléphone. v64 : 5 mots (environ
    46 bits) par défaut — acces.js est public et une enveloppe se casse hors ligne, carte graphique à l'appui."""
    return "-".join(secrets.choice(MOTS) for _ in range(n)) + "-" + str(secrets.randbelow(90) + 10)


def id_court():
    return base64.urlsafe_b64encode(secrets.token_bytes(6)).decode("ascii")


def deriver(mot, sel, tours=TOURS):
    return hashlib.pbkdf2_hmac("sha256", mot.encode("utf-8"), sel, tours, dklen=32)


def chiffrer(k, chemin, contenu):
    empreinte = hashlib.sha256(contenu).digest()
    iv = hmac.new(k, b"iv|" + chemin.encode("utf-8") + b"|" + empreinte, hashlib.sha256).digest()[:12]
    return MAGIC + iv + AESGCM(k).encrypt(iv, contenu, chemin.encode("utf-8"))


def dechiffrer(k, chemin, donnees):
    if donnees[:4] != MAGIC:
        raise ValueError("pas un fichier NRD1 : " + chemin)
    return AESGCM(k).decrypt(donnees[4:16], donnees[16:], chemin.encode("utf-8"))


def temoin(k, nom):
    iv = hmac.new(k, b"temoin|" + nom.encode(), hashlib.sha256).digest()[:12]
    return {"iv": b64(iv), "temoin": b64(AESGCM(k).encrypt(iv, (TEMOIN + nom).encode(), None))}


def enveloppe(kenv, cle, aad, graine):
    """La clé `cle` chiffrée avec `kenv` ; IV déterministe (le fichier acces.js ne change pas d'un
    passage à l'autre tant que rien ne change)."""
    iv = hmac.new(kenv, b"enveloppe|" + graine.encode(), hashlib.sha256).digest()[:12]
    return {"iv": b64(iv), "cle": b64(AESGCM(kenv).encrypt(iv, cle, aad.encode()))}


# ------------------------------------------------------------ corrigés à débloquer (v64.2)
ALPHABET_CODES = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"     # 32 signes : ni I, ni O, ni 0, ni 1
TOURS_CODES = 100_000
# mêmes calculs dans commun/corriges.js (élève), prof/codes.js (professeur), comptes_firebase.py v6 (enveloppes
# des codes nominatifs) et reconstruire_atelier_v5.py ; vecteurs d'essai dans outils/tests_codes.py


def _h(k, texte):
    return hmac.new(k, texte.encode("utf-8"), hashlib.sha256).digest()


def annee_scolaire(jour=None):
    j = jour or datetime.date.today()
    d = j.year if j.month >= 8 else j.year - 1
    return f"{d}-{d + 1}"


def cle_corrige(kpr, ident):
    return _h(kpr, "neruda|corriges|cle|" + ident)


def nom_corrige(kpr, ident):
    return _h(kpr, "neruda|corriges|nom|" + ident).hex()[:20]


def cle_codes(kpr, annee):
    return _h(kpr, "neruda|codes-corriges|" + annee)


def signes(octets):
    return "".join(ALPHABET_CODES[x % 32] for x in octets[:10])


def code_classe(kc, classe, ident):
    return signes(_h(kc, "classe|" + classe + "|" + ident))


def code_nominatif(kc, identifiant, ident):
    return signes(_h(kc, "nominatif|" + identifiant + "|" + ident))


def sel_classe(kc, classe):
    return _h(kc, "sel|" + classe)[:16]


def sel_nominatif(kc, identifiant):
    return _h(kc, "sel-nominatif|" + identifiant)[:16]


def _enveloppe(code, sel, ident, charge, aad):
    """IV tiré de la clé d'enveloppe, de l'identifiant ET du contenu : rien ne change tant que rien ne change, et deux
    contenus différents (un groupe recomposé) n'ont jamais le même IV sous la même clé."""
    kw = hashlib.pbkdf2_hmac("sha256", code.encode("ascii"), sel, TOURS_CODES, dklen=32)
    iv = _h(kw, "enveloppe|" + ident + "|" + hashlib.sha256(charge).hexdigest())[:12]
    return iv, AESGCM(kw).encrypt(iv, charge, aad.encode("utf-8"))


def enveloppe_corrige(kc, classe, ident, charge):
    """La clé d'un corrigé (ou, pour un groupe, les clés de ses parties mises bout à bout) chiffrée avec le code de
    la classe."""
    iv, c = _enveloppe(code_classe(kc, classe, ident), sel_classe(kc, classe), ident, charge,
                       "corrige|" + classe + "|" + ident)
    return {"iv": b64(iv), "cle": b64(c)}


def enveloppe_nominative(kc, identifiant, ident, charge):
    """Même chose avec le code nominatif d'un élève (déposé dans codes/{uid} par comptes_firebase.py cles)."""
    iv, c = _enveloppe(code_nominatif(kc, identifiant, ident), sel_nominatif(kc, identifiant), ident, charge,
                       "nominatif|" + identifiant + "|" + ident)
    return {"iv": b64(iv), "c": b64(c)}


# Garde-fou (même motif que outils/fabriquer_corriges.py) : une note pour le professeur restée dans un corrigé
# arrête la fabrication. Il faut pdftotext (poppler) ; sans lui, le contrôle est sauté (une ligne le dit).
NOTE_PROF = re.compile(r"(?:Notes?|Remarques?|Conseils?)\s+(?:au|à\s+l['’]|pour\s+le|pour\s+l['’]|pour\s+la)\s*"
                       r"(?:professeur|enseignant|enseignante)|Pour\s+(?:le|l['’])\s*(?:professeur|enseignant|enseignante)"
                       r"|(?:À|A)\s+l['’]attention\s+(?:du|de\s+l['’])\s*(?:professeur|enseignant|enseignante)", re.I)
_PDFTOTEXT = {"vu": False, "chemin": None}


def note_restee(chemin):
    import subprocess
    if not _PDFTOTEXT["vu"]:
        _PDFTOTEXT["vu"], _PDFTOTEXT["chemin"] = True, shutil.which("pdftotext")
        if not _PDFTOTEXT["chemin"]:
            print("  (pdftotext absent : contrôle des notes pour le professeur dans les corrigés sauté)")
    if not _PDFTOTEXT["chemin"]:
        return None
    r = subprocess.run([_PDFTOTEXT["chemin"], "-q", "-enc", "UTF-8", chemin, "-"], capture_output=True)
    texte = re.sub(r"\s+", " ", re.sub(r"-\s*\n\s*", "", r.stdout.decode("utf-8", "replace")))
    m = NOTE_PROF.search(texte)
    return m.group(0) if m else None


def fabriquer_corriges(prive_dir, sortie, K, annee):
    """prive-atelier/corriges/… (liste : prive-atelier/donnees/corriges.json) -> sortie/corriges/<nom>.enc, et pour
    chaque filière la partie « corriges » de son catalogue : la liste, les sels et les enveloppes des classes.
    Rend ({filière: partie}, nombre de corrigés)."""
    if not prive_dir:
        return {}, 0
    man_p = os.path.join(prive_dir, "donnees", "corriges.json")
    if not os.path.exists(man_p):
        return {}, 0
    with open(man_p, encoding="utf-8") as h:
        man = json.load(h)
    kpr = K["prive"]
    kc = cle_codes(kpr, annee)
    dest = os.path.join(sortie, "corriges")
    os.makedirs(dest, exist_ok=True)
    parts = {f: {"v": 1, "annee": annee, "tours": TOURS_CODES, "sels": {}, "elements": [], "groupes": [],
                 "enveloppes": {}} for f in PROTEGEES}
    cles, vus = {}, set()
    for e in man.get("elements", []):
        fil, ident = e.get("fil"), e.get("id", "")
        if fil not in PROTEGEES or not re.match(r"^" + re.escape(fil) + r"\.[a-z0-9]+\.[A-Za-z0-9_-]+$", ident):
            sys.exit(f"ERREUR : corrigé mal décrit dans donnees/corriges.json : {ident!r}")
        if ident in vus:
            sys.exit(f"ERREUR : corrigé en double dans donnees/corriges.json : {ident}")
        vus.add(ident)
        rel = e.get("fichier", "")
        if not re.match(r"^corriges/[a-z0-9-]+/[a-z0-9]+/[A-Za-z0-9_-]+\.pdf$", rel):
            sys.exit(f"ERREUR : fichier de corrigé inattendu : {rel!r}")
        with open(os.path.join(prive_dir, rel), "rb") as h:
            donnees = h.read()
        if donnees[:5] != b"%PDF-":
            sys.exit(f"ERREUR : {rel} n'est pas un PDF")
        note = note_restee(os.path.join(prive_dir, rel))
        if note:
            sys.exit(f"ERREUR : {rel} contient encore « {note} » (note pour le professeur) : corrigé à refaire "
                     "(outils/fabriquer_corriges.py)")
        nom, k = nom_corrige(kpr, ident), cle_corrige(kpr, ident)
        cles[ident] = k
        with open(os.path.join(dest, nom + ".enc"), "wb") as h:
            h.write(chiffrer(k, "corriges/" + nom, donnees))
        el = {x: e[x] for x in ("id", "ch", "chapitre", "sorte", "titre", "pages") if x in e}
        for x in ("n", "etoiles", "doc", "partie", "groupe"):
            if e.get(x) not in (None, "", 0):
                el[x] = e[x]
        el["f"] = nom
        parts[fil]["elements"].append(el)
    fil_de = {e["id"]: e["fil"] for e in man.get("elements", [])}
    for g in man.get("groupes", []):
        fil, gid, membres = g.get("fil"), g.get("id", ""), g.get("membres") or []
        if (fil not in PROTEGEES or not re.match(r"^" + re.escape(fil) + r"\.[a-z0-9]+\.[A-Za-z0-9_-]+$", gid)
                or len(membres) < 2 or len(set(membres)) != len(membres)
                or any(m not in cles or fil_de.get(m) != fil for m in membres)):
            sys.exit(f"ERREUR : groupe de corrigés mal décrit : {gid!r}")
        if gid in vus:
            sys.exit(f"ERREUR : un groupe porte le nom d'un corrigé ou d'un autre groupe : {gid}")
        vus.add(gid)
        parts[fil]["groupes"].append({x: g[x] for x in ("id", "ch", "chapitre", "doc", "titre", "membres") if x in g})
    for fil, P in parts.items():
        if not P["elements"]:
            continue
        for classe in CLASSES_DE[fil]:
            P["sels"][classe] = b64(sel_classe(kc, classe))
            env = {el["id"]: enveloppe_corrige(kc, classe, el["id"], cles[el["id"]]) for el in P["elements"]}
            for g in P["groupes"]:
                env[g["id"]] = enveloppe_corrige(kc, classe, g["id"], b"".join(cles[m] for m in g["membres"]))
            P["enveloppes"][classe] = env
    # fichiers présents mais absents de la liste : signalés (ils ne partent pas)
    connus = {e["fichier"] for e in man.get("elements", [])}
    for racine, _, fichiers in os.walk(os.path.join(prive_dir, "corriges")):
        for n in fichiers:
            rel = os.path.relpath(os.path.join(racine, n), prive_dir).replace("\\", "/")
            if rel not in connus:
                print(f"  attention : {rel} n'est pas dans donnees/corriges.json, il n'est pas publié")
    return {f: P for f, P in parts.items() if P["elements"]}, len(cles)


# ------------------------------------------------------------ fichier des clés (v3)
def charger_cles(chemin, depuis=None, nouveau=(), nouvelle_cle=(), mot_impose=None):
    """Lit (ou crée) le fichier des clés v3 :
      <filière> : {cle, id, mot_de_passe}   clé aléatoire + mot de passe de secours
      _commune  : {cle, id}                 clé des animations et de la partie commune du catalogue
      _secours  : {sel, tours}              sel commun des mots de passe de secours
      _prof     : {mot_de_passe, sel, tours} code enseignant (repris de la v2)
      _prive    : {cle, id, iv}             clé de l'espace enseignant (reprise de la v2)"""
    if os.path.exists(chemin):
        with open(chemin, encoding="utf-8") as f:
            c = json.load(f)
        if c.get("_version") != 3:
            sys.exit(f"{chemin} n'est pas un fichier de clés v3 (pour migrer : --depuis <v2> vers un NOUVEAU fichier).")
    elif depuis:
        with open(depuis, encoding="utf-8") as f:
            v2 = json.load(f)
        if "_prof" not in v2 or "_prive" not in v2:
            sys.exit(f"{depuis} : code enseignant ou clé de l'espace enseignant absents.")
        c = {"_prof": v2["_prof"], "_prive": v2["_prive"]}
        nouveau = set(nouveau) | set(PROTEGEES)        # migration : nouveaux mots de passe de classe
        print(f"  migration depuis {os.path.basename(depuis)} : nouvelles clés, nouveaux mots de passe de classe")
    else:
        sys.exit(f"{chemin} n'existe pas : donner --depuis mots_de_passe_v2.json pour le créer.")
    # une clé changée parce qu'elle a circulé : son mot de passe de secours change avec elle (l'ancien ouvrirait
    # la nouvelle enveloppe)
    nouveau = set(nouveau) | (set(nouvelle_cle) & set(PROTEGEES))
    for fil in PROTEGEES:
        e = c.get(fil) or {}
        if not e.get("cle") or fil in nouvelle_cle:
            e["cle"], e["id"] = b64(secrets.token_bytes(32)), id_court()
            print(f"  nouvelle clé pour {fil}")
        if not e.get("mot_de_passe") or fil in nouveau:
            e["mot_de_passe"] = mot_impose if (mot_impose and fil in nouveau and len(nouveau) == 1) else tirer_mot_de_passe()
            print(f"  nouveau mot de passe de secours pour {fil} : {e['mot_de_passe']}")
        c[fil] = {"cle": e["cle"], "id": e["id"], "mot_de_passe": e["mot_de_passe"]}
    com = c.get("_commune") or {}
    if not com.get("cle") or "commune" in nouvelle_cle:
        com = {"cle": b64(secrets.token_bytes(32)), "id": id_court()}
        print("  nouvelle clé commune")
    c["_commune"] = com
    c.setdefault("_secours", {"sel": b64(secrets.token_bytes(16)), "tours": TOURS})
    if "prof" in nouveau:
        mot = mot_impose or tirer_mot_de_passe(6)
        c["_prof"] = {"mot_de_passe": mot, "sel": b64(secrets.token_bytes(16)), "tours": TOURS}
        print(f"  nouveau code enseignant : {mot}")
    c["_version"] = 3
    c["_note"] = ("Fichier SECRET (site v64 et suivants). Jamais sur GitHub ni dans le chat : Drive "
                  "NE_PAS_PUBLIER et Bitwarden. Clés des filières, clé commune, mots de passe de secours, "
                  "code enseignant, clé de l'espace enseignant.")
    nouveau_fichier = not os.path.exists(chemin)
    with open(chemin, "w", encoding="utf-8") as f:
        json.dump(c, f, ensure_ascii=False, indent=2)
    if nouveau_fichier:
        try: os.chmod(chemin, stat.S_IRUSR | stat.S_IWUSR)
        except OSError: pass
    return c


def cles_brutes(c):
    """{nom: octets} : les quatre filières, commune, prive."""
    k = {fil: ub64(c[fil]["cle"]) for fil in PROTEGEES}
    k["commune"] = ub64(c["_commune"]["cle"])
    k["prive"] = ub64(c["_prive"]["cle"])
    return k


def ids_cles(c):
    i = {fil: c[fil]["id"] for fil in PROTEGEES}
    i["commune"] = c["_commune"]["id"]
    i["prive"] = c["_prive"]["id"]
    return i


# ------------------------------------------------------------ catalogue (JS -> données)
def js_vers_json(texte):
    """Convertit les littéraux du catalogue (clés sans guillemets, commentaires, virgules finales)
    en JSON. Ne touche jamais au contenu des chaînes."""
    out, i, n = [], 0, len(texte)
    while i < n:
        c = texte[i]
        if c in "\"'":
            j, buf = i + 1, [c]
            while j < n and texte[j] != c:
                if texte[j] == "\\":
                    buf.append(texte[j:j + 2]); j += 2; continue
                buf.append(texte[j]); j += 1
            s = "".join(buf[1:])
            if c == "'":                                   # chaîne entre apostrophes -> JSON
                s = s.replace('\\\'', "'").replace('"', '\\"')
            out.append('"' + s + '"'); i = j + 1
        elif texte.startswith("/*", i):
            i = texte.index("*/", i) + 2
        elif texte.startswith("//", i):
            j = texte.find("\n", i); i = n if j < 0 else j
        elif c.isalpha() or c == "_":
            j = i
            while j < n and (texte[j].isalnum() or texte[j] == "_"):
                j += 1
            mot = texte[i:j]
            k = j
            while k < n and texte[k] in " \t\r\n":
                k += 1
            out.append('"' + mot + '"' if (k < n and texte[k] == ":" and mot not in ("true", "false", "null")) else mot)
            i = j
        else:
            out.append(c); i += 1
    s = "".join(out)
    return re.sub(r",(\s*[\]}])", r"\1", s)


def lire_catalogue(chemin):
    with open(chemin, encoding="utf-8") as f:
        texte = f.read()
    def tableau(nom):
        m = re.search(r"(?:const|var|let)\s+" + nom + r"\s*=\s*\[", texte)
        if not m:
            sys.exit(f"catalogue.js : {nom} introuvable")
        debut, prof_, i, dans = m.end() - 1, 0, m.end() - 1, None
        while i < len(texte):                    # crochet fermant correspondant (hors chaînes et commentaires)
            c = texte[i]
            if dans:
                if c == "\\": i += 2; continue
                if c == dans: dans = None
            elif c in "\"'": dans = c
            elif texte.startswith("/*", i): i = texte.index("*/", i) + 2; continue
            elif c == "[": prof_ += 1
            elif c == "]":
                prof_ -= 1
                if prof_ == 0:
                    return json.loads(js_vers_json(texte[debut:i + 1]))
            i += 1
        sys.exit(f"catalogue.js : fin de {nom} introuvable")
    return texte, tableau("FILIERES"), tableau("DOCUMENTS")


# ------------------------------------------------------- espace enseignant
TITRES_PRIVES = [  # (motif du nom de fichier, titre affiché) — le premier qui colle
    (r"^test_corrige$", "Test — corrigé"), (r"^test$", "Test — sujet"),
    # v64.2 : tests de l'ADM 0 bis (BTS ET, 30 min et 1 h ; session T0B)
    (r"^test_bis_(\d+)(min|h)$", "Test de l'ADM 0 bis ({0} {1}) — sujet"),
    (r"^test_bis_(\d+)(min|h)_corrige$", "Test de l'ADM 0 bis ({0} {1}) — corrigé"),
    (r"^ccf$", "Situation type CCF — sujet"), (r"^devoir$", "Devoir type E32 — sujet"),
    (r"^devoir(\d)$", "Devoir type E32 n°{0} — sujet"), (r"^devoir(\d)_corrige$", "Devoir type E32 n°{0} — corrigé"),
    (r"^oral$", "Oral — sujet"), (r"^u51$", "Situation U51 — sujet"),
    (r"^e4_sujet$", "Sujet type E4 — sujet"), (r"^e4_dres$", "Sujet type E4 — dossier ressources"),
    (r"^e4_drep$", "Sujet type E4 — documents réponses"),
    (r"^exercices_corrige$", "Exercices — corrigé complet"),
    (r"^activite_bis_(\d)h_corrige$", "ADM 0 bis (version {0} h) — corrigé"),
    (r"^activite_simulations_corrige$", "Activité sur simulations — corrigé"),
    (r"^activite_prealable_corrige$", "Activité préalable — corrigé"),
    (r"^activite_corrige$", "Activité — corrigé"), (r"^activite2_corrige$", "Activité 2 — corrigé"),
    (r"^activite_anim_corrige$", "Activité sur animation — corrigé"),
    (r"^activite_banc_corrige$", "Activité au banc — corrigé"),
    (r"^a(\d)_(\w+)_corrige$", "Activité {0} ({1}) — corrigé"),
    (r"^ccf_corrige$", "Situation type CCF — corrigé"), (r"^devoir_corrige$", "Devoir type E32 — corrigé"),
    (r"^oral_corrige$", "Oral — corrigé"), (r"^e4_corrige$", "Sujet type E4 — corrigé"),
    (r"^u51_corrige$", "Situation U51 — corrigé"), (r"^diagnostic_corrige$", "Questionnaire diagnostique — corrigé"),
    # ADM série 01 (apprentis, novembre 2026) : corrigés des quatre activités de découverte
    (r"^s01_four_corrige$", "Série 01 — Four industriel — corrigé et notes pour le professeur"),
    (r"^s01_banc_corrige$", "Série 01 — Banc départ-moteur — corrigé et notes pour le professeur"),
    (r"^s01_harmocem_corrige$", "Série 01 — Banc Harmocem — corrigé et notes pour le professeur"),
    (r"^s01_compensation_corrige$", "Série 01 — Compensation d'énergie réactive — corrigé et notes pour le professeur"),
    (r"^tp_four_corrige$", "TP Four industriel — corrigé"), (r"^tp_four$", "TP Four industriel — sujet"),
    (r"^tp_banc_corrige$", "TP Banc départ-moteur — corrigé"), (r"^tp_banc$", "TP Banc départ-moteur — sujet"),
    (r"^tp_piscine_corrige$", "TP Centrale de pompage — corrigé"), (r"^tp_piscine$", "TP Centrale de pompage — sujet"),
    (r"^tp_levage_corrige$", "TP Système de levage — corrigé"), (r"^tp_levage$", "TP Système de levage — sujet"),
    (r"^tp_ermalux_corrige$", "TP Éclairage Ermalux — corrigé"), (r"^tp_ermalux$", "TP Éclairage Ermalux — sujet"),
    (r"^tp_harmocem_corrige$", "TP Banc Harmocem — corrigé"), (r"^tp_harmocem$", "TP Banc Harmocem — sujet"),
    (r"^tp_(\w+)_corrige$", "TP {0} — corrigé"), (r"^tp_(\w+)$", "TP {0} — sujet"),
    # documents élèves des chapitres retirés du site (CHAPITRES_CACHES)
    (r"^prerequis$", "Prérequis"), (r"^cours_a_completer$", "Cours à compléter"),
    (r"^cours$", "Cours complet"), (r"^exercices$", "Exercices"), (r"^bilan$", "Bilan"),
    (r"^activite_prealable$", "Activité préalable"), (r"^activite$", "Activité"), (r"^activite2$", "Activité 2"),
    (r"^a(\d)_(\w+)$", "Activité {0} ({1})"), (r"^corrige_seances$", "Corrigé des séances"),
]
ORDRE_PRIVE = ["prerequis", "cours_a_completer", "cours", "exercices", "bilan", "activite_prealable", "activite",
               "activite2", "corrige_seances", "test", "test_corrige", "test_bis_30min", "test_bis_30min_corrige",
               "test_bis_1h", "test_bis_1h_corrige", "exercices_corrige", "activite_bis_3h_corrige", "activite_bis_2h_corrige", "activite_simulations_corrige", "activite_prealable_corrige", "activite_corrige", "activite2_corrige",
               "activite_anim_corrige", "activite_banc_corrige", "ccf", "ccf_corrige",
               "devoir", "devoir_corrige", "devoir2", "devoir2_corrige", "devoir3", "devoir3_corrige", "oral", "oral_corrige", "e4_sujet", "e4_dres",
               "e4_drep", "e4_corrige", "u51", "u51_corrige", "diagnostic_corrige"]


def titre_prive(nom):
    for motif, titre in TITRES_PRIVES:
        m = re.match(motif, nom)
        if m:
            return titre.format(*[g.replace("_", " ") for g in m.groups()])
    return nom.replace("_", " ")


DOSSIERS_PRIVES = ["livres", "diaporamas", "tests", "exercices", "activites", "evaluations",
                   "adm", "retires", "donnees"]
ORDRE_FIL = ["1sti2d", "bts-crsa", "bts-tsma", "bts-et"]


def dossier_prive(parts, doc, caches):
    """Range un document de l'espace enseignant dans un dossier thématique."""
    if parts[0] == "livres":
        return "livres"
    if parts[0] == "diaporamas":
        return "diaporamas"
    fil, ch = parts[0], parts[1]
    if re.match(r"^(test|test_corrige|diagnostic_corrige|test_bis_\d+(min|h)(_corrige)?)$", doc):
        return "tests"
    if doc == "exercices_corrige":
        return "exercices"
    if re.match(r"^(activite\w*|a\d_\w+|s01_\w+)_corrige$", doc):
        return "activites"
    if re.match(r"^(ccf|devoir\d*|oral|e4_\w+|u51)(_corrige)?$", doc):
        return "evaluations"
    if ch.startswith("adm"):
        return "adm"
    return "retires"


def module_filieres(atelier):
    sys.path.insert(0, os.path.join(atelier, "outils"))
    try:
        import filieres as F
        return F
    except Exception:
        return None


def fabriquer_prive(prive_dir, sortie, k, atelier, annee=None):
    """prive-atelier/<filière>/<chapitre>/<doc>.pdf, prive-atelier/livres/*.pdf et
    prive-atelier/diaporamas/<filière>/<chapitre>/*.pdf -> sortie/prive/<identifiant>.enc
    + sortie/prive/index.enc (la liste, chiffrée elle aussi). Les noms publiés sont des
    identifiants opaques : rien ne dit ce qu'il y a."""
    prive_dir = os.path.abspath(prive_dir)
    if prive_dir.startswith(os.path.abspath(atelier) + os.sep):
        sys.exit("Le dossier de l'espace enseignant ne doit pas être dans le dossier du site.")
    dest = os.path.join(sortie, "prive")
    os.makedirs(dest, exist_ok=True)
    chap, rang = {}, {}
    for f in glob.glob(os.path.join(atelier, "chapitres", "*.json")):
        with open(f, encoding="utf-8") as h:
            d = json.load(h)
        fil = os.path.basename(f)[:-5]
        chap[fil] = {c: v["titre"] for c, v in d.items()}
        rang[fil] = {c: i for i, c in enumerate(d)}
    F = module_filieres(atelier)
    caches = getattr(F, "CHAPITRES_CACHES", {}) if F else {}
    animations = getattr(F, "ANIMATIONS", {}) if F else {}
    entrees = []
    for racine, dossiers, fichiers in os.walk(prive_dir):
        if os.path.relpath(racine, prive_dir) == ".":
            dossiers[:] = [d for d in dossiers if d != "corriges"]     # v64.2 : publiés à part (corriges/)
        for nom in sorted(fichiers):
            rel = os.path.relpath(os.path.join(racine, nom), prive_dir).replace("\\", "/")
            parts = rel.split("/")
            donnees_prof = len(parts) == 2 and parts[0] == "donnees" and nom.lower().endswith(".json")
            if not (nom.lower().endswith(".pdf") or donnees_prof):
                continue
            ident = hmac.new(k, ("fichier|" + rel).encode(), hashlib.sha256).hexdigest()[:20]
            with open(os.path.join(racine, nom), "rb") as h:
                donnees = h.read()
            if rel == "donnees/corriges.json" and annee:
                # v64.2 : la page « Codes des corrigés » de l'espace prof calcule les codes de l'année publiée
                d = json.loads(donnees.decode("utf-8"))
                d["annee"] = annee
                donnees = json.dumps(d, ensure_ascii=False, indent=1).encode("utf-8")
            with open(os.path.join(dest, ident + ".enc"), "wb") as h:
                h.write(chiffrer(k, "prive/" + ident, donnees))
            doc = nom[:-4]
            if donnees_prof:
                e = {"fil": "donnees", "ch": "", "chapitre": "Données des outils du professeur",
                     "titre": nom, "ordre": 0, "type": "donnees"}
            elif parts[0] == "livres":
                e = {"fil": "livres", "ch": "", "chapitre": "Livres du professeur",
                     "titre": doc.replace("Livre_professeur_", "Livre du professeur — ").replace("_", " "),
                     "ordre": 0}
            elif parts[0] == "diaporamas":
                fil, ch = parts[1], parts[2]
                e = {"fil": fil, "ch": ch, "chapitre": chap.get(fil, {}).get(ch, ch),
                     "titre": "Diaporama complet (cours, activités, exercices et corrigés)", "ordre": 0}
            else:
                fil, ch = parts[0], parts[1]
                e = {"fil": fil, "ch": ch, "chapitre": chap.get(fil, {}).get(ch, ch),
                     "titre": titre_prive(doc),
                     "ordre": ORDRE_PRIVE.index(doc) if doc in ORDRE_PRIVE else 50}
            e.update({"id": ident, "nom": rel.replace("/", "-"), "taille": len(donnees),
                      "dossier": "donnees" if donnees_prof else dossier_prive(parts, doc, caches)})
            entrees.append(e)
    # animations des chapitres retirés du site élèves : liens dans l'espace enseignant
    for fil, chs in caches.items():
        for a in animations.get(fil, []):
            if a.get("chapitre") in chs and os.path.exists(os.path.join(atelier, a["fichier"])):
                ch = a["chapitre"]
                entrees.append({"fil": fil, "ch": ch, "chapitre": chap.get(fil, {}).get(ch, ch),
                                "titre": "Animation — " + a["titre"], "ordre": 60, "type": "lien",
                                "url": a["fichier"], "dossier": "adm" if ch.startswith("adm") else "retires"})
    for e in entrees:
        if e["fil"] == "bts-et" and e["titre"].startswith("Devoir type E32"):
            e["titre"] = e["titre"].replace("Devoir type E32", "Devoir surveillé")
    avec2 = {(e["fil"], e["ch"]) for e in entrees if e.get("nom", "").endswith("-devoir2.pdf")}
    for e in entrees:
        if (e["fil"], e["ch"]) in avec2 and e["titre"].startswith("Devoir type E32 —"):
            e["titre"] = e["titre"].replace("Devoir type E32 —", "Devoir type E32 n°1 —")
    entrees.sort(key=lambda e: (DOSSIERS_PRIVES.index(e["dossier"]),
                                ORDRE_FIL.index(e["fil"]) if e["fil"] in ORDRE_FIL else 9,
                                rang.get(e["fil"], {}).get(e["ch"], 99), e["ch"], e["ordre"], e["titre"]))
    brut = json.dumps(entrees, ensure_ascii=False, sort_keys=True).encode("utf-8")
    with open(os.path.join(dest, "index.enc"), "wb") as h:
        h.write(chiffrer(k, "prive/index", brut))
    return len(entrees)


# --------------------------------------------------- animations : une clé par page
MARQUE_PORTE = "porte-animation"


def cle_des_animations(atelier):
    """{chemin: nom de clé} : « prive » pour les chapitres retirés du site élèves, la filière pour
    une animation de ANIMATIONS_PROTEGEES (vide depuis la v64), « commune » pour toutes les autres."""
    F = module_filieres(atelier)
    caches = getattr(F, "CHAPITRES_CACHES", {}) if F else {}
    animations = getattr(F, "ANIMATIONS", {}) if F else {}
    reservees = getattr(F, "ANIMATIONS_PROTEGEES", {}) if F else {}
    choix = {}
    for fil, liste in animations.items():
        for a in liste:
            if a.get("chapitre") in caches.get(fil, []):
                choix.setdefault(a["fichier"], "prive")
    for chemin in sorted(glob.glob(os.path.join(atelier, "animations", "*.html"))):
        rel = "animations/" + os.path.basename(chemin)
        if rel in reservees:
            choix[rel] = reservees[rel]
        choix.setdefault(rel, "commune")
    # une animation retirée mais aussi listée dans un chapitre visible reste ouverte aux élèves
    for fil, liste in animations.items():
        for a in liste:
            if a.get("chapitre") not in caches.get(fil, []) and choix.get(a["fichier"]) == "prive":
                choix[a["fichier"]] = reservees.get(a["fichier"], "commune")
    return choix


def cle_des_images(atelier):
    """{entrainement/media/…: nom de clé} : les images des questionnaires et des cartes prennent la clé de la
    filière dont les fichiers de chapitre les citent ; citées par plusieurs filières, ou par aucune : commune."""
    choix = {}
    for chemin in glob.glob(os.path.join(atelier, "entrainement", "qcm-*.js")):
        m = MOTIF_QCM.match(os.path.basename(chemin))
        if not m:
            continue
        with open(chemin, encoding="utf-8") as h:
            for ref in set(re.findall(r"media/[A-Za-z0-9_./-]+\.(?:png|jpe?g|svg|gif|webp)", h.read())):
                cle = "entrainement/" + ref
                choix[cle] = m.group(1) if choix.get(cle) in (None, m.group(1)) else "commune"
    return choix


def page_porte(modele, titre, nom_cle, chemin, retour):
    return (modele.replace("{{TITRE}}", titre.replace("&", "&amp;").replace("<", "&lt;"))
                  .replace("{{CLE}}", nom_cle).replace("{{AAD}}", chemin)
                  .replace("{{ENC}}", os.path.basename(chemin) + ".enc").replace("{{RETOUR}}", retour))


# ------------------------------------------------------------ fabrication
def fabriquer(atelier, sortie, c, prive_dir=None, annee=None):
    atelier, sortie = os.path.abspath(atelier), os.path.abspath(sortie)
    annee = annee or annee_scolaire()
    if sortie.startswith(atelier + os.sep) or sortie == atelier:
        sys.exit("La sortie doit être un dossier À CÔTÉ de l'atelier, pas dedans.")
    if not os.path.exists(os.path.join(atelier, "catalogue.js")):
        sys.exit(f"{atelier} ne ressemble pas au dossier du site (pas de catalogue.js).")
    K, IDS = cles_brutes(c), ids_cles(c)

    # v64 : on fabrique dans un dossier provisoire ; la sortie n'est remplacée que si tous les garde-fous passent
    final = sortie
    sortie = final.rstrip(os.sep) + ".construction"
    if os.path.exists(sortie):
        shutil.rmtree(sortie)
    os.makedirs(sortie)

    with open(os.path.join(atelier, "outils", "porte_animation.html"), encoding="utf-8") as h:
        modele_porte = h.read()
    cles_anim = cle_des_animations(atelier)
    cles_img = cle_des_images(atelier)
    compte = {"clair": 0, "docs": {f: 0 for f in PROTEGEES}, "qcm": {f: 0 for f in PROTEGEES},
              "animations": {}, "catalogue": 0, "atelier": 0, "images": 0}

    for racine, dossiers, fichiers in os.walk(atelier):
        dossiers[:] = [d for d in dossiers if d not in NE_PAS_COPIER]
        rel = os.path.relpath(racine, atelier).replace("\\", "/")
        parts = [] if rel == "." else rel.split("/")
        cible = os.path.join(sortie, *parts) if parts else sortie
        os.makedirs(cible, exist_ok=True)
        for nom in fichiers:
            if nom in NE_PAS_COPIER or nom.lower().startswith("mots_de_passe"):
                continue
            src = os.path.join(racine, nom)
            chemin = "/".join(parts + [nom])
            with open(src, "rb") as f:
                donnees = f.read()
            # documents des classes
            if len(parts) >= 2 and parts[0] == "docs" and parts[1] in PROTEGEES and nom.lower().endswith(CHIFFRES):
                with open(os.path.join(cible, nom + ".enc"), "wb") as f:
                    f.write(chiffrer(K[parts[1]], chemin, donnees))
                compte["docs"][parts[1]] += 1
                continue
            # animations : contenu chiffré + page d'accès à la même adresse
            if parts == ["animations"] and nom.endswith(".html"):
                if MARQUE_PORTE.encode() in donnees[:600]:
                    sys.exit(f"ERREUR : {chemin} est déjà une page d'accès, pas l'animation en clair")
                nom_cle = cles_anim.get(chemin, "commune")
                with open(os.path.join(cible, nom + ".enc"), "wb") as f:
                    f.write(chiffrer(K[nom_cle], chemin, donnees))
                m = re.search(rb"<title>(.*?)</title>", donnees, re.S)
                titre = m.group(1).decode("utf-8", "replace").strip() if m else "Animation"
                retour = "../#prive" if nom_cle == "prive" else "../"
                with open(os.path.join(cible, nom), "w", encoding="utf-8") as f:
                    f.write(page_porte(modele_porte, titre, nom_cle, chemin, retour))
                compte["animations"][nom_cle] = compte["animations"].get(nom_cle, 0) + 1
                continue
            # questionnaires et cartes d'un chapitre : clé de la filière
            m = MOTIF_QCM.match(nom) if parts == ["entrainement"] else None
            if m:
                with open(os.path.join(cible, nom + ".enc"), "wb") as f:
                    f.write(chiffrer(K[m.group(1)], chemin, donnees))
                compte["qcm"][m.group(1)] += 1
                continue
            # le catalogue : remplacé par un témoin, chiffré par parties (plus bas)
            if chemin == "catalogue.js":
                continue
            # images des questionnaires et des cartes : clé de la filière qui les cite (sinon commune)
            if parts[:2] == ["entrainement", "media"]:
                with open(os.path.join(cible, nom + ".enc"), "wb") as f:
                    f.write(chiffrer(K[cles_img.get(chemin, "commune")], chemin, donnees))
                compte["images"] += 1
                continue
            # sources de l'atelier qui portent du contenu de cours : clé de l'espace enseignant
            if ATELIER_CHIFFRE.match(chemin):
                with open(os.path.join(cible, nom + ".enc"), "wb") as f:
                    f.write(chiffrer(K["prive"], chemin, donnees))
                compte["atelier"] += 1
                continue
            shutil.copy2(src, os.path.join(cible, nom))
            compte["clair"] += 1

    # ---- catalogue : partie commune (classes, toutes les animations, outils) + une partie par filière
    texte, filieres, documents = lire_catalogue(os.path.join(atelier, "catalogue.js"))
    dcat = os.path.join(sortie, "catalogue")
    os.makedirs(dcat, exist_ok=True)
    parties = {"commune": {"filieres": filieres, "documents": []}}
    for f in PROTEGEES:
        parties[f] = {"documents": []}
    for i, d in enumerate(documents):
        d = dict(d, _i=i)
        if d.get("type") == "animation" or d.get("filiere") not in PROTEGEES:
            parties["commune"]["documents"].append(d)
        else:
            parties[d["filiere"]]["documents"].append(d)
    # v64.2 : les corrigés à débloquer (fichiers corriges/*.enc ; liste et enveloppes dans la partie de la filière)
    corr, nb_corriges = fabriquer_corriges(prive_dir, sortie, K, annee)
    for f, P in corr.items():
        parties[f]["corriges"] = P
    for nom_cle, contenu in parties.items():
        brut = json.dumps(contenu, ensure_ascii=False, sort_keys=True).encode("utf-8")
        with open(os.path.join(dcat, nom_cle + ".enc"), "wb") as f:
            f.write(chiffrer(K[nom_cle], "catalogue/" + nom_cle, brut))
        compte["catalogue"] += 1
    with open(os.path.join(dcat, "source.enc"), "wb") as f:     # le fichier exact, pour reconstruire l'atelier
        f.write(chiffrer(K["prive"], "catalogue/source", texte.encode("utf-8")))
    with open(os.path.join(sortie, "catalogue.js"), "w", encoding="utf-8") as f:
        f.write("/* catalogue.js — site fermé (v64) : le catalogue est chiffré dans catalogue/<partie>.enc et\n"
                "   s'ouvre après la connexion (commun/donnees.js). Fabriqué par outils/chiffrer.py. */\n"
                "window.CATALOGUE_CHIFFRE = true;\n")

    # ---- espace enseignant
    nb_prive = fabriquer_prive(prive_dir, sortie, K["prive"], atelier, annee) if prive_dir else 0

    # ---- acces.js
    sec = c["_secours"]
    ksec = {}            # mot de passe de secours -> clé d'enveloppe (sel commun)
    acces = {"version": 2, "cles": {}, "secours": {"sel": sec["sel"], "tours": sec["tours"], "cles": {}},
             "catalogue": {nom: "catalogue/" + nom + ".enc" for nom in parties}}
    for nom in PROTEGEES + ["commune", "prive"]:
        acces["cles"][nom] = dict(temoin(K[nom], nom), id=IDS[nom])
    for fil in PROTEGEES:
        kw = deriver(c[fil]["mot_de_passe"], ub64(sec["sel"]), sec["tours"])
        ksec[fil] = kw
        acces["secours"]["cles"][fil] = {
            "env": enveloppe(kw, K[fil], "cle|" + fil, fil + "|" + IDS[fil]),
            "envc": enveloppe(kw, K["commune"], "cle|commune", "commune|" + fil + "|" + IDS["commune"])}
    prof = c["_prof"]
    kp = deriver(prof["mot_de_passe"], ub64(prof["sel"]), prof["tours"])
    tp = temoin(kp, "prof")
    env_prof = {}
    for fil in PROTEGEES:
        iv = hmac.new(kp, ("enveloppe|" + fil + "|" + IDS[fil]).encode(), hashlib.sha256).digest()[:12]
        env_prof[fil] = {"iv": b64(iv), "cle": b64(AESGCM(kp).encrypt(iv, K[fil], fil.encode()))}
    ivc = hmac.new(kp, ("enveloppe|commune|" + IDS["commune"]).encode(), hashlib.sha256).digest()[:12]
    pr = c["_prive"]
    ivp = (ub64(pr["iv"]) if pr.get("iv") else
           hmac.new(kp, ("enveloppe|prive|" + pr["id"]).encode(), hashlib.sha256).digest()[:12])
    acces_prof = {"sel": prof["sel"], "tours": prof["tours"], "iv": tp["iv"], "temoin": tp["temoin"],
                  "cles": env_prof,
                  "commune": {"iv": b64(ivc), "cle": b64(AESGCM(kp).encrypt(ivc, K["commune"], b"commune"))},
                  "prive": {"iv": b64(ivp), "cle": b64(AESGCM(kp).encrypt(ivp, K["prive"], b"prive"))}}
    # garde-fou : un mot de passe de secours ne doit pas en ouvrir un autre ni le code enseignant
    mots = [c[f]["mot_de_passe"] for f in PROTEGEES] + [prof["mot_de_passe"]]
    if len(set(mots)) != len(mots):
        sys.exit("ERREUR : deux mots de passe identiques dans le fichier des clés")
    with open(os.path.join(sortie, "acces.js"), "w", encoding="utf-8") as f:
        f.write("/* acces.js — fabriqué par outils/chiffrer.py (site v64), ne pas modifier.\n"
                "   Identifiants et témoins des clés, enveloppes de secours (mot de passe de la classe)\n"
                "   et du code enseignant. Aucun mot de passe, aucune clé en clair. */\n"
                "window.ACCES2 = " + json.dumps(acces, indent=1, sort_keys=True) + ";\n"
                "window.ACCES_PROF = " + json.dumps(acces_prof, indent=1, sort_keys=True) + ";\n")

    # ---- garde-fous
    for r, _, fs in os.walk(sortie):
        if os.sep + ".git" in r:
            continue
        relr = os.path.relpath(r, sortie).replace("\\", "/")
        for n in fs:
            p = os.path.join(r, n)
            if relr.startswith("docs") and n.lower().endswith(CHIFFRES):
                sys.exit(f"ERREUR : document en clair : {p}")
            if "corrige" in n.lower() and relr.startswith("docs") and not n.endswith(".enc"):
                sys.exit(f"ERREUR : corrigé en clair : {p}")
            if relr == "animations" and n.endswith(".html"):
                with open(p, "rb") as h:
                    if MARQUE_PORTE.encode() not in h.read(600):
                        sys.exit(f"ERREUR : animation en clair : {p}")
            if relr == "entrainement" and MOTIF_QCM.match(n):
                sys.exit(f"ERREUR : questionnaire en clair : {p}")
            if ATELIER_CHIFFRE.match((relr + "/" + n) if relr != "." else n):
                sys.exit(f"ERREUR : source de l'atelier en clair : {p}")
    with open(os.path.join(sortie, "catalogue.js"), encoding="utf-8") as h:
        if "DOCUMENTS" in h.read():
            sys.exit("ERREUR : catalogue en clair")
    dcorr = os.path.join(sortie, "corriges")
    if os.path.isdir(dcorr):
        for n in os.listdir(dcorr):
            if not re.match(r"^[0-9a-f]{20}\.enc$", n):
                sys.exit(f"ERREUR : fichier inattendu dans corriges/ : {n}")
            with open(os.path.join(dcorr, n), "rb") as h:
                if h.read(4) != MAGIC:
                    sys.exit(f"ERREUR : corrigé en clair ou abîmé : corriges/{n}")
        if len(os.listdir(dcorr)) != nb_corriges:
            sys.exit("ERREUR : corriges/ ne contient pas exactement les corrigés de la liste")
    # liste blanche : rien d'autre en clair que des pages, des scripts et des notices
    secrets = [v for v in ([c[f]["cle"] for f in PROTEGEES] + [c[f]["mot_de_passe"] for f in PROTEGEES]
                           + [c["_commune"]["cle"], c["_prive"]["cle"], c["_prof"]["mot_de_passe"]]) if v]
    noms = noms_eleves(prive_dir)
    for r, ds, fs in os.walk(sortie):
        ds[:] = [d for d in ds if d != ".git"]
        relr = os.path.relpath(r, sortie).replace("\\", "/")
        if relr == "prive" or relr.startswith("prive/") or relr == "catalogue":
            continue
        for n in fs:
            rel = n if relr == "." else relr + "/" + n
            if n.endswith(".enc"):
                continue
            if not any(m.match(rel) for m in CLAIR_PERMIS):
                sys.exit(f"ERREUR : fichier en clair non prévu dans le site publié : {rel} "
                         "(le chiffrer, ou l'ajouter à CLAIR_PERMIS s'il ne contient aucun contenu de cours)")
            with open(os.path.join(r, n), "rb") as h:
                brut = h.read()
            texte = brut.decode("utf-8", "replace")
            if any(s in texte for s in secrets):
                sys.exit(f"ERREUR : une clé ou un mot de passe du fichier des clés figure en clair dans {rel}")
            if noms:
                plat = " " + _plat(texte) + " "
                if any(" " + x + " " in plat for x in noms):
                    sys.exit(f"ERREUR : un nom complet d'élève figure en clair dans {rel}")
    # tout est bon : la sortie est remplacée (son éventuel .git est gardé)
    os.makedirs(final, exist_ok=True)
    for nom in os.listdir(final):
        if nom == ".git":
            continue
        p = os.path.join(final, nom)
        shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    for nom in os.listdir(sortie):
        shutil.move(os.path.join(sortie, nom), os.path.join(final, nom))
    os.rmdir(sortie)
    compte["prive"] = nb_prive
    compte["corriges"] = nb_corriges
    compte["annee"] = annee
    return compte


def _plat(texte):
    import unicodedata
    t = unicodedata.normalize("NFD", texte.lower())
    t = "".join(ch for ch in t if unicodedata.category(ch) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", t)


def noms_eleves(prive_dir):
    """« nom prénom » et « prénom nom » de chaque élève de la liste chiffrée de l'espace enseignant (aplatis),
    pour vérifier qu'aucun ne part en clair. Jamais affichés."""
    p = os.path.join(prive_dir or "", "donnees", "eleves.json")
    if not prive_dir or not os.path.exists(p):
        return []
    with open(p, encoding="utf-8") as h:
        d = json.load(h)
    out = set()
    for e in d.get("eleves", []):
        n, pr = _plat(e.get("nom", "")).strip(), _plat(e.get("prenom", "")).strip()
        if n and pr:
            out.add(n + " " + pr)
            out.add(pr + " " + n)
    return sorted(out)


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    ap.add_argument("atelier")
    ap.add_argument("sortie")
    ap.add_argument("--cles", required=True, help="fichier des clés v3 (hors du site)")
    ap.add_argument("--depuis", default=None, help="fichier des mots de passe v2, pour créer le fichier v3")
    ap.add_argument("--nouveau", nargs="*", default=[], help="filières (ou prof) à qui changer le mot de passe de secours")
    ap.add_argument("--nouvelle-cle", nargs="*", default=[], help="filières (ou commune) à qui changer la clé")
    ap.add_argument("--mot", default=None, help="mot de passe imposé avec --nouveau (une seule filière)")
    ap.add_argument("--prive", default=None, help="dossier de l'espace enseignant, HORS du site")
    ap.add_argument("--annee", default=None, help="année scolaire des codes des corrigés, ex. 2026-2027 (défaut : celle du jour)")
    a = ap.parse_args()
    if a.mot and len(a.nouveau) != 1:
        sys.exit("--mot s'emploie avec une seule filière après --nouveau.")
    for chemin in (a.cles, a.depuis or ""):
        if chemin and os.path.abspath(chemin).startswith(os.path.abspath(a.atelier) + os.sep):
            sys.exit("Le fichier des clés ne doit pas être dans le dossier du site.")
    if a.depuis and os.path.abspath(a.depuis) == os.path.abspath(a.cles):
        sys.exit("--depuis et --cles doivent être deux fichiers différents (le v2 est gardé tel quel).")
    if a.annee:
        m = re.match(r"^(\d{4})-(\d{4})$", a.annee)
        if not m or int(m.group(2)) != int(m.group(1)) + 1:
            sys.exit("--annee : de la forme 2026-2027")
    c = charger_cles(a.cles, a.depuis, set(a.nouveau), set(a.nouvelle_cle), a.mot)
    r = fabriquer(a.atelier, a.sortie, c, a.prive, a.annee)
    print(f"{a.sortie} fabriqué : {r['clair']} fichiers copiés tels quels ; documents "
          + ", ".join(f"{f} {n}" for f, n in r["docs"].items()) + " ; questionnaires "
          + ", ".join(f"{f} {n}" for f, n in r["qcm"].items()) + " ; animations "
          + ", ".join(f"{k} {n}" for k, n in sorted(r["animations"].items()))
          + f" ; images {r['images']} ; catalogue {r['catalogue']} parties ; sources de l'atelier chiffrées {r['atelier']}"
          + f" ; espace enseignant {r['prive']} documents ; corrigés à débloquer {r['corriges']} (codes {r['annee']})")
