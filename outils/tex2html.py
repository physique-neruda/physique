# -*- coding: utf-8 -*-
"""
Conversion LaTeX -> HTML pour la collection Neruda.

Ne traite QUE le sous-ensemble de LaTeX effectivement employe dans les
sources des QCM et des encadres de cours : siunitx (\\qty, \\num), mhchem
(\\ce), les mises en forme (\\textbf, \\emph, \\textit), et les maths en
ligne courantes (\\dfrac, \\lambda, exposants, indices).

Aucune dependance externe : les formules sortent en HTML + caracteres
Unicode, ce qui evite d'embarquer KaTeX ou d'appeler un CDN.
"""
import re

# --------------------------------------------------------------------------
# Symboles
# --------------------------------------------------------------------------
GREC = {
    'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ', 'Delta': 'Δ',
    'epsilon': 'ε', 'theta': 'θ', 'lambda': 'λ', 'mu': 'µ', 'nu': 'ν',
    'pi': 'π', 'rho': 'ρ', 'sigma': 'σ', 'tau': 'τ', 'phi': 'φ',
    'omega': 'ω', 'Omega': 'Ω', 'varepsilon': 'ε', 'varphi': 'φ',
    'eta': 'η', 'zeta': 'ζ', 'kappa': 'κ', 'xi': 'ξ', 'chi': 'χ',
    'psi': 'ψ', 'Psi': 'Ψ', 'Gamma': 'Γ', 'Lambda': 'Λ', 'Sigma': 'Σ',
    'Theta': 'Θ', 'Phi': 'Φ', 'sum': 'Σ', 'partial': '∂',
    'ell': 'ℓ', 'infty': '∞', 'nabla': '∇', 'langle': '⟨', 'rangle': '⟩',
}

OPER = {
    r'\times': '×', r'\cdot': '·', r'\div': '÷', r'\pm': '±',
    r'\leq': '⩽', r'\geq': '⩾', r'\neq': '≠', r'\approx': '≈',
    r'\simeq': '≈', r'\ll': '≪', r'\gg': '≫', r'\to': '→',
    r'\rightarrow': '→', r'\Rightarrow': '⇒', r'\infty': '∞',
    r'\circ': '°', r'\degree': '°', r'\percent': '%',
    r'\propto': '∝', r'\Longrightarrow': '⟹', r'\Longleftrightarrow': '⟺',
    r'\Leftrightarrow': '⇔', r'\leftarrow': '←', r'\Leftarrow': '⇐',
    r'\equiv': '≡',
}

OPER_NOMS = [k.lstrip('\\') for k in OPER]

SUP = str.maketrans('0123456789+-=()n', '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ')
SUB = str.maketrans('0123456789+-=()', '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎')

# Unites siunitx. On garde les noms separes des prefixes : c'est ce qui
# permet de composer \kilo\metre\per\hour sans lister toutes les paires.
PREFIXES = {
    'quetta': 'Q', 'ronna': 'R', 'yotta': 'Y', 'zetta': 'Z', 'exa': 'E',
    'peta': 'P', 'tera': 'T', 'giga': 'G', 'mega': 'M', 'kilo': 'k',
    'hecto': 'h', 'deca': 'da', 'deci': 'd', 'centi': 'c', 'milli': 'm',
    'micro': '\u00b5', 'nano': 'n', 'pico': 'p', 'femto': 'f', 'atto': 'a',
}

UNITES_BASE = {
    'metre': 'm', 'meter': 'm', 'second': 's', 'gram': 'g', 'kilogram': 'kg',
    'kg': 'kg', 'mole': 'mol', 'kelvin': 'K', 'K': 'K', 'ampere': 'A',
    'candela': 'cd', 'hertz': 'Hz', 'newton': 'N', 'pascal': 'Pa',
    'joule': 'J', 'watt': 'W', 'coulomb': 'C', 'volt': 'V', 'farad': 'F',
    'ohm': '\u03a9', 'siemens': 'S', 'weber': 'Wb', 'tesla': 'T',
    'henry': 'H', 'lumen': 'lm', 'lux': 'lx', 'becquerel': 'Bq',
    'gray': 'Gy', 'sievert': 'Sv', 'radian': 'rad', 'steradian': 'sr',
    'litre': 'L', 'liter': 'L', 'hour': 'h', 'minute': 'min', 'day': 'j',
    'year': 'an', 'bar': 'bar', 'electronvolt': 'eV', 'percent': '%',
    'celsius': '\u00b0C', 'degreeCelsius': '\u00b0C', 'degree': '\u00b0',
    'tonne': 't', 'astronomicalunit': 'ua', 'angstrom': '\u00c5',
}

