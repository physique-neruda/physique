# -*- coding: utf-8 -*-
"""
Depose les PDF et reecrit le catalogue, pour toutes les filieres.

    python3 publier.py <site>                                  # catalogue seul
    python3 publier.py <site> --deposer <filiere> <collection>  # + les PDF

Exemples :
    python3 publier.py site-physique
    python3 publier.py site-physique --deposer 1sti2d collection

DEUX ETAPES SEPAREES, VOLONTAIREMENT
------------------------------------
« Deposer » copie les PDF d'une collection LaTeX vers
docs/<filiere>/<chapitre>/. Cela demande d'avoir la collection sous la main.

« Publier le catalogue » ne lit que ce qui existe deja dans le site : les PDF
deposes, les fichiers d'entrainement, les animations declarees. Cette etape
vaut donc pour toutes les filieres, y compris celles dont les sources ne sont
pas sur cette machine — il suffit d'avoir mis les PDF au bon endroit, a la
main ou non. Le catalogue ne peut jamais annoncer un fichier absent.

CE QUI N'EST JAMAIS PUBLIE
--------------------------
Le depot est public. Seuls les types cites dans la liste blanche de
outils/filieres.py sont copies et inscrits. Un second verrou refuse tout nom
contenant « corrige » ou « test ».

OU VIVENT LES TITRES DE CHAPITRE
--------------------------------
Dans chapitres/<filiere>.json, un fichier par filiere :

    { "ch16": { "rubrique": "Cours",
                "titre": "Notion d'onde et information" } }

Pour la 1re STI2D il se regenere depuis les sources LaTeX (option
--deposer). Pour les autres, il s'ecrit a la main : trois lignes par
chapitre, et c'est le seul endroit ou nommer un chapitre.
"""
import json
import os
import re
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from filieres import FILIERES, ENTRAINEMENTS, INTERDIT   # noqa: E402

DEBUT = '/* >>> bloc genere par outils/publier.py'
FIN = '/* <<< fin du bloc genere */'
RX_INTERDIT = re.compile(INTERDIT, re.I)
DOSSIER_CHAPITRES = 'chapitres'


def _motscles(titre):
    t = titre.lower().translate(str.maketrans('àâäéèêëîïôöùûüç',
                                              'aaaeeeeiioouuuc'))
    return sorted({m for m in re.sub(r'[^a-z0-9 ]', ' ', t).split()
                   if len(m) > 3})


def _titres(filiere):
    chemin = os.path.join(DOSSIER_CHAPITRES, '%s.json' % filiere)
    if not os.path.exists(chemin):
        return {}
    return json.load(open(chemin, encoding='utf-8'))


def _num(cle):
    """ch16 -> 16 ; c01 -> 01 ; tp01 -> 01."""
    m = re.search(r'(\d+)', cle)
    return m.group(1) if m else cle


def _tri(cle):
    return (re.sub(r'\d', '', cle), _num(cle))


def _entree(**k):
    return ('  {\n'
            '    filiere: %s, rubrique: %s,\n'
            '    chapitre: %s,\n'
            '    type: %s, titre: %s,\n'
            '    fichier: %s,\n'
            '    description: %s,\n'
            '    motscles: %s\n'
            '  },\n'
            % tuple(json.dumps(k[c], ensure_ascii=False)
                    for c in ('filiere', 'rubrique', 'chapitre', 'type',
                              'titre', 'fichier', 'description', 'motscles')))


def _entrainement(site, filiere, cle):
    """Relit qcm-<filiere>-ch<XX>.js s'il existe, sans moteur JavaScript."""
    chemin = os.path.join(site, 'entrainement',
                          'qcm-%s-ch%s.js' % (filiere, _num(cle)))
    if not os.path.exists(chemin):
        return None
    txt = open(chemin, encoding='utf-8').read()
    return json.loads(txt[txt.index('=', txt.index('window.CHAPITRE')) + 1:
                          txt.rindex(';')])


# ------------------------------------------------------------------ depot

def deposer(collection, site, filiere):
    """Copie les PDF publiables de la collection vers docs/<filiere>/<ch>/."""
    desc = FILIERES[filiere]
    gardes = [t for t, _, _ in desc['documents']]
    copies, ecartes, octets = 0, [], 0

    for ch in sorted((d for d in os.listdir(collection)
                      if re.fullmatch(desc['source_chapitres'], d)), key=_tri):
        dossier = os.path.join(collection, ch, 'pdf')
        if not os.path.isdir(dossier):
            continue
        cible = os.path.join(site, 'docs', filiere, ch)
        for f in sorted(os.listdir(dossier)):
            if not f.endswith('.pdf'):
                continue
            typ = re.sub(r'^.*?%s_' % ch, '', f)[:-4]
            garde = next((g for g in gardes if re.fullmatch(g, typ)), None)
            if garde is None or RX_INTERDIT.search(f):
                ecartes.append('%s/%s' % (ch, f))
                continue
            os.makedirs(cible, exist_ok=True)
            dest = os.path.join(cible, '%s.pdf' % typ)
            shutil.copyfile(os.path.join(dossier, f), dest)
            copies += 1
            octets += os.path.getsize(dest)

    print('%s : %d PDF deposes (%.1f Mo) · %d ecartes (corriges, tests, '
          'types non declares)' % (filiere, copies, octets / 1e6, len(ecartes)))
    if copies > 100:
        print('   ATTENTION : GitHub limite le glisser-deposer a 100 fichiers '
              'a la fois.\n   Envoyer docs/%s/ en deux fois.' % filiere)
    return copies


# -------------------------------------------------------------- catalogue

