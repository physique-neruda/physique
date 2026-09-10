# -*- coding: utf-8 -*-
"""
publier.py — dépose les PDF d'une collection dans le site, puis réécrit le
bloc de catalogue encadré par les repères « >>> bloc genere ».

    python3 outils/publier.py .                                 # catalogue seul
    python3 outils/publier.py . --deposer bts-crsa <collection> # + les PDF

Le catalogue est DÉDUIT DES FICHIERS PRÉSENTS : il ne peut jamais annoncer un
document absent. Ce qui est publiable est décrit dans outils/filieres.py, sous
forme de liste blanche ; un second verrou refuse tout nom contenant
« corrige » ou « test ».

Les entrées écrites à la main se placent EN DEHORS des deux repères, sinon le
prochain passage les efface.
"""
import json, os, re, shutil, sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from filieres import (FILIERES, DOCUMENTS, ANIMATIONS, SOURCES, DOSSIERS_ET,
                      RUBRIQUE_DU_CHAPITRE, TITRES_PARTICULIERS)

DEBUT = "/* >>> bloc genere par outils/publier.py"
FIN   = "/* <<< fin du bloc genere */"
INTERDITS = ("corrige", "corrigé", "test")


# --------------------------------------------------------------- utilitaires
def js(s):
    """Chaîne JavaScript entre guillemets doubles."""
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def liste(v):
    return "[" + ", ".join(js(x) for x in v) + "]"


def chapitres(fil):
    p = os.path.join(ICI, "..", "chapitres", fil + ".json")
    if not os.path.exists(p):
        return {}
    with open(p, encoding="utf-8") as f:
        return json.load(f)


def publiable(nom):
    n = nom.lower()
    return not any(mot in n for mot in INTERDITS)


# ------------------------------------------------------------ dépôt des PDF
def deposer(site, fil, racine):
    """Copie les PDF de la liste blanche vers docs/<fil>/<ch>/<doc>.pdf."""
    src = SOURCES[fil]
    copies, manquants = 0, []
    for ch in chapitres(fil):
        dossier = src["dossier"].format(ch=ch, CH=DOSSIERS_ET.get(ch, ch))
        for doc, _rub, _tit, _desc in DOCUMENTS[fil]:
            if not publiable(doc):
                continue
            f = os.path.join(racine, dossier, src["motif"].format(ch=ch, doc=doc))
            if not os.path.exists(f):
                continue
            cible = os.path.join(site, "docs", fil, ch)
            os.makedirs(cible, exist_ok=True)
            shutil.copy2(f, os.path.join(cible, doc + ".pdf"))
            copies += 1
    return copies, manquants


# ------------------------------------------------------- écriture du bloc
def entrainement(site, fil, ch, num):
    """Entrées « S'entraîner », seulement si le fichier de données existe et
    contient effectivement la rubrique concernée."""
    p = os.path.join(site, "entrainement", f"qcm-{fil}-{ch}.js")
    if not os.path.exists(p):
        return []
    with open(p, encoding="utf-8") as f:
        brut = f.read()
    # l'en-tête du fichier est un commentaire qui peut contenir des accolades
    # (« les cartes des \trou{} ») : on part du nom de la variable, pas de la
    # première accolade venue.
    marque = "window.CHAPITRE = "
    if marque not in brut:
        return []
    try:
        data = json.loads(brut[brut.index(marque) + len(marque): brut.rindex("}") + 1])
    except ValueError:
        return []
    out = []
    if data.get("prerequis"):
        out.append(("qcm", "Prérequis — se tester avant",
                    f"entrainement/qcm.html?f={fil}&ch={num}&type=prerequis",
                    f"{len(data['prerequis'])} questions pour vérifier les acquis "
                    "avant d'ouvrir le chapitre."))
    if data.get("bilan"):
        out.append(("qcm", "Bilan — se tester après",
                    f"entrainement/qcm.html?f={fil}&ch={num}&type=bilan",
                    f"{len(data['bilan'])} questions sur tout le chapitre."))
    if data.get("cartes"):
        out.append(("cartes", "Cartes de révision",
                    f"entrainement/cartes.html?f={fil}&ch={num}",
                    f"{len(data['cartes'])} cartes recto-verso. Une question, on répond "
                    "dans sa tête, on retourne."))
    return out


