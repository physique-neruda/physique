# -*- coding: utf-8 -*-
"""
Extraction des cartes de revision depuis les encadres du cours.

    python3 extraire_cartes.py <dossier_sources> <numero_chapitre>

Le gabarit neruda-cours.sty balise deja le cours semantiquement : les
encadres definition / aretenir / attention / essentiel et la commande
\\formulecle designent exactement ce qu'un etudiant doit savoir restituer.
Le script s'en sert comme VERSO des cartes.

Deux niveaux d'automatisme, a distinguer :

  * Les cartes issues de \\trou{...} sont produites entierement seules et
    sont les meilleures : le trou marque ce que l'enseignant a lui-meme
    choisi de faire retrouver dans le cours a completer.
  * Pour les autres encadres, le verso est extrait automatiquement mais le
    RECTO (la question) est seulement propose a partir du titre de
    l'encadre. Il demande une relecture : « Definition : Onde » n'est pas
    encore une bonne question de carte.

Le script ecrit donc un squelette JSON a finir, jamais un paquet pret a
diffuser.
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tex2html import conv, _arg   # noqa: E402

ENCADRES = ('definition', 'aretenir', 'attention', 'essentiel')


def _listes(s):
    """Rend les itemize lisibles avant conversion : \\item -> tiret."""
    s = re.sub(r'\\begin\{[a-zA-Z*]+\}(\[[^\]]*\])?', '', s)
    s = re.sub(r'\\end\{[a-zA-Z*]+\}', '', s)
    s = re.sub(r'\\item(\[[^\]]*\])?\s*', '\n• ', s)
    return s


def _tronque(s):
    """Le fragment de contexte coupe-t-il une formule en deux ?

    Les rectos sont decoupes dans une fenetre de texte : la coupure peut
    tomber au milieu d'un $...$ ou d'un \\[...\\], et la formule ressort
    alors en morceaux. Mieux vaut renoncer au contexte que l'afficher faux.
    """
    return (s.count('$') % 2 == 1
            or s.count('\\[') != s.count('\\]'))


def _propre(s):
    t = conv(_listes(s)).replace(' • ', '\n• ').strip()
    return t.lstrip('\\ .;,').strip()


def cartes(chemin):
    tex = open(chemin, encoding='utf-8').read()
    corps = tex[tex.index('\\begin{document}'):]
    sortie = []

    # 1. Cartes a trous : automatiques et fiables
    #    Le lookahead evite d'attraper le debut de \troubloc, traite plus bas.
    for m in re.finditer(r'\\trou(?=\{)', corps):
        arg, fin = _arg(corps, m.end())
        # on ne garde que la phrase qui porte le trou
        avant = corps[max(0, m.start() - 400):m.start()]
        coupe = max(avant.rfind('. '), avant.rfind('\\\\'),
                    avant.rfind('\n\n'), avant.rfind('}\n'))
        avant = avant[coupe + 1:] if coupe >= 0 else avant
        apres = corps[fin:fin + 260]
        for stop in ('. ', '\\\\', '\n\n'):
            if stop in apres:
                apres = apres[:apres.index(stop) + 1]
        phrase = avant + '\u2026\u2026' + apres
        if _tronque(phrase):
            phrase = '\u2026\u2026'
        sortie.append({
            'type': 'trou',
            'recto': _propre(phrase),
            'verso': _propre(arg),
            'origine': 'cours a completer',
        })

    # 2. \troubloc[n]{...} : n lignes vides dans le cours a completer.
    #    Le contenu est exactement ce que l'etudiant doit savoir ecrire.
    for m in re.finditer(r'\\troubloc\s*(\[[^\]]*\])?', corps):
        arg, fin = _arg(corps, m.end())
        avant = corps[max(0, m.start() - 900):m.start()]
        for stop in ('\n\n', '\\par'):
            if stop in avant:
                avant = avant.rsplit(stop, 1)[1]
        # on ne garde que la derniere phrase, jamais un fragment de mot
        coupe = max(avant.rfind('. '), avant.rfind('! '), avant.rfind('? '))
        if coupe >= 0:
            avant = avant[coupe + 1:]
        recto = '' if _tronque(avant) else _propre(avant)
        if recto[:1].islower():
            recto = ''
        verso = _propre(arg)
        if not verso:
            continue
        sortie.append({
            'type': 'trou',
            'recto': (recto + '\n\u2026\u2026') if recto
                     else 'A RELIRE : quelle relation ecrire ici ?',
            'verso': verso,
            'origine': 'cours a completer',
        })

    # 3. Formules cles
    for m in re.finditer(r'\\formulecle', corps):
        arg, _ = _arg(corps, m.end())
        sortie.append({
            'type': 'formule',
            'recto': 'A RELIRE : quelle est la relation cle du chapitre ?',
            'verso': conv('$%s$' % arg),
            'origine': 'formulecle',
        })

    # 4. Encadres : verso automatique, recto a relire
    for env in ENCADRES:
        motif = r'\\begin\{%s\}(\[[^\]]*\])?(.*?)\\end\{%s\}' % (env, env)
        for m in re.finditer(motif, corps, re.S):
            titre = (m.group(1) or '')[1:-1]
            corpstexte = _propre(m.group(2))
            if len(corpstexte) < 15:
                continue
            sortie.append({
                'type': env,
                'recto': 'A RELIRE : %s' % (conv(titre) if titre else env),
                'verso': corpstexte,
                'origine': env + (' [%s]' % titre if titre else ''),
            })
    return sortie


if __name__ == '__main__':
    src, num = sys.argv[1], sys.argv[2]
    c = cartes(os.path.join(src, 'ch%s_cours.tex' % num))
    auto = sum(1 for x in c if x['type'] == 'trou')
    print('%d cartes extraites, dont %d pretes (trous) et %d a relire'
          % (len(c), auto, len(c) - auto))
    print(json.dumps(c, ensure_ascii=False, indent=1))
