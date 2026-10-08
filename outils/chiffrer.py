# -*- coding: utf-8 -*-
"""
chiffrer.py — fabrique la version EN LIGNE du site, où les documents des
classes ne s'ouvrent qu'avec le mot de passe de la filière.

    python3 outils/chiffrer.py site-physique site-en-ligne --cles mots_de_passe.json

  site-physique/        l'atelier : PDF en clair, catalogue, outils. Ne se publie PLUS.
  site-en-ligne/        ce qui part sur GitHub : copie de l'atelier où chaque fichier
                        de docs/<filière>/ protégée est remplacé par sa version
                        chiffrée (<nom>.enc), plus le fichier acces.js.
  mots_de_passe.json    les mots de passe et les sels. Ne JAMAIS le mettre dans
                        site-physique/ ni dans site-en-ligne/, ni sur GitHub.

Si le fichier de mots de passe n'existe pas, il est créé avec un mot de passe
tiré au hasard pour chaque filière protégée.

CHANGER UN MOT DE PASSE (chaque rentrée, ou si un mot de passe circule) :
    python3 outils/chiffrer.py site-physique site-en-ligne --cles mots_de_passe.json \\
            --nouveau 1sti2d
Un nouveau mot de passe ET un nouveau sel sont tirés : tous les fichiers de la
filière sont rechiffrés, les anciens deviennent inutilisables, et les appareils
qui avaient mémorisé l'accès redemandent le mot de passe. Pour imposer un mot de
passe choisi : --nouveau 1sti2d --mot "mon-mot-de-passe".

CODE ENSEIGNANT : un code unique (bloc "_prof" du fichier des mots de passe) ouvre
toutes les filières d'un coup. Il se saisit dans la même fenêtre que le mot de passe
de classe. Le changer : --nouveau prof (ou --nouveau prof --mot "…").

ESPACE ENSEIGNANT CACHÉ : --prive ../prive-atelier chiffre tout ce dossier (corrigés
complets, tests, livres du professeur) avec une clé à part (bloc "_prive"), que seul le
code enseignant ouvre. Fichiers publiés sous des noms opaques dans prive/, liste comprise.
On y accède par l'adresse …/physique/#prive.

Principe cryptographique (de quoi vérifier, rien à régler) :
  - clé de la filière  = PBKDF2-HMAC-SHA256(mot de passe, sel, 300 000 tours), 32 octets ;
  - chaque fichier     = "NRD1" + IV (12 octets) + AES-256-GCM(contenu),
                         avec le chemin du fichier en clair (docs/…/cours.pdf) comme
                         donnée authentifiée : un fichier ne peut pas en remplacer un autre ;
  - IV                 = HMAC-SHA256(clé, chemin + empreinte du contenu), 12 premiers octets.
    Un PDF inchangé donne donc exactement le même fichier chiffré d'une fois sur
    l'autre : GitHub ne voit pas de modification, il n'y a rien à renvoyer.
  - acces.js contient, par filière, le sel, le nombre de tours et un petit texte
    témoin chiffré qui permet à la page de dire « mot de passe incorrect ».
    Le mot de passe lui-même n'est écrit nulle part dans le site.
"""
import argparse, base64, glob, hashlib, hmac, json, os, re, secrets, shutil, sys

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

TOURS = 300_000
MAGIC = b"NRD1"
PROTEGEES_PAR_DEFAUT = ["1sti2d", "bts-crsa", "bts-et", "bts-tsma"]
CHIFFRES = (".pdf", ".apkg")          # ce qui est chiffré dans docs/<filière>/
TEMOIN = "acces-ok:"                  # texte témoin, suivi de l'id de filière
NE_PAS_COPIER = {".git", "__pycache__", ".DS_Store", "Thumbs.db", "desktop.ini"}

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