# Un seul motif, les noms les plus longs d'abord : sans cela \per serait
# reconnu a l'interieur de \percent, et \kilo a l'interieur de \kilogram.
_MOTS = sorted(list(PREFIXES) + list(UNITES_BASE) +
               ['per', 'squared', 'cubed', 'tothe', 'raiseto'],
               key=len, reverse=True)
_RX_UNITE = re.compile(r'\\(' + '|'.join(_MOTS) + r')(?![a-zA-Z])')


def _unite(u):
    """Traduit le champ unite de \\qty, \\unit ou \\si."""
    u = (u or '').strip()
    if not u:
        return ''

    def _un(m):
        nom = m.group(1)
        if nom == 'per':
            return '/'
        if nom == 'squared':
            return '\u00b2'
        if nom == 'cubed':
            return '\u00b3'
        if nom in PREFIXES:
            return PREFIXES[nom]
        return UNITES_BASE[nom]

    u = re.sub(r'\\cdot(?![a-zA-Z])\s*', '\u00b7', u)
    u = _RX_UNITE.sub(_un, u)
    u = re.sub(r'\^\{?(-?\d+)\}?', lambda m: _exposant(m.group(1)), u)
    # \squared\metre s'ecrit m², pas ²m
    u = re.sub(r'([\u00b2\u00b3])([a-zA-Z\u00b5\u03a9\u00b0%]+)', r'\2\1', u)
    u = u.replace('\\', '').replace('{', '').replace('}', '')
    return re.sub(r'\s+', '', u)


def _exposant(txt):
    """10^{-3} -> 10⁻³ ; retombe sur <sup> si un caractere manque."""
    txt = txt.strip().strip('\u202f')
    if all(c in '0123456789+-=()n' for c in txt):
        return txt.translate(SUP)
    return '<sup>%s</sup>' % txt


def _indice(txt):
    txt = txt.strip().strip('\u202f')
    if all(c in '0123456789+-=()' for c in txt):
        return txt.translate(SUB)
    return '<sub>%s</sub>' % txt


def _groupe(n):
    """12000 -> 12 000 (siunitx groupe a partir de 5 chiffres, usage francais)."""
    m = re.match(r'^(-?)(\d+)(,\d+)?$', n)
    if not m:
        return n
    signe, ent, dec = m.group(1), m.group(2), m.group(3) or ''
    if len(ent) >= 5:
        ent = '\u202f'.join(re.findall(r'\d{1,3}', ent[::-1]))[::-1]
    return signe + ent + dec


def _nombre(n):
    """3.0e8 -> 3,0×10⁸ ; 0.50 -> 0,50 (virgule decimale francaise)."""
    n = n.strip()
    m = re.match(r'^(-?[\d.]+)[eE]([+-]?\d+)$', n)
    if m:
        mant, exp = m.group(1), int(m.group(2))
        mant = mant.replace('.', ',')
        if mant in ('1', '1,0'):
            return '10' + _exposant(str(exp))
        return '%s×10%s' % (mant, _exposant(str(exp)))
    return _groupe(n.replace('.', ','))


def _arg(s, i):
    """Lit un argument {...} a partir de la position i (accolades imbriquees)."""
    if i >= len(s) or s[i] != '{':
        return s[i:i + 1], i + 1
    prof, j = 0, i
    while j < len(s):
        if s[j] == '{':
            prof += 1
        elif s[j] == '}':
            prof -= 1
            if prof == 0:
                return s[i + 1:j], j + 1
        j += 1
    return s[i + 1:], len(s)


def _compose(t):
    """Un membre de fraction est-il compose ?

    On juge sur le texte deja converti : une espace (fine comprise) ou un
    operateur signifie plusieurs facteurs, et il faut alors des parentheses.
    Un symbole seul comme Delta-t n'en demande pas.
    """
    return bool(re.search(r'[ \u202f+\u00d7\u00f7-]', t.strip()))