def bloc(site):
    lignes = []
    for f in FILIERES:
        fil = f["id"]
        chaps = chapitres(fil)
        if not chaps:
            continue
        premier = True
        for ch, info in chaps.items():
            entrees = []
            dossier = os.path.join(site, "docs", fil, ch)
            presents = set(os.listdir(dossier)) if os.path.isdir(dossier) else set()
            anims = [a for a in ANIMATIONS.get(fil, []) if a["chapitre"] == ch]
            forcee = RUBRIQUE_DU_CHAPITRE.get(fil, {}).get(ch)

            for doc, rub, titre, desc in DOCUMENTS[fil]:
                for a in anims:
                    if a.get("avant") == doc:
                        entrees.append(dict(rubrique=forcee or a["rubrique"],
                                            type="animation", titre=a["titre"],
                                            fichier=a["fichier"], description=a["description"],
                                            trouve=a.get("trouve"),
                                            motscles=a.get("motscles") or info["motscles"]))
                if doc + ".pdf" not in presents or not publiable(doc):
                    continue
                t, d = TITRES_PARTICULIERS.get((fil, ch, doc), (titre, desc))
                entrees.append(dict(rubrique=forcee or rub, type="pdf", titre=t,
                                    fichier=f"docs/{fil}/{ch}/{doc}.pdf",
                                    description=d, trouve=None,
                                    motscles=info["motscles"]))
            for a in anims:
                if a.get("avant") is None:
                    entrees.append(dict(rubrique=forcee or a["rubrique"], type="animation",
                                        titre=a["titre"], fichier=a["fichier"],
                                        description=a["description"], trouve=a.get("trouve"),
                                        motscles=a.get("motscles") or info["motscles"]))
            for typ, titre, fichier, desc in entrainement(site, fil, ch, info["num"]):
                entrees.append(dict(rubrique="S'entraîner", type=typ, titre=titre,
                                    fichier=fichier, description=desc, trouve=None,
                                    motscles=info["motscles"]))
            if not entrees:
                continue
            if premier:
                lignes.append(f'  /* ---------------- {f["nom"]} ---------------- */')
                premier = False
            for e in entrees:
                lignes.append("  {")
                lignes.append(f'    filiere: {js(fil)}, rubrique: {js(e["rubrique"])},')
                lignes.append(f'    chapitre: {js(info["titre"])},')
                lignes.append(f'    type: {js(e["type"])}, titre: {js(e["titre"])},')
                lignes.append(f'    fichier: {js(e["fichier"])},')
                lignes.append(f'    description: {js(e["description"])},')
                if e["trouve"]:
                    lignes.append(f'    trouve: {js(e["trouve"])},')
                lignes.append(f'    motscles: {liste(e["motscles"])}')
                lignes.append("  },")
                lignes.append("")
            lignes.append("")
        lignes.append("")
    return "\n".join(lignes).rstrip() + "\n"


def ecrire(site):
    p = os.path.join(site, "catalogue.js")
    with open(p, encoding="utf-8") as f:
        src = f.read()
    i, j = src.index(DEBUT), src.index(FIN)
    entete = (DEBUT + "\n"
              "   Ne rien ecrire entre les deux reperes : tout y est reecrit a chaque passage.\n"
              "   Les entrees a la main se placent en dehors. */\n\n")
    neuf = src[:i] + entete + bloc(site) + "\n" + src[j:]
    with open(p, "w", encoding="utf-8") as f:
        f.write(neuf)
    return neuf.count("filiere:")


if __name__ == "__main__":
    site = sys.argv[1] if len(sys.argv) > 1 else "."
    if "--deposer" in sys.argv:
        k = sys.argv.index("--deposer")
        fil, racine = sys.argv[k + 1], sys.argv[k + 2]
        n, _ = deposer(site, fil, racine)
        print(f"{n} PDF déposés pour {fil}")
    n = ecrire(site)
    print(f"catalogue.js réécrit — {n} entrées")
