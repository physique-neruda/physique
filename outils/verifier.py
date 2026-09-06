# -*- coding: utf-8 -*-
"""
Controle de qualite de la conversion LaTeX -> web.

    python3 verifier.py <racine_collection> [<dossier_cartes>]

Quatre controles, dont trois sont nes d'erreurs reellement rencontrees :

1. RESIDUS. Du LaTeX non converti qui arriverait tel quel sous les yeux
   d'un etudiant : \\commande, $, \\[, accolades.

2. EFFACEMENTS SILENCIEUX. Le plus important, et le plus difficile a voir.
   Le filet de securite de conv() supprime toute commande qu'il ne sait pas
   rendre — sans laisser de trace. C'est ainsi que \\cos, \\sin et \\tan ont
   disparu, rendant trois propositions d'un QCM strictement identiques, et
   que le \\sqrt de « racine de 44,8 » s'est evapore. Ce controle liste ce
   qui a ete efface ; tout nom inattendu est a examiner.

3. PROPOSITIONS IDENTIQUES. Deux reponses au choix qui, une fois converties,
   s'ecrivent pareil : la question devient insoluble. La casse compte,
   « m/M » et « M/m » sont bien deux propositions differentes.

4. CARTES RELUES. Aucun recto ne doit rester marque A RELIRE.
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tex2html                                        # noqa: E402
from tex2html import reste_du_latex                    # noqa: E402
from extraire_qcm import lire_qcm                      # noqa: E402
from extraire_cartes import cartes                     # noqa: E402

# Commandes dont la suppression est normale : leur contenu est conserve,
# ou elles ne portent que de la mise en page.
EFFACEMENTS_ATTENDUS = {
    'trou', 'troubloc', 'itshape', 'bfseries', 'footnotesize', 'scriptsize',
    'small', 'normalsize', 'centering', 'raggedcolumns', 'linewidth',
    'arraystretch', 'resizebox', 'end', 'begin', 'par', 'noteatrous',
    'enttechapitre', 'renvoiexos', 'ifcourstrous', 'else', 'fi', 'label',
}


def verifier(racine, dossier_cartes=None):
    residus, doublons, arelire = [], [], []
    nq = nc = 0
    tex2html.EFFACEES.clear()

    for n in sorted(d for d in os.listdir(racine) if d.startswith('ch')):
        src = os.path.join(racine, n, 'sources')
        cours = os.path.join(src, '%s_cours.tex' % n)
        if os.path.exists(cours):
            for c in cartes(cours):
                nc += 1
                for champ in (c['recto'], c['verso']):
                    if reste_du_latex(champ or ''):
                        residus.append((n, 'carte', (champ or '')[:90]))
        for f in ('prerequis', 'bilan'):
            chemin = os.path.join(src, '%s_%s.tex' % (n, f))
            if not os.path.exists(chemin):
                continue
            qs, _ = lire_qcm(chemin)
            for i, q in enumerate(qs, 1):
                nq += 1
                for champ in [q['q'], q['expl']] + q['choix']:
                    if reste_du_latex(champ or ''):
                        residus.append((n, f, (champ or '')[:90]))
                vus = set()
                for c2 in q['choix']:
                    cle = re.sub(r'<[^>]+>|\s', '', c2)   # la casse compte
                    if cle in vus:
                        doublons.append((n, f, 'Q%d' % i, q['choix']))
                    vus.add(cle)

    if dossier_cartes and os.path.isdir(dossier_cartes):
        import json
        for f in sorted(os.listdir(dossier_cartes)):
            for c in json.load(open(os.path.join(dossier_cartes, f),
                                    encoding='utf-8')):
                if 'A RELIRE' in c.get('recto', ''):
                    arelire.append(f)
                    break

    inattendus = {k: v for k, v in tex2html.EFFACEES.items()
                  if k not in EFFACEMENTS_ATTENDUS and not k.startswith('fig')}

    print('%d questions et %d cartes analysees' % (nq, nc))
    print('%-34s %d' % ('residus LaTeX', len(residus)))
    for x in residus[:10]:
        print('     %s %s : %s' % x)
    print('%-34s %d' % ('propositions identiques', len(doublons)))
    for x in doublons[:10]:
        print('     %s %s %s : %s' % x)
    print('%-34s %d' % ('effacements inattendus', len(inattendus)))
    for k, v in sorted(inattendus.items(), key=lambda x: -x[1]):
        print('     \\%-20s %d fois' % (k, v))
    if dossier_cartes:
        print('%-34s %d' % ('paquets de cartes a relire', len(arelire)))
        for f in arelire[:10]:
            print('     ' + f)

    total = len(residus) + len(doublons) + len(inattendus)
    print('\n%s' % ('Aucune anomalie.' if total == 0
                    else '%d anomalie(s) a examiner.' % total))
    return total


if __name__ == '__main__':
    racine = sys.argv[1]
    dossier = sys.argv[2] if len(sys.argv) > 2 else None
    sys.exit(1 if verifier(racine, dossier) else 0)
