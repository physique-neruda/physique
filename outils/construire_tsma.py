# -*- coding: utf-8 -*-
"""
construire_tsma.py — fabrique les fichiers de données d'entraînement du BTS TSMA
à partir des sources LaTeX de la collection.

  bilan   : lu dans chXX_bilan.tex      (QCM déjà rédigé + corrigé commenté)
  cartes  : lues dans chXX_cours.tex    (les \\trou{} du cours à compléter)
  prereq  : lus dans prerequis_tsma.py  (rédigés à la main, les prérequis
                                         papier étant des questions ouvertes)

Produit  entrainement/qcm-btstsma-chXX.js  au format attendu par qcm.html
et cartes.html : window.CHAPITRE = { filiere, num, titre, niveau,
prerequis[], bilan[], cartes[] }.
"""
import re, json, os, glob, sys

# ---------------------------------------------------------------- unités
# clés SANS antislash : \milli\metre est normalisé en « millimetre »
UNITES = {
 'metre':'m','millimetre':'mm','centimetre':'cm','kilometre':'km','micrometre':'µm',
 'metrecubed':'m³','metresquared':'m²','gramme':'g','gram':'g','kilogram':'kg',
 'kilogramme':'kg','tonne':'t','newtonmetre':'N·m',
 'second':'s','seconde':'s','millisecond':'ms','minute':'min','hour':'h','heure':'h',
 'kelvin':'K','celsius':'°C','degreeCelsius':'°C','degree':'°',
 'newton':'N','pascal':'Pa','hectopascal':'hPa','kilopascal':'kPa','megapascal':'MPa',
 'bar':'bar','ubar':'bar','millibar':'mbar',
 'joule':'J','kilojoule':'kJ','megajoule':'MJ','watt':'W','kilowatt':'kW','megawatt':'MW',
 'volt':'V','millivolt':'mV','kilovolt':'kV','ampere':'A','milliampere':'mA',
 'ohm':'Ω','kiloohm':'kΩ','farad':'F','microfarad':'µF','henry':'H','hertz':'Hz',
 'kilohertz':'kHz','mole':'mol','litre':'L','millilitre':'mL','percent':'%',
 'decibel':'dB','decibelA':'dB(A)','tesla':'T','weber':'Wb','coulomb':'C','poise':'Pl','kilogram':'kg','dBA':'dB(A)','voltampere':'V·A','var':'var','cheval':'ch','tr':'tr','rpm':'tr/min',
}
PREFIXES = {'milli':'m','centi':'c','deci':'d','deca':'da','hecto':'h','kilo':'k',
            'mega':'M','giga':'G','micro':'µ','nano':'n'}
BASES = {'metre':'m','gram':'g','gramme':'g','second':'s','seconde':'s','minute':'min',
         'hour':'h','heure':'h','kelvin':'K','celsius':'°C','degreeCelsius':'°C',
         'degree':'°','newton':'N','pascal':'Pa','bar':'bar','ubar':'bar','joule':'J',
         'watt':'W','volt':'V','ampere':'A','ohm':'Ω','farad':'F','henry':'H',
         'hertz':'Hz','mole':'mol','litre':'L','percent':'%','decibel':'dB',
         'decibelA':'dB(A)','tesla':'T','weber':'Wb','coulomb':'C','tonne':'t',
         'poise':'Pl','kilogram':'kg','dBA':'dB(A)','voltampere':'V·A','var':'var','cheval':'ch','tr':'tr','rpm':'tr/min','radian':'rad','steradian':'sr','lumen':'lm','lux':'lx'}
INCONNUS = set()

def _atomes(part):
    """Traduit une suite d'atomes siunitx (\\kilo\\watt) en symboles (kW)."""
    out, pref = [], ''
    for a in re.findall(r'\\([a-zA-Z]+)', part):
        if a in PREFIXES:
            pref = PREFIXES[a]
        elif a == 'squared' or a == 'cubed':
            if out: out[-1] += ('²' if a == 'squared' else '³')
        elif a in BASES:
            out.append(pref + BASES[a]); pref = ''
        else:
            INCONNUS.add(a); out.append(pref + a); pref = ''
    return '·'.join(out)

def _unite(u):
    u = u.strip()
    if re.search(r'\\per(?![a-z])', u):
        parts = [_atomes(x) for x in re.split(r'\\per(?![a-z])', u)]
        return '/'.join(p if p else '1' for p in parts)
    return _atomes(u)

