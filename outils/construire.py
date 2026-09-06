# -*- coding: utf-8 -*-
"""
Construit le fichier de donnees d'un chapitre pour le site.

    python3 construire.py <racine_collection> <numero> [<sortie>] [<filiere>]

Exemple :
    python3 construire.py collection 16 site-physique/entrainement/ 1sti2d

Produit  qcm-1sti2d-ch16.js  contenant les deux QCM et les cartes.

La filiere entre dans le nom du fichier et dans celui du paquet de cartes :
sans elle, le chapitre 1 de la 1re STI2D et le cours 1 du BTS ET, tous deux
numerotes 01, se recouvriraient.

Regle de travail :
  * les QCM sont TOUJOURS regeneres depuis les .tex  ->  la source de
    verite reste le LaTeX, il n'y a rien a maintenir en double ;
  * les cartes sont lues dans  cartes/cartes-1sti2d-ch16.json  si ce fichier
    existe (version relue et corrigee a la main), sinon le squelette est
    genere et depose a cet endroit pour etre relu.

Relancer le script apres une correction du LaTeX met le site a jour sans
toucher aux cartes deja relues.
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from extraire_qcm import lire_qcm, lire_meta          # noqa: E402
from extraire_cartes import cartes as extraire_cartes  # noqa: E402


def construire(racine, num, sortie='.', dossier_cartes='cartes',
               filiere='1sti2d'):
    src = os.path.join(racine, 'ch%s' % num, 'sources')
    meta = lire_meta(os.path.join(src, 'ch%s_cours.tex' % num))

    alertes = []
    donnees = {'filiere': filiere, 'num': meta['num'],
               'titre': meta['titre'], 'niveau': meta['niveau']}
    for nom in ('prerequis', 'bilan'):
        qs, al = lire_qcm(os.path.join(src, 'ch%s_%s.tex' % (num, nom)))
        donnees[nom] = qs
        alertes += ['%s %s' % (nom, a) for a in al]

    fcartes = os.path.join(dossier_cartes, 'cartes-%s-ch%s.json'
                           % (filiere, num))
    if os.path.exists(fcartes):
        lues = json.load(open(fcartes, encoding='utf-8'))
        brutes = [c for c in lues if 'A RELIRE' in c.get('recto', '')]
        # Une carte dont le recto n'a pas ete relu ne part pas sur le site.
        donnees['cartes'] = [c for c in lues if c not in brutes]
        if brutes:
            etat = ('%d cartes relues publiees, %d encore marquees A RELIRE '
                    'et donc ecartees' % (len(donnees['cartes']), len(brutes)))
            alertes.append('finir les rectos dans %s' % fcartes)
        else:
            etat = 'cartes relues (%s)' % fcartes
    else:
        os.makedirs(dossier_cartes, exist_ok=True)
        squelette = extraire_cartes(os.path.join(src, 'ch%s_cours.tex' % num))
        json.dump(squelette, open(fcartes, 'w', encoding='utf-8'),
                  ensure_ascii=False, indent=1)
        prets = [c for c in squelette if 'A RELIRE' not in c['recto']]
        donnees['cartes'] = prets
        etat = ('squelette de %d cartes depose dans %s (%d cartes a trous '
                'deja utilisables, %d rectos a ecrire)'
                % (len(squelette), fcartes, len(prets),
                   len(squelette) - len(prets)))
        alertes.append('les cartes non relues ne sont pas publiees')

    # Un paquet de moins de MINI cartes ne vaut pas une page : on le garde
    # au chaud plutot que de publier un chapitre a une ou deux cartes.
    MINI = 5
    if 0 < len(donnees['cartes']) < MINI:
        etat += ' — moins de %d cartes pretes, paquet non publie' % MINI
        donnees['cartes'] = []

    os.makedirs(sortie, exist_ok=True)
    chemin = os.path.join(sortie, 'qcm-%s-ch%s.js' % (filiere, num))
    with open(chemin, 'w', encoding='utf-8') as f:
        f.write('/* Genere par outils/construire.py — ne pas editer a la main.\n'
                '   %s · chapitre %s · %s\n'
                '   Les QCM viennent de ch%s_prerequis.tex et ch%s_bilan.tex,\n'
                '   les cartes de %s. */\n'
                % (filiere, num, meta['titre'], num, num, fcartes))
        f.write('window.CHAPITRE = ')
        json.dump(donnees, f, ensure_ascii=False, indent=1)
        f.write(';\n')

    print('ch%s · %s' % (num, meta['titre']))
    print('   %2d questions de prerequis, %2d de bilan, %2d cartes'
          % (len(donnees['prerequis']), len(donnees['bilan']),
             len(donnees['cartes'])))
    print('   %s' % etat)
    for a in alertes:
        print('   ! %s' % a)
    return chemin


if __name__ == '__main__':
    racine, num = sys.argv[1], sys.argv[2]
    sortie = sys.argv[3] if len(sys.argv) > 3 else '.'
    filiere = sys.argv[4] if len(sys.argv) > 4 else '1sti2d'
    construire(racine, num, sortie, filiere=filiere)