def _fractions(s):
    """\\dfrac{a}{b} -> a/b, en respectant les accolades imbriquees."""
    out, i = [], 0
    while i < len(s):
        m = re.compile(r'\\[dt]?frac\s*').match(s, i)
        if m:
            num, j = _arg(s, m.end())
            den, k = _arg(s, j)
            num, den = _fractions(num).strip(), _fractions(den).strip()
            if _compose(num):
                num = '(%s)' % num
            if _compose(den):
                den = '(%s)' % den
            out.append('%s/%s' % (num, den))
            i = k
        else:
            out.append(s[i])
            i += 1
    return ''.join(out)


def _qty(m):
    val, unite = _nombre(m.group(1)), _unite(m.group(2))
    return ('%s\u202f%s' % (val, unite)) if unite else val


def _ce(f):
    """mhchem simplifie : CO2 -> CO₂, ^{-} en exposant, -> pour la fleche."""
    f = f.replace('->', ' → ').replace('<=>', ' ⇌ ')
    out, i, en_indice = [], 0, False
    while i < len(f):
        c = f[i]
        if c == '_' or c == '^':
            j = i + 1
            if j < len(f) and f[j] == '{':
                k = f.index('}', j)
                frag, i = f[j + 1:k], k + 1
            else:
                frag, i = f[j], j + 1
            out.append(_indice(frag) if c == '_' else _exposant(frag))
        elif c.isdigit() and i > 0 and (f[i - 1].isalpha() or f[i - 1] == ')'
                                        or (en_indice and f[i - 1].isdigit())):
            out.append(_indice(c))
            en_indice = True
            i += 1
            continue
        elif c == '+' and i + 1 < len(f) and f[i + 1] in ' ':
            out.append(' + ')
            i += 1
        else:
            out.append(c)
            i += 1
        en_indice = False
    return ''.join(out).replace('  ', ' ')


FONCTIONS = ['arccos', 'arcsin', 'arctan', 'cos', 'sin', 'tan', 'cosh',
             'sinh', 'tanh', 'log', 'ln', 'exp', 'max', 'min', 'lim',
             'sup', 'inf', 'det', 'deg', 'gcd']
_RX_FONC = re.compile(r'\\(' + '|'.join(sorted(FONCTIONS, key=len, reverse=True))
                      + r')(?![a-zA-Z])')


def _maths(s):
    """Contenu entre $ ... $ ou \\[ ... \\].

    L'ordre compte. Les symboles (lettres grecques, operateurs) sont rendus
    AVANT les fractions : sinon \\rho\\dfrac{L}{S} produit « \\rhoL/S », ou la
    commande n'est plus reconnaissable et disparait en silence.
    """
    # 1. fonctions : cos, sin, max… restent en toutes lettres
    s = _RX_FONC.sub(lambda m: m.group(1) + '\u202f', s)
    # 2. symboles et espacements. AVANT le depliage de \vec et \text :
    #    une fois \vec{d} devenu « d-fleche », le \cdot qui le precede se
    #    retrouve colle a une lettre et n'est plus reconnu.
    for tex, out in OPER.items():
        s = re.sub(re.escape(tex) + r'(?![a-zA-Z])\s*', ' %s ' % out, s)
    for nom, car in GREC.items():
        s = re.sub(r'\\' + nom + r'(?![a-zA-Z])\s*', car, s)
    s = s.replace('{,}', ',').replace('\\,', '\u202f').replace('\\;', ' ')
    s = re.sub(r'\\q?quad(?![a-zA-Z])\s*', ' ', s)
    s = s.replace('\\!', '').replace('\\ ', ' ')
    # 3. mise en forme et commandes a contenu
    s = re.sub(r'\\textbf\{([^{}]*)\}', r'<strong>\1</strong>', s)
    s = re.sub(r'\\(emph|textit)\{([^{}]*)\}', r'<em>\2</em>', s)
    s = _cmd_arg(s, r'\\(?:text|textrm|mathrm|mathbf|mathit|boxed|operatorname)',
                 lambda a: a)
    s = _cmd_arg(s, r'\\(?:vec|overrightarrow)', lambda a: a + '\u20d7')
    # 4. racines puis fractions, sur un texte deja compose
    s = _cmd_arg(s, r'\\sqrt', lambda a: '\u221a(%s)' % _maths(a).strip()
                 if _compose(_maths(a)) else '\u221a' + _maths(a).strip())
    s = re.sub(r'\\sqrt\s*(\w)', lambda m: '√' + m.group(1), s)
    s = _fractions(s)
    # 5. exposants et indices
    s = re.sub(r'\^\{([^{}]*)\}', lambda m: _exposant(m.group(1)), s)
    s = re.sub(r'\^(\w)', lambda m: _exposant(m.group(1)), s)
    s = re.sub(r'_\{([^{}]*)\}', lambda m: _indice(m.group(1)), s)
    s = re.sub(r'_(\w)', lambda m: _indice(m.group(1)), s)
    s = re.sub(r'\s*([\u00d7\u00f7\u00b1=\u2192\u21d2\u2a7d\u2a7e\u2248\u2260])\s*',
               r' \1 ', s)
    s = re.sub(r'[{}]', '', s)
    return re.sub(r' {2,}', ' ', s).strip()