def tirer_mot_de_passe():
    """Trois mots courants et deux chiffres : facile à dicter et à taper sur un
    téléphone, environ un milliard de combinaisons."""
    m = [secrets.choice(MOTS) for _ in range(3)]
    return "-".join(m) + "-" + str(secrets.randbelow(90) + 10)


def cle(mot, sel, tours=TOURS):
    return hashlib.pbkdf2_hmac("sha256", mot.encode("utf-8"), sel, tours, dklen=32)


def chiffrer(k, chemin, contenu):
    empreinte = hashlib.sha256(contenu).digest()
    iv = hmac.new(k, b"iv|" + chemin.encode("utf-8") + b"|" + empreinte,
                  hashlib.sha256).digest()[:12]
    return MAGIC + iv + AESGCM(k).encrypt(iv, contenu, chemin.encode("utf-8"))


def temoin(k, fil):
    iv = hmac.new(k, b"temoin|" + fil.encode(), hashlib.sha256).digest()[:12]
    return iv, AESGCM(k).encrypt(iv, (TEMOIN + fil).encode(), None)


# ------------------------------------------------------------ mots de passe
def charger_cles(chemin, nouveau, mot_impose):
    if os.path.exists(chemin):
        with open(chemin, encoding="utf-8") as f:
            cles = json.load(f)
    else:
        cles = {}
    for fil in PROTEGEES_PAR_DEFAUT:
        cles.setdefault(fil, None)
    for fil in list(cles):
        if fil.startswith("_"):
            continue
        if cles[fil] is None or fil in nouveau:
            mot = mot_impose if (mot_impose and fil in nouveau) else tirer_mot_de_passe()
            cles[fil] = {"mot_de_passe": mot, "sel": b64(secrets.token_bytes(16)),
                         "tours": TOURS}
            print(f"  nouveau mot de passe pour {fil} : {mot}")
    # code enseignant : ouvre toutes les filières (quatre mots, plus solide)
    if "_prof" not in cles or "prof" in nouveau:
        mot = mot_impose if (mot_impose and "prof" in nouveau) else (
            "-".join(secrets.choice(MOTS) for _ in range(4)) + "-" + str(secrets.randbelow(90) + 10))
        cles["_prof"] = {"mot_de_passe": mot, "sel": b64(secrets.token_bytes(16)), "tours": TOURS}
        print(f"  nouveau code enseignant : {mot}")
    # espace enseignant caché : une clé aléatoire, tirée une fois pour toutes
    if "_prive" not in cles:
        cles["_prive"] = {"cle": b64(secrets.token_bytes(32)), "id": b64(secrets.token_bytes(8))}
    cles["_note"] = ("Fichier SECRET. Ne pas déposer sur GitHub. Un bloc par filière "
                     "protégée ; supprimer un bloc rend la filière publique.")
    with open(chemin, "w", encoding="utf-8") as f:
        json.dump(cles, f, ensure_ascii=False, indent=2)
    return {k: v for k, v in cles.items() if not k.startswith("_")}, cles["_prof"], cles["_prive"]