def _nombre(n):
    n = n.strip()
    m = re.match(r'^([-\d.,]+)e([-+]?\d+)$', n)
    if m:
        mant = m.group(1).replace('.', ',')
        exp  = str(int(m.group(2))).translate(str.maketrans('-0123456789','⁻⁰¹²³⁴⁵⁶⁷⁸⁹'))
        return f'{mant}×10{exp}'
    if ';' in n:                       # \numlist
        return ' ; '.join(_nombre(x) for x in n.split(';'))
    return n.replace('.', ',')

# ------------------------------------------------------- LaTeX -> texte
def tex2txt(s, html=False):
    s = re.sub(r'%.*', '', s)
    s = s.replace('{,}', ',')   # décimales à la française dans les formules
    s = re.sub(r'\\SI\{([^{}]*)\}\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}',
               lambda m: _nombre(m.group(1)) + '\u00a0' + _unite(m.group(2)), s)
    s = re.sub(r'\\num(?:list)?\{([^{}]*)\}', lambda m: _nombre(m.group(1)), s)
    s = re.sub(r'\\si\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}', lambda m: _unite(m.group(1)), s)
    sup0 = str.maketrans('-0123456789n','⁻⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ')
    s = re.sub(r'\^\{([-\dn]+)\}', lambda m: m.group(1).translate(sup0), s)
    for f in ('log','ln','cos','sin','tan','exp','max','min'):
        s = s.replace('\\' + f, f)
    s = re.sub(r'\\[,;!:]', ' ', s)
    s = s.replace('\\ ', ' ')
    def _frac(m):
        num, den = m.group(1).strip(), m.group(2).strip()
        if len(den) > 1 and re.search(r'[ +\-·×/]', den): den = '(' + den + ')'
        if len(num) > 1 and re.search(r'[ +\-]', num):    num = '(' + num + ')'
        return num + '/' + den
    for _ in range(3):
        s = re.sub(r'\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}', _frac, s)
    s = re.sub(r'\\sqrt\{([^{}]*)\}',
               lambda m: '√' + (m.group(1) if len(m.group(1)) == 1
                                else '(' + m.group(1) + ')'), s)
    s = re.sub(r'\\sqrt', '√', s)
    s = re.sub(r'\\text(?:rm|it)?\{([^{}]*)\}', r'\1', s)
    s = re.sub(r'\\mathrm\{([^{}]*)\}', r'\1', s)
    s = re.sub(r'\^\{?\\circ\}?', '°', s)
    s = re.sub(r'_\{?\\text\{([^{}]*)\}\}?', r'_\1', s)
    if html:
        s = re.sub(r'\\textbf\{([^{}]*)\}', r'<strong>\1</strong>', s)
        s = re.sub(r'\\emph\{([^{}]*)\}',   r'<em>\1</em>', s)
    else:
        s = re.sub(r'\\textbf\{([^{}]*)\}', r'\1', s)
        s = re.sub(r'\\emph\{([^{}]*)\}',   r'\1', s)
    # exposants et indices simples
    sup = str.maketrans('-0123456789n','⁻⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ')
    s = re.sub(r'\^\{([-\dn]+)\}', lambda m: m.group(1).translate(sup), s)
    s = re.sub(r'\^([-\dn])',      lambda m: m.group(1).translate(sup), s)
    sub = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
    s = re.sub(r'_\{(\d+)\}', lambda m: m.group(1).translate(sub), s)
    s = re.sub(r'_(\d)',      lambda m: m.group(1).translate(sub), s)
    grec = {'alpha':'α','beta':'β','gamma':'γ','Gamma':'Γ','delta':'δ','Delta':'Δ',
            'theta':'θ','Theta':'Θ','lambda':'λ','Lambda':'Λ','mu':'µ','pi':'π','Pi':'Π',
            'rho':'ρ','sigma':'σ','Sigma':'Σ','tau':'τ','varphi':'φ','phi':'φ','Phi':'Φ',
            'psi':'ψ','Psi':'Ψ','omega':'ω','Omega':'Ω','eta':'η','varepsilon':'ε',
            'epsilon':'ε','nu':'ν','xi':'ξ','zeta':'ζ','chi':'χ','kappa':'κ'}
    for k, v in grec.items():
        s = s.replace('\\' + k + ' ', v).replace('\\' + k, v)
    s = s.replace('\\times', '×').replace('\\cdot', '·').replace('\\pm', '±')
    s = s.replace('\\approx', '≈').replace('\\leq', '≤').replace('\\geq', '≥')
    s = s.replace('\\to', '→').replace('\\infty', '∞').replace('\\ldots', '…')
    s = s.replace('\\%', '%').replace('\\&', '&').replace('\\oe{}', 'œ').replace('\\oe', 'œ')
    s = re.sub(r'\\\\\s*\[[^\]]*\]', ' ', s)          # sauts de ligne \\[3pt]
    s = s.replace('\\\\', ' ')
    s = re.sub(r'\\[a-zA-Z]+\*?', '', s)          # commandes restantes
    s = s.replace('$', '').replace('~', '\u00a0')
    s = s.replace('{', '').replace('}', '')
    s = re.sub(r'[ \t\n]+', ' ', s)
    s = s.replace(' ,', ',').replace(' .', '.').replace('\u00a0 ', '\u00a0')
    return s.strip()