def tableau(s):
    """Convertit un tabular LaTeX en tableau HTML.

    Sans cela le contenu des cellules se deverse en vrac dans l'enonce.
    Le format des colonnes est lu avec _arg : il contient des accolades
    imbriquees ({|>{\\columncolor{clair}}c|c|}) qu'une expression reguliere
    simple ne sait pas suivre.
    """
    out, i = [], 0
    while True:
        j = s.find('\\begin{tabular}', i)
        if j < 0:
            out.append(s[i:])
            break
        out.append(s[i:j])
        _, k = _arg(s, j + len('\\begin{tabular}'))     # format des colonnes
        f = s.find('\\end{tabular}', k)
        if f < 0:
            out.append(s[j:])
            break
        corps = re.sub(r'\\hline|\\toprule|\\midrule|\\bottomrule', '', s[k:f])
        lignes = [l for l in re.split(r'\\\\', corps) if l.strip()]
        html = []
        for n, l in enumerate(lignes):
            balise = 'th' if n == 0 else 'td'
            html.append('<tr>' + ''.join('<%s>%s</%s>' % (balise, conv(c), balise)
                                         for c in l.split('&')) + '</tr>')
        out.append('<table>' + ''.join(html) + '</table>')
        i = f + len('\\end{tabular}')
    return ''.join(out)


# Compteur des commandes supprimees sans etre rendues, rempli par conv().
EFFACEES = {}


def _cmd_arg(s, motif, fonc):
    """Applique fonc a l'argument d'une commande, accolades imbriquees comprises."""
    out, i, rx = [], 0, re.compile(motif + r'(?![a-zA-Z])\s*')
    while i < len(s):
        m = rx.match(s, i)
        if m:
            arg, j = _arg(s, m.end())
            out.append(fonc(arg))
            i = j
        else:
            out.append(s[i])
            i += 1
    return ''.join(out)