# ------------------------------------------------------- espace enseignant
TITRES_PRIVES = [  # (motif du nom de fichier, titre affiché) — le premier qui colle
    (r"^test_corrige$", "Test — corrigé"), (r"^test$", "Test — sujet"),
    (r"^ccf$", "Situation type CCF — sujet"), (r"^devoir$", "Devoir type E32 — sujet"),
    (r"^devoir(\d)$", "Devoir type E32 n°{0} — sujet"), (r"^devoir(\d)_corrige$", "Devoir type E32 n°{0} — corrigé"),
    (r"^oral$", "Oral — sujet"), (r"^u51$", "Situation U51 — sujet"),
    (r"^e4_sujet$", "Sujet type E4 — sujet"), (r"^e4_dres$", "Sujet type E4 — dossier ressources"),
    (r"^e4_drep$", "Sujet type E4 — documents réponses"),
    (r"^exercices_corrige$", "Exercices — corrigé complet"),
    (r"^activite_corrige$", "Activité — corrigé"), (r"^activite2_corrige$", "Activité 2 — corrigé"),
    (r"^activite_anim_corrige$", "Activité sur animation — corrigé"),
    (r"^activite_banc_corrige$", "Activité au banc — corrigé"),
    (r"^a(\d)_(\w+)_corrige$", "Activité {0} ({1}) — corrigé"),
    (r"^ccf_corrige$", "Situation type CCF — corrigé"), (r"^devoir_corrige$", "Devoir type E32 — corrigé"),
    (r"^oral_corrige$", "Oral — corrigé"), (r"^e4_corrige$", "Sujet type E4 — corrigé"),
    (r"^u51_corrige$", "Situation U51 — corrigé"), (r"^diagnostic_corrige$", "Questionnaire diagnostique — corrigé"),
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
    (r"^activite$", "Activité"), (r"^activite2$", "Activité 2"),
    (r"^a(\d)_(\w+)$", "Activité {0} ({1})"), (r"^corrige_seances$", "Corrigé des séances"),
]
ORDRE_PRIVE = ["prerequis", "cours_a_completer", "cours", "exercices", "bilan", "activite",
               "activite2", "corrige_seances", "test", "test_corrige", "exercices_corrige", "activite_corrige", "activite2_corrige",
               "activite_anim_corrige", "activite_banc_corrige", "ccf", "ccf_corrige",
               "devoir", "devoir_corrige", "devoir2", "devoir2_corrige", "devoir3", "devoir3_corrige", "oral", "oral_corrige", "e4_sujet", "e4_dres",
               "e4_drep", "e4_corrige", "u51", "u51_corrige", "diagnostic_corrige"]


def titre_prive(nom):
    for motif, titre in TITRES_PRIVES:
        m = re.match(motif, nom)
        if m:
            return titre.format(*[g.replace("_", " ") for g in m.groups()])
    return nom.replace("_", " ")


# Dossiers de l'espace enseignant (ordre d'affichage)
DOSSIERS_PRIVES = ["livres", "diaporamas", "tests", "exercices", "activites", "evaluations",
                   "adm", "retires"]
ORDRE_FIL = ["1sti2d", "bts-crsa", "bts-tsma", "bts-et"]


def dossier_prive(parts, doc, caches):
    """Range un document de l'espace enseignant dans un dossier thématique."""
    if parts[0] == "livres":
        return "livres"
    if parts[0] == "diaporamas":
        return "diaporamas"
    fil, ch = parts[0], parts[1]
    if re.match(r"^(test|test_corrige|diagnostic_corrige)$", doc):
        return "tests"
    if doc == "exercices_corrige":
        return "exercices"
    if re.match(r"^(activite\w*|a\d_\w+)_corrige$", doc):
        return "activites"
    if re.match(r"^(ccf|devoir\d*|oral|e4_\w+|u51)(_corrige)?$", doc):
        return "evaluations"
    if ch.startswith("adm"):
        return "adm"
    return "retires"


