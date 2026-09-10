# -*- coding: utf-8 -*-
"""
completer_cartes.py — remonte au plancher les chapitres qui n'ont pas assez
de cartes, sans toucher aux sources LaTeX.

Six chapitres de 1re STI2D n'avaient aucune carte, et plusieurs autres en
avaient trois ou quatre : le cours à compléter n'y porte pas assez de
\\trou{} exploitables. Les questions du bilan, elles, sont déjà dans le
fichier de données du chapitre — et elles sont bien posées par construction.
On s'en sert pour compléter.

    python3 outils/completer_cartes.py ../entrainement 1sti2d bts-tsma

N'écrase jamais une carte existante : il n'ajoute qu'à la suite.
"""
import json
import os
import sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from cartes import _du_bilan, _cle, PLANCHER   # noqa: E402

MARQUE = "window.CHAPITRE = "


def completer(dossier, filiere):
    resume = []
    for f in sorted(os.listdir(dossier)):
        if not (f.startswith("qcm-" + filiere + "-ch") and f.endswith(".js")):
            continue
        p = os.path.join(dossier, f)
        brut = open(p, encoding="utf-8").read()
        i = brut.index(MARQUE) + len(MARQUE)
        j = brut.rindex("}") + 1
        data = json.loads(brut[i:j])
        avant = len(data.get("cartes") or [])
        if avant >= PLANCHER:
            resume.append((f, avant, avant))
            continue
        cartes = list(data.get("cartes") or [])
        vus = {_cle(c) for c in cartes}
        for c in _du_bilan(data.get("bilan")):
            if len(cartes) >= PLANCHER:
                break
            if _cle(c) in vus:
                continue
            vus.add(_cle(c))
            cartes.append(c)
        data["cartes"] = cartes
        neuf = (brut[:i] + json.dumps(data, ensure_ascii=False, indent=1)
                + brut[j:])
        open(p, "w", encoding="utf-8").write(neuf)
        resume.append((f, avant, len(cartes)))
    return resume


if __name__ == "__main__":
    dossier = sys.argv[1]
    for filiere in sys.argv[2:]:
        print("=== " + filiere)
        for f, a, b in completer(dossier, filiere):
            print(f"  {f:28} {a:>3} -> {b:>3}" + ("" if a == b else "   complété"))