# ------------------------------------------------- lecture d'un bilan
def _arg(src, i):
    """Argument entre accolades commençant en i (sur l'accolade ouvrante).
    Renvoie (contenu, position juste après l'accolade fermante)."""
    prof, j = 1, i + 1
    while j < len(src) and prof:
        if src[j] == '{': prof += 1
        elif src[j] == '}': prof -= 1
        j += 1
    return src[i+1:j-1], j

def lire_bilan(src):
    """Questions du bilan, avec la bonne réponse et l'explication du corrigé."""
    corps = src.split('Corrigé commenté')
    enonce, corrige = corps[0], (corps[1] if len(corps) > 1 else '')

    # ---- énoncés et options, en lecture d'accolades équilibrées
    questions, i = [], 0
    while True:
        m = re.compile(r'\\q\{').search(enonce, i)
        if not m: break
        q, i = _arg(enonce, m.end() - 1)
        fin_q = enonce.find('\\q{', i)
        zone = enonce[i:fin_q if fin_q > 0 else len(enonce)]
        opts, j = [], 0
        while True:
            mo = re.compile(r'\\opt\{').search(zone, j)
            if not mo: break
            o, j = _arg(zone, mo.end() - 1)
            o = tex2txt(o)
            opts.append(re.sub(r'^[a-c]\.\s*', '', o).strip())
        questions.append({'q': tex2txt(q), 'choix': opts})

    # ---- corrigé : on découpe sur les marqueurs « \textbf{3 b} », qui
    # peuvent être groupés (« \textbf{6 c} et \textbf{7 a} — … »).
    marq = list(re.finditer(r'\\textbf\{(\d+)\s+([abc])\}', corrige))
    groupes = []
    for m in marq:
        if groupes and re.fullmatch(r'[\s,]*(et|puis)?[\s,]*',
                                    corrige[groupes[-1][-1].end():m.start()]):
            groupes[-1].append(m)
        else:
            groupes.append([m])
    rep, expl = {}, {}
    for k, g in enumerate(groupes):
        deb = g[-1].end()
        fin = groupes[k+1][0].start() if k + 1 < len(groupes) else len(corrige)
        texte = tex2txt(corrige[deb:fin]).strip()
        texte = re.sub(r'^[\s—–-]+', '', texte)
        texte = re.sub(r'\s*(tcolorbox|document)\s*$', '', texte).strip()
        for m in g:
            rep[int(m.group(1))] = 'abc'.index(m.group(2))
            expl[int(m.group(1))] = texte
    for n, q in enumerate(questions, 1):
        q['bonne'] = rep.get(n, 0)
        q['expl'] = expl.get(n, '')
        if n not in rep:
            print(f'    !! réponse introuvable, question {n}', file=sys.stderr)
    return questions

# ------------------------------------------------- lecture des cartes
def _spans_trou(src):
    """Positions et contenus de tous les \\trou{} d'une source."""
    out = []
    for m in re.finditer(r'\\trou\{', src):
        d = m.end(); prof, i = 1, d
        while i < len(src) and prof:
            if src[i] == '{': prof += 1
            elif src[i] == '}': prof -= 1
            i += 1
        out.append((m.start(), i, src[d:i-1]))
    return out

def _paragraphe(src, pos):
    """Le paragraphe (bloc entre lignes vides) qui contient la position pos."""
    d = src.rfind('\n\n', 0, pos); d = 0 if d < 0 else d + 2
    f = src.find('\n\n', pos);     f = len(src) if f < 0 else f
    return src[d:f], d

