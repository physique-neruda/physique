# -*- coding: utf-8 -*-
"""Le site mélange les propositions à chaque tirage : une explication qui dit « la réponse a »
n'a donc aucun sens en ligne. On remplace chaque lettre par le texte de la proposition."""
import re
L = 'abcd'
R1 = re.compile(r"([Rr]éponses?|[Pp]ropositions?)\s+([abcd](?:\s*(?:,|et|ou)\s*[abcd])*)\b")
R2 = re.compile(r"\b([Ll]a)\s([abcd])(?=\s)")
def lettres_en_texte(expl, choix):
    ok = lambda x: L.index(x) < len(choix)
    def f1(m):
        ls = re.findall(r'[abcd]', m.group(2))
        if not all(ok(x) for x in ls): return m.group(0)
        return m.group(1) + ' ' + re.sub(r'[abcd]', lambda y: '« ' + choix[L.index(y.group(0))] + ' »', m.group(2))
    expl = R1.sub(f1, expl or '')
    return R2.sub(lambda m: m.group(1) + ' réponse « ' + choix[L.index(m.group(2))] + ' »' if ok(m.group(2)) else m.group(0), expl)
def nettoyer(data):
    for q in data.get('bilan', []) + data.get('prerequis', []):
        q['expl'] = lettres_en_texte(q.get('expl', ''), q['choix'])
    return data
