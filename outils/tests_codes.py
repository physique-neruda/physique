# -*- coding: utf-8 -*-
"""
tests_codes.py — vecteurs d'essai des codes des corrigés (site v64.2). Clé FICTIVE (octets 0 à 31) : aucune
clé du site ici. Les mêmes valeurs sont vérifiées côté navigateur par entrainement/tests/corriges.test.mjs
(commun/corriges.js) ; prof/codes.js et comptes_firebase.py v6 font les mêmes calculs.

    python3 -I site-physique/outils/tests_codes.py
"""
import base64, datetime, hashlib, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import chiffrer as C
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

KPR = bytes(range(32))
ID, CLASSE, ELEVE, ANNEE = "bts-tsma.ch07.ex03", "tsma1", "alex.m", "2026-2027"
ATTENDU = {                    # vérifiés aussi par un calcul indépendant (Web Crypto, Node)
    "kc": "abc70feebfb78d387dc2a13172ebc0910e126207038e35c1a7fcbb925768db94",
    "cle": "56f87b48a28ebe506dae56db7cd753eff3d10047dd7afa97bff77d8efbc232e2",
    "nom": "5377f4dce82998d93db0",
    "code": "RV6ZWFYW42",
    "sel": "ea0f5702aaa81ab239646691ac710dc4",
    "nominatif": "VVH36V8B37",
    "sel_nominatif": "a05c589380efd799114bd564cf9c8aed",
    "env": {"iv": "cmzaEIDAZs1WQxIE", "cle": "jAs7q7CqiCiUH/xcUUbLvsGwanQd+umyT7dIwoBxI6EkOT49ootblbb30Q+bDpI2"},
    "env_nominatif": {"iv": "pujMtYCy5htNcnDy", "c": "rGm817oLLQrk4g85OhRmOCTX0fyinWtDSTwpP024C2BANKY3697byNB9hnUAptyf"},
}


def calculer():
    kc = C.cle_codes(KPR, ANNEE)
    k = C.cle_corrige(KPR, ID)
    return kc, k, {"kc": kc.hex(), "cle": k.hex(), "nom": C.nom_corrige(KPR, ID),
                   "code": C.code_classe(kc, CLASSE, ID), "sel": C.sel_classe(kc, CLASSE).hex(),
                   "nominatif": C.code_nominatif(kc, ELEVE, ID), "sel_nominatif": C.sel_nominatif(kc, ELEVE).hex(),
                   "env": C.enveloppe_corrige(kc, CLASSE, ID, k),
                   "env_nominatif": C.enveloppe_nominative(kc, ELEVE, ID, k)}


def ouvrir(code, sel, env, aad):
    kw = hashlib.pbkdf2_hmac("sha256", code.encode(), sel, C.TOURS_CODES, dklen=32)
    try:
        return AESGCM(kw).decrypt(base64.b64decode(env["iv"]), base64.b64decode(env.get("cle") or env.get("c")), aad.encode())
    except Exception:
        return None


def main():
    kc, k, obtenu = calculer()
    erreurs = [x for x in ATTENDU if ATTENDU[x] != obtenu[x]]
    sc, sn = C.sel_classe(kc, CLASSE), C.sel_nominatif(kc, ELEVE)
    aad_c, aad_n = "corrige|" + CLASSE + "|" + ID, "nominatif|" + ELEVE + "|" + ID
    # chaque enveloppe s'ouvre avec SON code, et pas avec l'autre
    if ouvrir(obtenu["code"], sc, obtenu["env"], aad_c) != k:
        erreurs.append("enveloppe de la classe (code de classe)")
    if ouvrir(obtenu["nominatif"], sc, obtenu["env"], aad_c) is not None:
        erreurs.append("enveloppe de la classe ouverte par le code nominatif")
    if ouvrir(obtenu["nominatif"], sn, obtenu["env_nominatif"], aad_n) != k:
        erreurs.append("enveloppe nominative (code nominatif)")
    if ouvrir(obtenu["code"], sn, obtenu["env_nominatif"], aad_n) is not None:
        erreurs.append("enveloppe nominative ouverte par le code de la classe")
    # le code nominatif d'un camarade, ou d'un autre corrigé, est différent
    if C.code_nominatif(kc, "sam.b", ID) == obtenu["nominatif"] or C.code_nominatif(kc, ELEVE, ID + "x") == obtenu["nominatif"]:
        erreurs.append("codes nominatifs non distincts")
    # deux contenus différents sous la même clé d'enveloppe : jamais le même IV
    if C.enveloppe_corrige(kc, CLASSE, ID, k + k)["iv"] == obtenu["env"]["iv"]:
        erreurs.append("IV indépendant du contenu")
    A = C.ALPHABET_CODES
    assert len(set(A)) == 32 and not set("IO01") & set(A)
    if C.annee_scolaire(datetime.date(2026, 7, 31)) != "2025-2026" or C.annee_scolaire(datetime.date(2026, 8, 1)) != "2026-2027":
        erreurs.append("année scolaire")
    print("codes des corrigés :", "OK" if not erreurs else "ÉCHEC " + ", ".join(erreurs))
    sys.exit(1 if erreurs else 0)


if __name__ == "__main__":
    main()
