# -*- coding: utf-8 -*-
"""
Extraction des QCM (prerequis + bilan) d'un chapitre vers le format web.

    python3 extraire_qcm.py <dossier_sources> <numero_chapitre>

Exemple :
    python3 extraire_qcm.py collection/ch16/sources 16

Produit un dictionnaire Python (repris par construire.py) contenant, pour
chaque QCM, la liste des questions avec leurs propositions, la bonne
reponse et l'explication du corrige quand elle existe.

Le format vise est celui, tres regulier, des sources de la collection :

    \\begin{qcm}
    \\item <enonce>
      \\begin{choix}
      \\item <a> \\item <b> \\item <c> \\item <d>
      \\end{choix}
    ...
    \\end{qcm}
    \\begin{aretenir}[Corrige]
    \\textbf{Q1} b \\textbullet{} \\textbf{Q2} a — <explication> ...
    \\end{aretenir}
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tex2html import conv, reste_du_latex   # noqa: E402

LETTRES = 'abcdefgh'


def _corps(tex, env):
    m = re.search(r'\\begin\{%s\}(?:\[[^\]]*\])?(.*?)\\end\{%s\}' % (env, env),
                  tex, re.S)
    return m.group(1) if m else None


def _decoupe_items(bloc):
    """Decoupe sur \\item de premier niveau (ignore ceux des sous-environnements)."""
    morceaux, prof, courant = [], 0, []
    i = 0
    while i < len(bloc):
        if bloc.startswith('\\begin{', i):
            prof += 1
        elif bloc.startswith('\\end{', i):
            prof -= 1
        if prof == 0 and bloc.startswith('\\item', i):
            if courant:
                morceaux.append(''.join(courant))
            courant = []
            i += 5
            continue
        courant.append(bloc[i])
        i += 1
    if courant:
        morceaux.append(''.join(courant))
    return [m.strip() for m in morceaux if m.strip()]


def _corrige(tex):
    """Renvoie {numero: (lettre, explication)}."""
    bloc = None
    for m in re.finditer(r'\\begin\{aretenir\}(\[[^\]]*\])?(.*?)\\end\{aretenir\}',
                         tex, re.S):
        if m.group(1) and 'orrig' in m.group(1):
            bloc = m.group(2)
    if bloc is None:
        return {}
    bloc = re.sub(r'\\setlength\{[^}]*\}\{[^}]*\}', '', bloc)
    # On decoupe sur les reperes \textbf{Qn} eux-memes : la collection utilise
    # tantot \textbullet, tantot \quad, tantot \\ comme separateur.
    reperes = list(re.finditer(r'\\textbf\{Q(\d+)\}', bloc))
    rep = {}
    for k, m in enumerate(reperes):
        fin = reperes[k + 1].start() if k + 1 < len(reperes) else len(bloc)
        suite = bloc[m.end():fin]
        mm = re.match(r'\s*([a-h])\b(.*)', suite, re.S)
        if not mm:
            continue
        expl = mm.group(2)
        for sep in ('\\textbullet{}', '\\textbullet', '\\quad', '\\\\'):
            expl = expl.replace(sep, ' ')
        expl = expl.strip().lstrip('—-–').strip().rstrip('.').strip()
        rep[int(m.group(1))] = (mm.group(1), conv(expl))
    return rep


def lire_qcm(chemin):
    tex = open(chemin, encoding='utf-8').read()
    bloc = _corps(tex, 'qcm')
    if bloc is None:
        raise SystemExit('QCM introuvable dans %s' % chemin)
    corr = _corrige(tex)
    questions, alertes = [], []

    for i, item in enumerate(_decoupe_items(bloc), start=1):
        ch = _corps(item, 'choix')
        if ch is None:
            alertes.append('Q%d : aucun bloc choix' % i)
            continue
        enonce = item[:item.index('\\begin{choix}')]
        choix = [conv(c) for c in _decoupe_items(ch)]
        lettre, expl = corr.get(i, (None, ''))
        if lettre is None:
            alertes.append('Q%d : absente du corrige' % i)
            continue
        idx = LETTRES.index(lettre)
        if idx >= len(choix):
            alertes.append('Q%d : le corrige donne « %s » mais il n\'y a que '
                           '%d propositions' % (i, lettre, len(choix)))
            continue
        q = {'q': conv(enonce), 'choix': choix, 'bonne': idx, 'expl': expl}
        questions.append(q)
        for champ in [q['q'], q['expl']] + choix:
            if reste_du_latex(champ):
                alertes.append('Q%d : LaTeX non converti -> %s'
                               % (i, ' '.join(reste_du_latex(champ))))
    return questions, alertes


def lire_meta(chemin):
    tex = open(chemin, encoding='utf-8').read()
    g = lambda cmd: (re.search(r'\\%s\{([^}]*)\}' % cmd, tex) or [None, ''])[1]
    return {'num': g('coursnum'), 'titre': g('coursnomchap'),
            'niveau': g('coursniveau')}


if __name__ == '__main__':
    src, num = sys.argv[1], sys.argv[2]
    tout = {}
    for nom, fichier in (('prerequis', 'prerequis'), ('bilan', 'bilan')):
        chemin = os.path.join(src, 'ch%s_%s.tex' % (num, fichier))
        qs, al = lire_qcm(chemin)
        tout[nom] = qs
        print('%-10s : %2d questions' % (nom, len(qs)))
        for a in al:
            print('   ! ' + a)
    print(lire_meta(os.path.join(src, 'ch%s_cours.tex' % num)))
