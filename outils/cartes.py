# -*- coding: utf-8 -*-
"""
cartes.py — fabrique les cartes de révision d'un chapitre.

Remplace le `lire_cartes` d'origine, qui ne tirait que des textes à trous et
n'en sortait souvent que six, parfois mal posés (une phrase coupée en deux
cartes presque identiques, un fragment qui ne veut rien dire hors contexte).

Quatre sources, dans cet ordre de priorité :

  1. les DÉFINITIONS du cours       \\begin{definition}[Titre] … \\end{definition}
  2. les encadrés À RETENIR         \\begin{aretenir}[Titre] … \\end{aretenir}
  3. les TEXTES À TROUS du cours    \\trou{…}, une carte par phrase au plus
  4. les QUESTIONS DU BILAN         question / bonne réponse / explication

Les trois premières viennent du cours, la quatrième garantit qu'aucun
chapitre ne se retrouve avec une poignée de cartes : un bilan compte douze
questions, toutes bien posées par construction.

Règles de bonne tenue d'une carte, appliquées ici :
  * le recto doit se comprendre SEUL, sans la page d'où il sort ;
  * une phrase du cours ne donne jamais deux cartes ;
  * pas de recto ouvert sur « Ni », « Et », « Or », « Donc »… ;
  * pas de trou en tête de phrase : il faut du contexte avant le blanc ;
  * pas de LaTeX résiduel, ni de renvoi (« voir figure 3 », « ci-dessus »).
"""
import re
import sys
import os

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from construire_tsma import tex2txt   # noqa: E402

CIBLE = 14          # nombre de cartes visé par chapitre
PLANCHER = 12       # en dessous, on complète coûte que coûte avec le bilan

# un recto qui commence par l'un de ces mots ne se comprend pas seul
AMORCES = ("ni ", "et ", "or ", "donc ", "mais ", "c'est-à-dire", "puis ",
           "ainsi ", "en effet", "au contraire", "de même", "elle ", "il ",
           "ils ", "elles ", "celui", "celle", "ce dernier", "cela ", "ça ",
           "ce qui", "ce qu'", "ce que", "les deux", "l'un ", "l'autre ",
           "à quoi", "pourquoi pas", "d'où ", "en pratique", "attention")
# un recto qui renvoie à la page d'où il sort ne se comprend pas seul non plus
RENVOIS = ("ci-dessus", "ci-dessous", "ci-contre", "figure", "tableau",
           "schéma ci", "précédent", "page ")


def _propre(t):
    """Nettoyage final commun à tous les rectos et versos."""
    t = re.sub(r"\s+", " ", t).strip()
    t = t.replace(" :", " :").replace("«  ", "« ").replace("  »", " »")
    return t


def _utilisable(recto):
    b = recto.lower()
    if "\\" in recto or "{" in recto or "}" in recto:
        return False
    if b.startswith(AMORCES):
        return False
    if any(r in b for r in RENVOIS):
        return False
    return True


def _env(src, nom):
    """Tous les \\begin{nom}[titre] … \\end{nom} d'une source."""
    out = []
    for m in re.finditer(r"\\begin\{" + nom + r"\}(\[[^\]]*\])?", src):
        titre = (m.group(1) or "")[1:-1]
        fin = src.find("\\end{" + nom + "}", m.end())
        if fin < 0:
            continue
        out.append((titre, src[m.end():fin]))
    return out


def _texte_encadre(corps):
    """Corps d'un encadré, ramené à un texte lisible et pas trop long."""
    corps = re.sub(r"\\begin\{[a-zA-Z*]+\}(\[[^\]]*\])?", " ", corps)
    corps = re.sub(r"\\end\{[a-zA-Z*]+\}", " ", corps)
    corps = re.sub(r"\\item\s*", " · ", corps)
    corps = re.sub(r"\\trou\{([^{}]*)\}", r"\1", corps)
    corps = re.sub(r"\\troubloc(\[[^\]]*\])?\{[^{}]*\}", " ", corps)
    corps = re.sub(r"\\formulecle\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}", r"\1", corps)
    t = _propre(tex2txt(corps, html=True))
    t = t.lstrip("· ").strip()
    return t


# ------------------------------------------------------- 1. les définitions
def _definitions(cours):
    out = []
    for titre, corps in _env(cours, "definition"):
        if not titre:
            continue
        t = _texte_encadre(corps)
        if not (25 <= len(t) <= 420):
            continue
        titre = _propre(tex2txt(titre))
        out.append({"type": "definition",
                    "recto": "Qu'appelle-t-on « " + titre + " » ?",
                    "verso": t, "origine": "definition du cours"})
    return out


# ---------------------------------------------------- 2. les « à retenir »
def _aretenir(cours):
    out = []
    for titre, corps in _env(cours, "aretenir"):
        titre = _propre(tex2txt(titre))
        # un titre allusif (« Ce qui n'intervient pas ») ne fait pas un recto
        if len(titre) < 12 or not _utilisable(titre):
            continue
        t = _texte_encadre(corps)
        if not (25 <= len(t) <= 420):
            continue
        out.append({"type": "retenir",
                    "recto": titre + " — qu'y a-t-il à retenir ?",
                    "verso": t, "origine": "encadre du cours"})
    return out


