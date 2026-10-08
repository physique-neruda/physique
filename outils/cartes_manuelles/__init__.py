# -*- coding: utf-8 -*-
"""
cartes_manuelles — les cartes de révision écrites à la main, chapitre par chapitre.

Pourquoi : les cartes fabriquées automatiquement (outils/cartes.py) découpaient
le cours — titres d'encadrés transformés en questions, trous pris au hasard,
questions du bilan recopiées sans leurs choix. Elles n'étaient pas alignées sur
ce que l'élève doit savoir dans le chapitre.

Ici, chaque carte est écrite à la main à partir du cours du chapitre (et des
capacités du programme) et rattachée au paragraphe d'où elle vient. Deux sortes :

  t = "n"  notion  : une définition, une formule avec ses unités, un ordre de
                     grandeur, une distinction à ne pas confondre ;
  t = "m"  méthode : un savoir-faire, les étapes dans l'ordre, souvent sur
                     l'exemple du cours.

Un fichier par filière : sti2d.py, crsa.py, tsma.py, et.py. Chacun définit
FILIERE, NIVEAU et CARTES = {cle_du_chapitre: [cartes…]}.

Tout chapitre présent ici est FIGÉ : construire.py, construire_tsma.py,
enrichir_cartes.py, completer_cartes.py et refaire_cartes.py n'y touchent plus.
Pour ajouter un chapitre, on l'écrit dans le fichier de sa filière puis :

    python3 outils/injecter_cartes_manuelles.py entrainement
"""
import importlib
import os

ICI = os.path.dirname(os.path.abspath(__file__))
MODULES = ("sti2d", "crsa", "tsma", "et")

ETIQUETTE = {"n": "Notion", "m": "Méthode"}
TYPE = {"n": "notion", "m": "methode"}


def _charger():
    out = {}
    for nom in MODULES:
        m = importlib.import_module(__name__ + "." + nom)
        out[m.FILIERE] = m
    return out


def carte_site(c):
    """Une carte écrite à la main devient une carte du site (cartes.html)."""
    return {
        "type": TYPE[c["t"]],
        "recto": '<span class="sujet">' + ETIQUETTE[c["t"]] + "</span>" + c["r"],
        "verso": c["v"],
        "origine": "Cours " + c["o"] if c["o"][0] == "§" else c["o"],
    }


def pour(filiere, ch):
    """Les cartes du site pour un chapitre, ou None s'il n'a pas de cartes manuelles."""
    m = _charger().get(filiere)
    if not m or ch not in m.CARTES:
        return None
    return [carte_site(c) for c in m.CARTES[ch]]


def toutes():
    """[(filiere, niveau, ch, [cartes brutes])] pour tous les chapitres écrits."""
    out = []
    for fil, m in _charger().items():
        for ch, cartes in m.CARTES.items():
            out.append((fil, m.NIVEAU, ch, cartes))
    return out