def fabriquer_prive(prive_dir, sortie, k, atelier):
    """prive-atelier/<filière>/<chapitre>/<doc>.pdf, prive-atelier/livres/*.pdf et
    prive-atelier/diaporamas/<filière>/<chapitre>/*.pdf -> sortie/prive/<identifiant>.enc
    + sortie/prive/index.enc (la liste, chiffrée elle aussi). Les noms publiés sont des
    identifiants opaques : rien ne dit ce qu'il y a. Chaque entrée porte son dossier
    (livres, diaporamas, tests, exercices corrigés, corrections d'activités, évaluations,
    TP ADM, chapitres retirés) ; les animations des chapitres retirés y figurent en lien."""
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
    sys.path.insert(0, os.path.join(atelier, "outils"))
    try:
        import filieres as F
        caches = getattr(F, "CHAPITRES_CACHES", {})
        animations = getattr(F, "ANIMATIONS", {})
    except Exception:
        caches, animations = {}, {}
    entrees = []
    for racine, _, fichiers in os.walk(prive_dir):
        for nom in sorted(fichiers):
            if not nom.lower().endswith(".pdf"):
                continue
            rel = os.path.relpath(os.path.join(racine, nom), prive_dir).replace("\\", "/")
            parts = rel.split("/")
            ident = hmac.new(k, ("fichier|" + rel).encode(), hashlib.sha256).hexdigest()[:20]
            with open(os.path.join(racine, nom), "rb") as h:
                donnees = h.read()
            with open(os.path.join(dest, ident + ".enc"), "wb") as h:
                h.write(chiffrer(k, "prive/" + ident, donnees))
            doc = nom[:-4]
            if parts[0] == "livres":
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
                      "dossier": dossier_prive(parts, doc, caches)})
            entrees.append(e)
    # animations des chapitres retirés du site élèves : liens dans l'espace enseignant
    for fil, chs in caches.items():
        for a in animations.get(fil, []):
            if a.get("chapitre") in chs and os.path.exists(os.path.join(atelier, a["fichier"])):
                ch = a["chapitre"]
                entrees.append({"fil": fil, "ch": ch, "chapitre": chap.get(fil, {}).get(ch, ch),
                                "titre": "Animation — " + a["titre"], "ordre": 60, "type": "lien",
                                "url": a["fichier"], "dossier": "adm" if ch.startswith("adm") else "retires"})
    # plusieurs devoirs dans un chapitre : le premier devient « n°1 »
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


