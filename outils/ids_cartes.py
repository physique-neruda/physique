# -*- coding: utf-8 -*-
"""
ids_cartes.py — identifiants stables des cartes de révision (site v64, novembre 2026).

Chaque carte d'un chapitre (entrainement/qcm-<filière>-<chapitre>.js, tableau « cartes ») porte un
identifiant « id » (une chaîne) qui ne change plus. L'avancement d'un élève (srs.js : neruda.cartes.
<filière>.<chapitre>, dans le navigateur et dans son compte) est rangé par identifiant : un paquet
réordonné, complété ou coupé en paquets par notion garde l'avancement de chacun.

  - Départ (v64) : l'identifiant d'une carte est son rang actuel (« 0 », « 1 »…), celui que srs.js
    utilisait déjà : aucun historique ne bouge.
  - Ensuite, quand un outil réécrit les cartes d'un chapitre, une carte reconnue (même recto, aux
    accents, à la ponctuation et aux balises près ; à défaut, même verso) garde son identifiant ; une
    nouvelle carte reçoit le suivant (champ « id_suivant » du chapitre) : un identifiant retiré n'est
    jamais redonné à une autre carte.

Dans un outil qui écrit un fichier de chapitre :
    from ids_cartes import conserver
    conserver(chemin, data)          # juste avant d'écrire data dans chemin (le fichier est relu)

En ligne de commande (une fois, v64 : pose les identifiants de départ ; sans effet ensuite) :
    python3 outils/ids_cartes.py entrainement
"""
import glob, json, os, re, sys, unicodedata

MARQUE = "window.CHAPITRE = "


def _nu(t):
    t = re.sub(r"<[^>]+>", " ", str(t or ""))
    t = re.sub(r"&[a-z]+;|&#\d+;", " ", t)
    return t


def _norme(t, n):
    t = unicodedata.normalize("NFD", _nu(t).lower())
    t = "".join(ch for ch in t if unicodedata.category(ch) != "Mn")
    return re.sub(r"[^a-z0-9]", "", t)[:n]


def cle_recto(c):
    return _norme(c.get("recto"), 90)


def cle_verso(c):
    v = _norme(c.get("verso"), 90)
    return v if len(v) >= 12 else None


def lire(chemin):
    """Le dictionnaire CHAPITRE d'un fichier qcm-….js (None s'il est absent ou illisible)."""
    if not chemin or not os.path.exists(chemin):
        return None
    brut = open(chemin, encoding="utf-8").read()
    if MARQUE not in brut:
        return None
    try:
        return json.loads(brut[brut.index(MARQUE) + len(MARQUE): brut.rindex("}") + 1])
    except ValueError:
        return None


def _num(x):
    try:
        return int(str(x))
    except ValueError:
        return None


def attribuer(anciennes, nouvelles, suivant):
    """Pose « id » sur chaque carte de nouvelles ; rend le prochain identifiant libre."""
    par_recto, par_verso = {}, {}
    for i, c in enumerate(anciennes or []):
        ident = str(c["id"]) if c.get("id") is not None else str(i)
        par_recto.setdefault(cle_recto(c), ident)
        v = cle_verso(c)
        if v:
            par_verso.setdefault(v, ident)
    pris = set()
    for c in nouvelles or []:
        ident = str(c["id"]) if c.get("id") is not None else None
        if ident is None or ident in pris:
            ident = None
            for candidat in (par_recto.get(cle_recto(c)), par_verso.get(cle_verso(c) or "")):
                if candidat is not None and candidat not in pris:
                    ident = candidat
                    break
        if ident is None:
            while str(suivant) in pris:
                suivant += 1
            ident = str(suivant)
            suivant += 1
        pris.add(ident)
        c["id"] = ident
        n = _num(ident)
        if n is not None and n >= suivant:
            suivant = n + 1
    return suivant


def conserver(chemin, data):
    """Avant d'écrire data dans chemin : reprend les identifiants des cartes du fichier existant."""
    ancien = lire(chemin) or {}
    anciennes = ancien.get("cartes") or []
    nums = [_num(c.get("id")) for c in anciennes if c.get("id") is not None]
    suivant = max([ancien.get("id_suivant") or 0, len(anciennes)] + [n + 1 for n in nums if n is not None])
    if not data.get("cartes"):
        data["id_suivant"] = max(suivant, data.get("id_suivant") or 0)
        return data
    data["id_suivant"] = attribuer(anciennes, data["cartes"], suivant)
    return data


def initialiser(dossier):
    """v64 : identifiants de départ = rangs actuels (rien ne change pour srs.js). Sans effet sur un fichier
    dont les cartes ont déjà toutes un identifiant."""
    faits = []
    for chemin in sorted(glob.glob(os.path.join(dossier, "qcm-*.js"))):
        brut = open(chemin, encoding="utf-8").read()
        if MARQUE not in brut:
            continue
        i = brut.index(MARQUE) + len(MARQUE)
        j = brut.rindex("}") + 1
        d = json.loads(brut[i:j])
        cartes = d.get("cartes") or []
        if all(c.get("id") is not None for c in cartes) and "id_suivant" in d:
            continue
        for k, c in enumerate(cartes):
            if c.get("id") is None:
                c["id"] = str(k)
        nums = [_num(c["id"]) for c in cartes]
        d["id_suivant"] = max([len(cartes)] + [n + 1 for n in nums if n is not None])
        open(chemin, "w", encoding="utf-8").write(brut[:i] + json.dumps(d, ensure_ascii=False, indent=1) + brut[j:])
        faits.append((os.path.basename(chemin), len(cartes)))
    return faits


if __name__ == "__main__":
    dossier = sys.argv[1] if len(sys.argv) > 1 else "entrainement"
    f = initialiser(dossier)
    print(f"{len(f)} fichiers : identifiants posés sur {sum(n for _, n in f)} cartes.")
