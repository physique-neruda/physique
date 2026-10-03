# -*- coding: utf-8 -*-
"""
preparer_prive.py — remplit prive-atelier/ (l'espace enseignant, EN CLAIR) à partir
des collections LaTeX décompressées et des livres du professeur.

    python3 site-physique/outils/preparer_prive.py prive-atelier \
        --sti   <…>/STI2D_annee_19ch_avec_ch00/collection \
        --crsa  <…>/BTS_CRSA_LaTeX/collection \
        --tsma  <…>/BTS_TSMA_LaTeX/collection \
        --et    <…>/BTS_ET_LaTeX \
        --livres <…>/Livres_du_professeur_vNN

Prend dans chaque <chapitre>/pdf/ tout ce qui porte « corrige » dans son nom, les
sujets de test (« _test.pdf ») et les énoncés retirés du site élèves : CCF, devoirs
E32, oraux, sujets E4 (sujet, dossier ressources, documents réponses), situations U51. Range en prive-atelier/<filière>/<chapitre>/<doc>.pdf.
Ensuite : chiffrer.py … --prive prive-atelier.
"""
import argparse, glob, os, re, shutil

def cle_et(d):
    m = re.match(r"C(\d+)$", d)
    if m: return "c%02d" % int(m.group(1))
    m = re.match(r"TP(\d+)$", d)
    if m: return "tp%02d" % int(m.group(1))
    return d.lower()

ap = argparse.ArgumentParser()
ap.add_argument("sortie")
for k in ("sti", "crsa", "tsma", "et", "livres"):
    ap.add_argument("--" + k)
a = ap.parse_args()
src = {"1sti2d": a.sti, "bts-crsa": a.crsa, "bts-tsma": a.tsma, "bts-et": a.et}
n = 0
for fil, racine in src.items():
    if not racine: continue
    for pdf in sorted(glob.glob(os.path.join(racine, "*", "pdf", "*.pdf"))):
        b = os.path.basename(pdf)
        if "corrige" not in b and not re.search(r"_(test|ccf|devoir|oral|u51|e4_sujet|e4_dres|e4_drep)\.pdf$", b):
            continue
        chdir = pdf.replace("\\", "/").split("/")[-3]
        ch = cle_et(chdir) if fil == "bts-et" else chdir
        doc = re.sub(r"^[A-Z0-9]+_(ch\d+|tp\d+|c\d+|adm\d+)_", "", b)
        d = os.path.join(a.sortie, fil, ch); os.makedirs(d, exist_ok=True)
        shutil.copy2(pdf, os.path.join(d, doc)); n += 1
if a.livres:
    os.makedirs(os.path.join(a.sortie, "livres"), exist_ok=True)
    for p in glob.glob(os.path.join(a.livres, "Livre_professeur_*.pdf")):
        shutil.copy2(p, os.path.join(a.sortie, "livres", re.sub(r"_v\d+\.pdf$", ".pdf", os.path.basename(p)))); n += 1
print(f"{n} documents rangés dans {a.sortie}")
