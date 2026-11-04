# -*- coding: utf-8 -*-
"""
cartes_anki.py — met sur le site exactement les cartes d'un paquet Anki.

Le chapitre ADM 1 est livré avec un paquet de 51 cartes construites à la main :
un symbole normalisé au recto, le nom de l'appareil, son intérêt et son
fonctionnement au verso, plus une photo du matériel réel. Les fabriquer une
seconde fois à partir du cours donnerait autre chose — ce n'est pas ce qu'on
veut. On lit donc le .apkg et on recopie les cartes telles quelles.

    python3 outils/cartes_anki.py <paquet.apkg> bts-et adm01 entrainement

Un .apkg est une archive zip : une base SQLite et les médias, numérotés, avec
un index JSON qui donne leur vrai nom. Les images sont déposées dans
entrainement/media/<chapitre>/ et les cartes y renvoient en chemin relatif.

Le fichier de données reçoit « cartes_figees: true ». construire.py et
refaire_cartes.py respectent ce drapeau et ne touchent plus aux cartes de ce
chapitre : elles ne sortent pas du cours, elles sortent du paquet.
"""
import json
import os
import shutil
import sqlite3
import sys
import tempfile
import zipfile

MARQUE = "window.CHAPITRE = "


def lire_paquet(chemin):
    """(images, notes) — les notes dans l'ordre des paquets, puis de création."""
    d = tempfile.mkdtemp()
    zipfile.ZipFile(chemin).extractall(d)
    with open(os.path.join(d, "media"), encoding="utf-8") as f:
        media = json.load(f)
    con = sqlite3.connect(os.path.join(d, "collection.anki2"))
    modeles, decks = con.execute("select models, decks from col").fetchone()
    modeles = {k: v["name"] for k, v in json.loads(modeles).items()}
    decks = {k: v["name"] for k, v in json.loads(decks).items()}
    rows = con.execute("""select n.mid, n.flds, c.did from notes n
                          join cards c on c.nid = n.id
                          group by n.id order by c.did, n.id""").fetchall()
    notes = [{"modele": modeles.get(str(m), ""), "champs": f.split("\x1f"),
              "paquet": decks.get(str(dd), "")} for m, f, dd in rows]
    return d, media, notes


def carte(note, prefixe):
    """Une note Anki devient une carte du site, sans rien y ajouter."""
    c = [x.strip() for x in note["champs"]]
    img = lambda t: t.replace('src="', 'src="' + prefixe + "/")   # noqa: E731

    if "Symbole" in note["modele"]:
        # Image · Nom · Intérêt · Fonctionnement · Photo
        recto = ('<span class="sujet">Quel est cet appareil ?</span>'
                 + img(c[0]))
        verso = "<b>" + c[1] + "</b>"
        if len(c) > 2 and c[2]:
            verso += "<br><br>" + c[2]
        if len(c) > 3 and c[3]:
            verso += "<br><br>" + c[3]
        if len(c) > 4 and c[4]:
            verso += "<br>" + img(c[4])
        return {"type": "anki", "recto": recto, "verso": verso,
                "origine": note["paquet"]}

    # Question · Réponse · Schéma · Photo
    recto = c[0] + (("<br>" + img(c[2])) if len(c) > 2 and c[2] else "")
    verso = c[1] + (("<br>" + img(c[3])) if len(c) > 3 and c[3] else "")
    return {"type": "anki", "recto": recto, "verso": verso,
            "origine": note["paquet"]}


def injecter(paquet, filiere, ch, dossier, lien=None):
    d, media, notes = lire_paquet(paquet)
    cible = os.path.join(dossier, "media", ch)
    os.makedirs(cible, exist_ok=True)
    for idx, nom in media.items():
        shutil.copy(os.path.join(d, idx), os.path.join(cible, nom))

    cartes = [carte(n, "media/" + ch) for n in notes]

    chemin = os.path.join(dossier, "qcm-%s-%s.js" % (filiere, ch))
    brut = open(chemin, encoding="utf-8").read()
    i = brut.index(MARQUE) + len(MARQUE)
    j = brut.rindex("}") + 1
    data = json.loads(brut[i:j])
    avant = len(data.get("cartes") or [])
    data["cartes"] = cartes
    data["cartes_figees"] = True
    if lien:
        # le bouton « Télécharger pour Anki » doit donner LE paquet, celui qui
        # contient les images, pas un texte tabulé qui les perdrait
        data["anki_paquet"] = lien
    open(chemin, "w", encoding="utf-8").write(
        brut[:i] + json.dumps(data, ensure_ascii=False, indent=1) + brut[j:])
    return avant, len(cartes), len(media)


if __name__ == "__main__":
    paquet, filiere, ch, dossier = sys.argv[1:5]
    lien = sys.argv[5] if len(sys.argv) > 5 else None
    a, b, m = injecter(paquet, filiere, ch, dossier, lien)
    print("%s : %d cartes -> %d cartes du paquet, %d images" % (ch, a, b, m))