def conv(s):
    """Convertit un fragment LaTeX en HTML."""
    if s is None:
        return ''
    # les tableaux d'abord : leurs cellules se convertissent une a une
    if '\\begin{tabular}' in s:
        s = tableau(s)
    # commandes a contenu, ensuite
    s = re.sub(r'\\qty\{([^{}]*)\}\{([^{}]*)\}', _qty, s)
    s = re.sub(r'\\num\{([^{}]*)\}', lambda m: _nombre(m.group(1)), s)
    s = _cmd_arg(s, r'\\unit', _unite)
    s = _cmd_arg(s, r'\\si', _unite)
    s = re.sub(r'\\ang\{([^{}]*)\}', lambda m: _nombre(m.group(1)) + '°', s)
    s = _cmd_arg(s, r'\\ce', _ce)
    s = re.sub(r'\\trou\{(.*?)\}\}', r'\1}', s)          # \trou{\textbf{..}}
    s = re.sub(r'\\trou\{([^{}]*)\}', r'\1', s)
    s = re.sub(r'\\texorpdfstring\{[^{}]*\}\{([^{}]*)\}', r'\1', s)
    # \text{( $f$ en Hz )} contient des $ : le deplier d'abord, sinon le
    # decoupage des maths se fait au mauvais endroit et la formule sort en
    # morceaux.
    s = _cmd_arg(s, r'\\text', lambda a: ' ' + a + ' ')
    # maths hors ligne \[ ... \] puis maths en ligne $ ... $
    def _bloc(m):
        brut = m.group(1)
        r = _maths(brut)
        if brut[:1].isspace():
            r = ' ' + r
        if brut[-1:].isspace():
            r = r + ' '
        return r
    s = re.sub(r'\\\[(.*?)\\\]',
               lambda m: '\n' + _maths(m.group(1)) + '\n', s, flags=re.S)
    s = re.sub(r'\$([^$]*)\$', _bloc, s)
    # mise en forme
    s = re.sub(r'\\textbf\{([^{}]*)\}', r'<strong>\1</strong>', s)
    s = re.sub(r'\\(emph|textit)\{([^{}]*)\}', r'<em>\2</em>', s)
    s = re.sub(r'\\textsc\{([^{}]*)\}', r'\1', s)
    s = re.sub(r'\\textcolor\{[^{}]*\}\{([^{}]*)\}', r'\1', s)
    s = re.sub(r'\\(text|textrm|mathrm|boxed)\*?\{([^{}]*)\}', r'\2', s)
    s = re.sub(r'\\(vec|overrightarrow)\{([^{}]*)\}',
               lambda m: m.group(2) + '\u20d7', s)
    s = re.sub(r'\\q?quad(?![a-zA-Z])', ' ', s)
    s = re.sub(r'\\oe(?![a-zA-Z])\{?\}?', 'œ', s)
    s = re.sub(r'\\ae(?![a-zA-Z])\{?\}?', 'æ', s)
    s = re.sub(r'\\textsuperscript\{([^{}]*)\}',
               lambda m: _exposant(m.group(1)), s)
    s = re.sub(r'\\textsubscript\{([^{}]*)\}',
               lambda m: _indice(m.group(1)), s)
    # symboles isoles
    s = re.sub(r'\\textbullet(?![a-zA-Z])(\{\})?', '•', s)
    s = re.sub(r'\\l?dots[a-z]?(?![a-zA-Z])', '…', s)
    s = re.sub(r'\\degree(?![a-zA-Z])', '°', s)
    s = s.replace(r'\%', '%').replace(r'\&', '&amp;').replace(r'\_', '_')
    s = s.replace(r'\,', '\u202f')
    for tex, out in OPER.items():
        s = re.sub(re.escape(tex) + r'(?![a-zA-Z])\s*', ' %s ' % out, s)
    for nom, car in GREC.items():
        s = re.sub(r'\\' + nom + r'(?![a-zA-Z])\s*', car, s)
    # sauts et espaces
    s = s.replace('\\\\', ' ').replace('~', '\u00a0')
    # environnements et longueurs residuels, avant le nettoyage des accolades
    s = re.sub(r'\\(begin|end)\{[a-zA-Z*]+\}', ' ', s)
    s = re.sub(r'\\(vspace|hspace|vskip|hskip|setlength)\*?\{[^{}]*\}', ' ', s)
    # Filet de securite : tout ce qui reste est supprime. On note quoi, car
    # une suppression silencieuse ne laisse aucune trace dans le resultat
    # (\cos efface rendait trois propositions d'un QCM identiques).
    for c in re.findall(r'\\([a-zA-Z]+)\*?(?:\[[^\]]*\])?', s):
        EFFACEES[c] = EFFACEES.get(c, 0) + 1
    s = re.sub(r'\\[a-zA-Z]+\*?(\[[^\]]*\])?', '', s)   # commandes restantes
    s = re.sub(r'[{}]', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()


def reste_du_latex(s):
    """Signale ce que la conversion n'a pas su traiter (controle qualite)."""
    return re.findall(r'\\[a-zA-Z]+|\\\[|\\\]|\$|\^\{|_\{|\{|\}', s)


# Commandes que conv() sait rendre. Toute commande absente de cette liste
# est signalee par commandes_inconnues() : c'est le seul moyen de reperer
# les effacements silencieux, ceux qui ne laissent aucune trace visible
# (\cos efface rendait trois propositions d'un QCM identiques).
CONNUES = set("""
qty num ce si unit trou troubloc formulecle texorpdfstring
textbf textit emph textsc textsuperscript textsubscript text textrm
frac dfrac tfrac sqrt ldots dots dotsc textbullet degree ang
item begin end hline toprule midrule bottomrule
vspace hspace vskip hskip setlength vfill par quad qquad
section subsection paragraph label ref
color columncolor footnotesize small normalsize large
raggedcolumns arabic alph square ensuremath
""".split()) | set(GREC) | set(OPER_NOMS) | set(FONCTIONS) \
  | set(PREFIXES) | set(UNITES_BASE) | {'per', 'squared', 'cubed'}


def commandes_inconnues(tex):
    """Commandes du corps du document que la conversion ignore en silence."""
    corps = tex[tex.index('\\begin{document}'):] if '\\begin{document}' in tex else tex
    vues = set(re.findall(r'\\([a-zA-Z]+)', corps))
    return sorted(vues - CONNUES)
