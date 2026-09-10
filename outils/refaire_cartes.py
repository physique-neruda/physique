# -*- coding: utf-8 -*-
"""
refaire_cartes.py — repasse toutes les cartes de tous les chapitres au filtre
de outils/cartes.py, et complète ce qui manque.

Pourquoi : deux défauts revenaient. Des cartes trop longues, où l'énoncé
tenait cinq lignes ; et surtout des cartes qui donnaient la réponse dans la
question — « En ……, les flèches sont de sens contraires, alors qu'en
convention générateur… » ne teste plus rien, le binôme est écrit dans
l'énoncé. Le filtre `bonne_carte` les écarte.

Deux filières ont leurs sources LaTeX à disposition et se régénèrent
entièrement (construire.py) ; les deux autres n'ont que leur fichier de
données. Pour celles-là on garde les cartes qui passent le filtre, et on
complète avec les questions du bilan puis celles des prérequis, qui sont
bien posées par construction.

    python3 outils/refaire_cartes.py entrainement
"""
import json
import os
import sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
import re                                                          # noqa: E402
from cartes import (_du_bilan, _cle, _cle_reponse, bonne_carte,   # noqa: E402
                    _sansacc, CIBLE, PLANCHER)

MARQUE = "window.CHAPITRE = "


def nettoyer(c):
    """Retire l'explication qui ne fait que redire la réponse.

    « un chemin fermé du circuit — un chemin fermé » : le tiret n'apporte
    rien. C'est un reste des anciennes générations.
    """
    v = c.get("verso", "")
    if " — " not in v:
        return c
    tete, queue = v.split(" — ", 1)
    def nu(t):
        return _sansacc(re.sub(r"[^\w]", "", re.sub(r"<[^>]+>", "", t)))
    a, b = nu(tete), nu(queue)
    if a and b and (b in a or a in b):
        c = dict(c)
        c["verso"] = tete
    return c


def refaire(chemin):
    brut = open(chemin, encoding="utf-8").read()
    i = brut.index(MARQUE) + len(MARQUE)
    j = brut.rindex("}") + 1
    d = json.loads(brut[i:j])
    avant = len(d.get("cartes") or [])

    cartes, vus = [], set()

    def ajouter(lot, maxi):
        pris = 0
        for c in lot:
            if len(cartes) >= CIBLE or pris >= maxi:
                break
            c = nettoyer(c)
            k, kr = _cle(c), _cle_reponse(c)
            if k in vus or (kr and kr in vus) or not bonne_carte(c):
                continue
            vus.add(k)
            if kr:
                vus.add(kr)
            cartes.append(c)
            pris += 1

    # 1. ce qui existe déjà et qui tient debout — cours, définitions, trous
    ajouter(d.get("cartes") or [], CIBLE)
    # 2. le bilan, puis les prérequis : toujours bien posés
    ajouter(_du_bilan(d.get("bilan")), CIBLE)
    ajouter(_du_bilan(d.get("prerequis")), CIBLE)

    d["cartes"] = cartes
    open(chemin, "w", encoding="utf-8").write(
        brut[:i] + json.dumps(d, ensure_ascii=False, indent=1) + brut[j:])
    return avant, len(cartes)


if __name__ == "__main__":
    dossier = sys.argv[1]
    filieres = sys.argv[2:] or None
    faibles, total = [], 0
    for f in sorted(os.listdir(dossier)):
        if not (f.startswith("qcm-") and f.endswith(".js")):
            continue
        if filieres and not any(("qcm-" + x + "-") in f for x in filieres):
            continue
        a, b = refaire(os.path.join(dossier, f))
        total += b
        marque = "" if a == b else "   %d \u2192 %d" % (a, b)
        if b < PLANCHER:
            faibles.append((f, b))
        print("  %-30s %3d cartes%s" % (f, b, marque))
    print("\n%d cartes au total" % total)
    if faibles:
        print("Sous le plancher de %d :" % PLANCHER)
        for f, b in faibles:
            print("  %-30s %3d" % (f, b))
