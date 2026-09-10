# -*- coding: utf-8 -*-
"""
enrichir_cartes.py — ajoute les cartes de définitions aux filières dont on
récupère les sources LaTeX après coup.

Le BTS CRSA et le BTS ET se régénèrent de bout en bout par construire.py,
qui sait lire leurs bilans. La 1re STI2D et le BTS TSMA, eux, ont déjà leurs
questionnaires dans le site — bilans et prérequis, écrits et vérifiés. Il
serait absurde de les reconstruire : on ne va chercher dans le cours que ce
qui manquait, les DÉFINITIONS, les encadrés à retenir et les textes à trous,
et on les monte devant les questions déjà en place.

    python3 outils/enrichir_cartes.py 1sti2d   <...>/collection entrainement
    python3 outils/enrichir_cartes.py bts-tsma <...>/collection entrainement

Les questionnaires du fichier ne sont jamais touchés : seule la liste
« cartes » est réécrite.
"""
import json
import os
import sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from cartes import fabriquer   # noqa: E402

MARQUE = "window.CHAPITRE = "


def enrichir(filiere, racine, dossier):
    resume = []
    for f in sorted(os.listdir(dossier)):
        if not (f.startswith("qcm-" + filiere + "-") and f.endswith(".js")):
            continue
        ch = f[len("qcm-" + filiere + "-"):-3]
        cours = os.path.join(racine, ch, "sources", ch + "_cours.tex")
        chemin = os.path.join(dossier, f)
        brut = open(chemin, encoding="utf-8").read()
        i = brut.index(MARQUE) + len(MARQUE)
        j = brut.rindex("}") + 1
        d = json.loads(brut[i:j])
        avant = len(d.get("cartes") or [])
        if not os.path.exists(cours):
            print("  %-24s cours introuvable, laissé tel quel" % ch)
            resume.append((ch, avant, avant, 0))
            continue
        texte = open(cours, encoding="utf-8").read()
        cartes = fabriquer(texte, bilan=d.get("bilan"), prerequis=d.get("prerequis"))
        neuves = sum(1 for c in cartes if c.get("type") in ("definition", "retenir"))
        d["cartes"] = cartes
        open(chemin, "w", encoding="utf-8").write(
            brut[:i] + json.dumps(d, ensure_ascii=False, indent=1) + brut[j:])
        resume.append((ch, avant, len(cartes), neuves))
    return resume


if __name__ == "__main__":
    filiere, racine, dossier = sys.argv[1], sys.argv[2], sys.argv[3]
    r = enrichir(filiere, racine, dossier)
    print("\n%-10s %8s %8s %10s" % ("chapitre", "avant", "après", "du cours"))
    for ch, a, b, n in r:
        print("%-10s %8d %8d %10d" % (ch, a, b, n))