def bloc_filiere(site, filiere):
    """Entrees d'une filiere, deduites de ce qui existe reellement."""
    desc = FILIERES[filiere]
    titres = _titres(filiere)
    racine = os.path.join(site, 'docs', filiere)
    sortie, compte, manquants = [], {'pdf': 0, 'animation': 0, 'qcm': 0}, []

    connus = set()
    if os.path.isdir(racine):
        connus |= {c for c in os.listdir(racine)
                   if os.path.isdir(os.path.join(racine, c))}
    connus |= {a['chapitre'] for a in desc['animations']}
    connus |= {c for c in titres if _entrainement(site, filiere, c)}

    for cle in sorted(connus, key=_tri):
        meta = titres.get(cle)
        if not meta:
            manquants.append(cle)
            continue
        rub = meta['rubrique']
        chapitre = '%s %s — %s' % ('TP' if rub == 'TP' else 'Chapitre',
                                   _num(cle).lstrip('0') or '0', meta['titre'])
        mc = _motscles(meta['titre'])
        dossier = os.path.join(racine, cle)
        fichiers = sorted(os.listdir(dossier)) if os.path.isdir(dossier) else []
        anims = {a.get('avant'): a for a in desc['animations']
                 if a['chapitre'] == cle}

        def _anim(a):
            compte['animation'] += 1
            return _entree(filiere=filiere, rubrique=rub, chapitre=chapitre,
                           type='animation', titre=a['titre'],
                           fichier=a['fichier'],
                           description='%s %s.' % (a['description'],
                                                   a['formule']),
                           motscles=a['motscles'])

        for motif, titre_def, desc_def in desc['documents']:
            if motif in anims:
                sortie.append(_anim(anims.pop(motif)))
            f = next((x for x in fichiers if x.endswith('.pdf')
                      and re.fullmatch(motif, x[:-4])
                      and not RX_INTERDIT.search(x)), None)
            if not f:
                continue
            sortie.append(_entree(
                filiere=filiere, rubrique=rub, chapitre=chapitre, type='pdf',
                titre=meta.get('titres_documents', {}).get(f[:-4], titre_def),
                fichier='docs/%s/%s/%s' % (filiere, cle, f),
                description=desc_def, motscles=mc))
            compte['pdf'] += 1

        for a in anims.values():          # animations sans « avant »
            sortie.append(_anim(a))

        d = _entrainement(site, filiere, cle)
        if d:
            for champ, typ, titre, gabarit, description in ENTRAINEMENTS:
                if not d.get(champ):
                    continue
                sortie.append(_entree(
                    filiere=filiere, rubrique="S'entraîner", chapitre=chapitre,
                    type=typ, titre=titre,
                    fichier=gabarit % (filiere, d['num']),
                    description=description % len(d[champ]), motscles=mc))
                compte['qcm'] += 1
        sortie.append('')

    return sortie, compte, manquants


def _controler(source):
    """Defauts de forme du catalogue produit."""
    defauts = []
    # Une virgule qui ne suit aucune valeur : juste apres un crochet
    # ouvrant, une fin de commentaire, ou une autre virgule.
    for m in re.finditer(r'(\[|\*/|,)\s*,', source):
        ligne = source[:m.start()].count('\n') + 1
        defauts.append('virgule en trop ligne %d : elle cree une entree vide '
                       'dans DOCUMENTS' % ligne)
    if source.count('{') != source.count('}'):
        defauts.append('accolades desequilibrees')
    if source.count('[') != source.count(']'):
        defauts.append('crochets desequilibres')
    return defauts


def publier(site):
    bloc = [DEBUT,
            '   Ne rien ecrire entre les deux reperes : tout y est reecrit a'
            ' chaque passage.\n   Les entrees a la main se placent en dehors.'
            ' */', '']
    total = {'pdf': 0, 'animation': 0, 'qcm': 0}
    for filiere in FILIERES:
        morceaux, compte, manquants = bloc_filiere(site, filiere)
        for m in manquants:
            print('   ! %s/%s : pas de titre dans %s/%s.json — chapitre ignore'
                  % (filiere, m, DOSSIER_CHAPITRES, filiere))
        if not morceaux:
            continue
        bloc.append('  /* ---------------- %s ---------------- */'
                    % FILIERES[filiere]['nom'])
        bloc += morceaux
        for k in total:
            total[k] += compte[k]
    bloc.append(FIN)
    texte = '\n'.join(bloc)

    chemin = os.path.join(site, 'catalogue.js')
    h = open(chemin, encoding='utf-8').read()
    if DEBUT in h and FIN in h:
        h = h[:h.index(DEBUT)] + texte + h[h.index(FIN) + len(FIN):]
    else:
        i = h.rstrip().rfind('];')
        h = h[:i].rstrip().rstrip(',') + ',\n\n' + texte + '\n\n' + h[i:]
    # Controle avant ecriture : mieux vaut refuser que laisser un catalogue
    # casse. Une virgule en trop cree un « trou » dans le tableau, que le
    # navigateur avale sans rien dire mais qui fausse tous les comptes.
    for defaut in _controler(h):
        print('   ! ' + defaut)
        print('   catalogue.js NON modifie.')
        return
    open(chemin, 'w', encoding='utf-8').write(h)
    print('catalogue.js : %d PDF · %d animations · %d entrainements'
          % (total['pdf'], total['animation'], total['qcm']))


if __name__ == '__main__':
    site = sys.argv[1]
    if '--deposer' in sys.argv:
        i = sys.argv.index('--deposer')
        deposer(sys.argv[i + 2], site, sys.argv[i + 1])
    publier(site)