def lire_cartes(src, bilan=None, maxi=9, mini=6):
    """Cartes « texte à trou » tirées du cours à compléter ; complétées au
    besoin par des cartes question/réponse tirées du bilan."""
    cartes, vus = [], set()
    for (a, b, contenu) in _spans_trou(src):
        if not (6 <= len(contenu) <= 110): continue
        para, d = _paragraphe(src, a)
        # on neutralise les environnements et les autres trous du paragraphe
        txt = para[:a-d] + '\u27ea\u27eb' + para[b-d:]
        txt = re.sub(r'\\(?:begin|end)\{[a-zA-Z*]+\}(\[[^\]]*\])?', ' ', txt)
        txt = re.sub(r'\\trou\{([^{}]*)\}', r'\1', txt)
        txt = re.sub(r'\\troubloc(\[[^\]]*\])?\{[^{}]*\}', ' ', txt)
        txt = tex2txt(txt, html=True)
        if '\u27ea\u27eb' not in txt: continue
        # on isole la phrase porteuse (les nombres sont déjà à virgule : le
        # point ne peut plus être un séparateur décimal)
        phrases = re.split(r'(?<=[.!?])\s+', txt)
        phrase = next((p for p in phrases if '\u27ea\u27eb' in p), None)
        if not phrase or not (40 <= len(phrase) <= 320): continue
        recto = phrase.replace('\u27ea\u27eb', '……').strip()
        if '\\' in recto or '[' in recto or recto.count('……') > 1: continue
        cle = recto[:55]
        if cle in vus: continue
        vus.add(cle)
        cartes.append({'type': 'trou', 'recto': recto,
                       'verso': '<strong>' + tex2txt(contenu) + '</strong>',
                       'origine': 'cours a completer'})
    cartes.sort(key=lambda c: len(c['recto']))
    cartes = cartes[:maxi]
    if bilan and len(cartes) < mini:
        for q in bilan:
            if len(cartes) >= mini: break
            if len(q['q']) > 170: continue
            cartes.append({'type': 'question',
                           'recto': q['q'].rstrip(' :') + ' ?',
                           'verso': '<strong>' + q['choix'][q['bonne']] + '</strong>'
                                    + (' — ' + q['expl'] if q['expl'] else ''),
                           'origine': 'bilan'})
    return cartes

# ------------------------------------------------------------- assemblage
TITRES = {
 'ch00':'Outils de base','ch01':'Mesures, erreurs et incertitudes',
 'ch02':'Énergie, puissance, rendement','ch03':'Statique des fluides',
 'ch04':'Dynamique des fluides','ch05':'Viscosité et pertes de charge',
 'ch06':'La réaction chimique','ch07':'Combustions et carburants',
 'ch08':'Gaz parfaits et premier principe','ch09':'Transferts thermiques et calorimétrie',
 'ch10':'Machines thermiques','ch11':'Oxydoréduction, piles et corrosion',
 'ch12':'Analyse du signal','ch13':'Oscillations et résonance',
 'ch14':'Ondes acoustiques et protection','ch15':'Systèmes linéaires et asservissement',
 'ch16':'Capteurs, conditionnement et conversion','ch17':'Distribution électrique et sécurité'}

def construire(racine, sortie):
    from prerequis_tsma import PREREQUIS
    os.makedirs(sortie, exist_ok=True)
    resume = []
    for ch in sorted(TITRES):
        d = f'{racine}/{ch}/sources'
        bilan  = lire_bilan(open(f'{d}/{ch}_bilan.tex').read())
        cartes = lire_cartes(open(f'{d}/{ch}_cours.tex').read(), bilan=bilan)
        prereq = [{'q': q, 'choix': c, 'bonne': b, 'expl': e}
                  for (q, c, b, e) in PREREQUIS.get(ch, [])]
        data = {'filiere':'bts-tsma','num':str(int(ch[2:])),'titre':TITRES[ch],
                'niveau':'BTS TSMA','prerequis':prereq,'bilan':bilan,'cartes':cartes}
        entete = (f"/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.\n"
                  f"   BTS TSMA · chapitre {ch[2:]} · {TITRES[ch]}\n"
                  f"   Le bilan vient de {ch}_bilan.tex, les cartes des \\trou{{}} de\n"
                  f"   {ch}_cours.tex, les prérequis de outils/prerequis_tsma.py. */\n")
        js = entete + 'window.CHAPITRE = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n'
        open(f'{sortie}/qcm-bts-tsma-{ch}.js', 'w').write(js)
        resume.append((ch, len(prereq), len(bilan), len(cartes)))
    return resume

if __name__ == '__main__':
    r = construire(sys.argv[1], sys.argv[2])
    print(f"{'chapitre':10} {'prérequis':>10} {'bilan':>7} {'cartes':>8}")
    for ch, p, b, c in r:
        print(f'{ch:10} {p:>10} {b:>7} {c:>8}')
    print(f"{'TOTAL':10} {sum(x[1] for x in r):>10} {sum(x[2] for x in r):>7} "
          f"{sum(x[3] for x in r):>8}")