# ------------------------------------------------------------ fabrication
def fabriquer(atelier, sortie, cles, prof=None, prive=None, prive_dir=None):
    atelier, sortie = os.path.abspath(atelier), os.path.abspath(sortie)
    if sortie.startswith(atelier + os.sep) or sortie == atelier:
        sys.exit("La sortie doit être un dossier À CÔTÉ de l'atelier, pas dedans.")
    if not os.path.exists(os.path.join(atelier, "catalogue.js")):
        sys.exit(f"{atelier} ne ressemble pas au dossier du site (pas de catalogue.js).")

    derivees = {fil: cle(c["mot_de_passe"], base64.b64decode(c["sel"]), c["tours"])
                for fil, c in cles.items()}

    if os.path.exists(sortie):
        for nom in os.listdir(sortie):          # on garde un éventuel .git de la sortie
            if nom == ".git":
                continue
            p = os.path.join(sortie, nom)
            shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    os.makedirs(sortie, exist_ok=True)

    nb_clair, nb_chiffre = 0, {f: 0 for f in cles}
    for racine, dossiers, fichiers in os.walk(atelier):
        dossiers[:] = [d for d in dossiers if d not in NE_PAS_COPIER]
        rel = os.path.relpath(racine, atelier)
        cible = os.path.join(sortie, rel)
        os.makedirs(cible, exist_ok=True)
        parts = rel.replace("\\", "/").split("/")
        fil = parts[1] if len(parts) >= 2 and parts[0] == "docs" else None
        for nom in fichiers:
            if nom in NE_PAS_COPIER or nom.lower().startswith("mots_de_passe"):
                continue
            src = os.path.join(racine, nom)
            if fil in derivees and nom.lower().endswith(CHIFFRES):
                chemin = "/".join(p for p in (parts + [nom]) if p != ".")
                with open(src, "rb") as f:
                    donnees = f.read()
                with open(os.path.join(cible, nom + ".enc"), "wb") as f:
                    f.write(chiffrer(derivees[fil], chemin, donnees))
                nb_chiffre[fil] += 1
            else:
                shutil.copy2(src, os.path.join(cible, nom))
                nb_clair += 1

    # acces.js : de quoi dériver la clé et vérifier le mot de passe, rien de plus
    acces = {}
    for fil, k in derivees.items():
        iv, t = temoin(k, fil)
        acces[fil] = {"sel": cles[fil]["sel"], "tours": cles[fil]["tours"],
                      "iv": b64(iv), "temoin": b64(t)}
    # le code enseignant : chaque clé de filière, chiffrée avec la clé du code prof
    acces_prof = None
    if prof:
        kp = cle(prof["mot_de_passe"], base64.b64decode(prof["sel"]), prof["tours"])
        ivp, tp = temoin(kp, "prof")
        env = {}
        for fil, k in derivees.items():
            iv = hmac.new(kp, ("enveloppe|" + fil + "|" + cles[fil]["sel"]).encode(),
                          hashlib.sha256).digest()[:12]
            env[fil] = {"iv": b64(iv), "cle": b64(AESGCM(kp).encrypt(iv, k, fil.encode()))}
        acces_prof = {"sel": prof["sel"], "tours": prof["tours"], "iv": b64(ivp),
                      "temoin": b64(tp), "cles": env}
        if prive and prive_dir:
            kpr = base64.b64decode(prive["cle"])
            iv = hmac.new(kp, ("enveloppe|prive|" + prive["id"]).encode(), hashlib.sha256).digest()[:12]
            acces_prof["prive"] = {"iv": b64(iv), "cle": b64(AESGCM(kp).encrypt(iv, kpr, b"prive"))}
            nb_prive = fabriquer_prive(prive_dir, sortie, kpr, atelier)
            print(f"  espace enseignant : {nb_prive} documents chiffrés")
    with open(os.path.join(sortie, "acces.js"), "w", encoding="utf-8") as f:
        f.write("/* acces.js — fabriqué par outils/chiffrer.py, ne pas modifier.\n"
                "   Filières dont les documents sont chiffrés. Le mot de passe n'y\n"
                "   figure pas : seulement le sel et un témoin pour le vérifier. */\n"
                "window.ACCES = " + json.dumps(acces, indent=2) + ";\n"
                + ("window.ACCES_PROF = " + json.dumps(acces_prof, indent=2) + ";\n"
                   if acces_prof else ""))

    # garde-fou : un corrigé ne sort jamais dans une filière non protégée
    for r, _, fs in os.walk(os.path.join(sortie, "docs")):
        for n in fs:
            if "corrige" in n.lower() and not n.endswith(".enc"):
                sys.exit(f"ERREUR : corrigé en clair dans une filière non protégée : {os.path.join(r, n)}")

    # garde-fou : aucun PDF en clair ne doit subsister dans une filière protégée
    for fil in derivees:
        d = os.path.join(sortie, "docs", fil)
        for r, _, fs in os.walk(d):
            for n in fs:
                if n.lower().endswith(CHIFFRES):
                    sys.exit(f"ERREUR : fichier en clair restant : {os.path.join(r, n)}")
    return nb_clair, nb_chiffre


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    ap.add_argument("atelier")
    ap.add_argument("sortie")
    ap.add_argument("--cles", required=True, help="fichier des mots de passe (hors site)")
    ap.add_argument("--nouveau", nargs="*", default=[], help="filières à qui changer le mot de passe")
    ap.add_argument("--mot", default=None, help="mot de passe imposé avec --nouveau (une filière)")
    ap.add_argument("--prive", default=None,
                    help="dossier de l'espace enseignant (corrigés, livres du professeur), HORS du site")
    a = ap.parse_args()
    if a.mot and len(a.nouveau) != 1:
        sys.exit("--mot s'emploie avec une seule filière après --nouveau.")
    if os.path.abspath(a.cles).startswith(os.path.abspath(a.atelier) + os.sep):
        sys.exit("Le fichier des mots de passe ne doit pas être dans le dossier du site.")
    cles, prof, prive = charger_cles(a.cles, set(a.nouveau), a.mot)
    clair, chiffre = fabriquer(a.atelier, a.sortie, cles, prof, prive, a.prive)
    print(f"{a.sortie} fabriqué : {clair} fichiers copiés tels quels, "
          + ", ".join(f"{n} chiffrés pour {f}" for f, n in chiffre.items()))
