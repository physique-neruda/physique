# -*- coding: utf-8 -*-
"""
injecter_cartes_manuelles.py — met dans les fichiers de données du site les
cartes écrites à la main (outils/cartes_manuelles/) et les fige.

    python3 outils/injecter_cartes_manuelles.py entrainement

Pour chaque chapitre écrit à la main : la liste « cartes » du fichier
entrainement/qcm-<filiere>-<ch>.js est remplacée, et « cartes_figees » passe à
true. Les questionnaires (prérequis, bilan) ne sont jamais touchés.

À relancer après toute reconstruction des fichiers de données : c'est sans
risque, le résultat est toujours le même.
"""
import json
import os
import sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from cartes_manuelles import toutes, carte_site   # noqa: E402

MARQUE = "window.CHAPITRE = "


def injecter(dossier):
    resume = []
    for fil, niveau, ch, brutes in toutes():
        chemin = os.path.join(dossier, "qcm-%s-%s.js" % (fil, ch))
        if not os.path.exists(chemin):
            resume.append((fil, ch, None, len(brutes)))
            continue
        brut = open(chemin, encoding="utf-8").read()
        i = brut.index(MARQUE) + len(MARQUE)
        j = brut.rindex("}") + 1
        d = json.loads(brut[i:j])
        avant = len(d.get("cartes") or [])
        d["cartes"] = [carte_site(c) for c in brutes]
        d["cartes_figees"] = True
        d["cartes_source"] = "outils/cartes_manuelles"
        open(chemin, "w", encoding="utf-8").write(
            brut[:i] + json.dumps(d, ensure_ascii=False, indent=1) + brut[j:])
        resume.append((fil, ch, avant, len(brutes)))
    return resume


if __name__ == "__main__":
    for fil, ch, a, b in injecter(sys.argv[1]):
        if a is None:
            print("  %-10s %-6s fichier de données absent — ignoré" % (fil, ch))
        else:
            print("  %-10s %-6s %3d cartes automatiques -> %3d cartes écrites" % (fil, ch, a, b))