# ------------------------------------------------------ 3. textes à trous
def _spans_trou(src):
    out = []
    for m in re.finditer(r"\\trou\{", src):
        d = m.end()
        prof, i = 1, d
        while i < len(src) and prof:
            if src[i] == "{":
                prof += 1
            elif src[i] == "}":
                prof -= 1
            i += 1
        out.append((m.start(), i, src[d:i - 1]))
    return out


def _paragraphe(src, pos):
    d = src.rfind("\n\n", 0, pos)
    d = 0 if d < 0 else d + 2
    f = src.find("\n\n", pos)
    f = len(src) if f < 0 else f
    return src[d:f], d


def _trous(cours):
    """Une carte à trou par PHRASE au plus : quand une phrase porte
    plusieurs \\trou{}, on garde le plus long, qui est le plus porteur."""
    par_phrase = {}
    for (a, b, contenu) in _spans_trou(cours):
        if not (5 <= len(contenu) <= 90):
            continue
        para, d = _paragraphe(cours, a)
        txt = para[:a - d] + "\u27ea\u27eb" + para[b - d:]
        txt = re.sub(r"\\(?:begin|end)\{[a-zA-Z*]+\}(\[[^\]]*\])?", " ", txt)
        txt = re.sub(r"\\trou\{([^{}]*)\}", r"\1", txt)
        txt = re.sub(r"\\troubloc(\[[^\]]*\])?\{[^{}]*\}", " ", txt)
        txt = re.sub(r"\\item\s*", " ", txt)
        txt = tex2txt(txt, html=True)
        if "\u27ea\u27eb" not in txt:
            continue
        phrases = re.split(r"(?<=[.!?])\s+", txt)
        phrase = next((p for p in phrases if "\u27ea\u27eb" in p), None)
        if not phrase:
            continue
        phrase = _propre(phrase)
        if not (50 <= len(phrase) <= 260):
            continue
        if phrase.count("\u27ea\u27eb") > 1:
            continue
        # il faut du contexte AVANT le blanc, sinon la question ne se pose pas
        if phrase.index("\u27ea\u27eb") < 18:
            continue
        recto = phrase.replace("\u27ea\u27eb", "……")
        if not _utilisable(recto):
            continue
        cle = re.sub(r"[^a-z0-9]", "",
                     phrase.replace("\u27ea\u27eb", contenu).lower())[:70]
        garde = par_phrase.get(cle)
        if garde is None or len(contenu) > len(garde[0]):
            par_phrase[cle] = (contenu, recto)
    out = []
    for contenu, recto in par_phrase.values():
        out.append({"type": "trou", "recto": recto,
                    "verso": "<strong>" + _propre(tex2txt(contenu)) + "</strong>",
                    "origine": "cours a completer"})
    out.sort(key=lambda c: len(c["recto"]))
    return out


# ------------------------------------------------------ 4. bilan en cartes
def _du_bilan(bilan):
    out = []
    for q in bilan or []:
        if not q.get("choix"):
            continue
        brut = _propre(q["q"])
        recto = brut.rstrip(" :")
        if len(recto) > 190 or not _utilisable(recto):
            continue
        # un énoncé de QCM n'est pas toujours une question : « Un fluide
        # incompressible est un fluide dont : » se complète, il ne se
        # questionne pas. On ne colle un « ? » que si la phrase en appelle un.
        if brut.endswith("?"):
            pass
        elif re.search(r"\b(quel|quelle|comment|pourquoi|combien|lequel|"
                       r"laquelle|est-ce|qu'est)\b", recto, re.I):
            recto += " ?"
        else:
            recto += " ……"
        bonne = q["choix"][q["bonne"]] if q["bonne"] < len(q["choix"]) else q["choix"][0]
        verso = "<strong>" + _propre(bonne) + "</strong>"
        if q.get("expl"):
            verso += " — " + _propre(q["expl"])
        out.append({"type": "question", "recto": recto, "verso": verso,
                    "origine": "bilan"})
    return out


# ---------------------------------------------------------------- montage
def _cle(c):
    return re.sub(r"[^a-z0-9]", "", c["recto"].lower())[:55]


def fabriquer(cours, bilan=None, cible=CIBLE):
    """Cartes d'un chapitre, dans l'ordre où on veut les rencontrer."""
    lots = [(_definitions(cours) if cours else [], 4),
            (_aretenir(cours) if cours else [], 3),
            (_trous(cours) if cours else [], 5),
            (_du_bilan(bilan), cible)]
    cartes, vus = [], set()
    for lot, maxi in lots:
        pris = 0
        for c in lot:
            if len(cartes) >= cible or pris >= maxi:
                break
            k = _cle(c)
            if k in vus:
                continue
            vus.add(k)
            cartes.append(c)
            pris += 1
    # jamais moins que le plancher : on rouvre le bilan sans quota
    if len(cartes) < PLANCHER:
        for c in _du_bilan(bilan):
            if len(cartes) >= PLANCHER:
                break
            k = _cle(c)
            if k not in vus:
                vus.add(k)
                cartes.append(c)
    return cartes
