/* criteres.js — critères du registre de comportement (v62, novembre 2026), repris tels quels de
   l'application « Comportement 1STI2D » de septembre 2026. Ils ne contiennent aucune donnée d'élève.
   l : libellé ; s : sens (négatif / positif) ; p : points ; g : rubrique. Pour en ajouter ou changer
   un barème : modifier cette liste (les lignes déjà saisies gardent leurs points). */
export const EVTS = [
  {"l": "Parle à voix haute (chuchotage autorisé avec le binôme)", "s": "négatif", "p": -0.5, "g": "Calme"},
  {"l": "Bruits parasites (tapote, siffle, claque le matériel)", "s": "négatif", "p": -0.5, "g": "Calme"},
  {"l": "Range ses affaires avant la fin de l'heure", "s": "négatif", "p": -0.5, "g": "Calme"},
  {"l": "Continue à parler après un rappel", "s": "négatif", "p": -1, "g": "Calme"},
  {"l": "Parle pendant une consigne ou une correction", "s": "négatif", "p": -1, "g": "Calme"},
  {"l": "Se lève ou se déplace sans raison", "s": "négatif", "p": -1, "g": "Calme"},
  {"l": "Interpelle un camarade à distance", "s": "négatif", "p": -1, "g": "Calme"},
  {"l": "Oubli de la calculatrice", "s": "négatif", "p": -0.5, "g": "Travail et matériel"},
  {"l": "Ne sort pas ses affaires en début d'heure", "s": "négatif", "p": -0.5, "g": "Travail et matériel"},
  {"l": "Rédige sur la feuille d'énoncé au lieu d'une feuille à part", "s": "négatif", "p": -0.5, "g": "Travail et matériel"},
  {"l": "Ne prend pas la correction", "s": "négatif", "p": -1, "g": "Travail et matériel"},
  {"l": "Exercices ou devoir non faits", "s": "négatif", "p": -1, "g": "Travail et matériel"},
  {"l": "Refus de se mettre au travail", "s": "négatif", "p": -2, "g": "Travail et matériel"},
  {"l": "Punition non rendue dans le délai", "s": "négatif", "p": -2, "g": "Travail et matériel"},
  {"l": "Retard non justifié", "s": "négatif", "p": -1, "g": "Cadre"},
  {"l": "Téléphone sorti", "s": "négatif", "p": -2, "g": "Cadre"},
  {"l": "Langage inadapté en classe", "s": "négatif", "p": -2, "g": "Cadre"},
  {"l": "Insolence / manque de respect", "s": "négatif", "p": -3, "g": "Cadre"},
  {"l": "Propose une réponse au tableau, même incertaine", "s": "positif", "p": 0.5, "g": "Engagement"},
  {"l": "Pose une question sur le cours", "s": "positif", "p": 0.5, "g": "Engagement"},
  {"l": "Participe efficacement pendant la séance", "s": "positif", "p": 0.5, "g": "Engagement"},
  {"l": "Se porte volontaire (tableau, manipulation, distribution)", "s": "positif", "p": 1, "g": "Engagement"},
  {"l": "Rédige sur une feuille à part, proprement", "s": "positif", "p": 0.5, "g": "Travail et méthode"},
  {"l": "Binôme efficace pendant toute la séance", "s": "positif", "p": 0.5, "g": "Travail et méthode"},
  {"l": "Poste de travail rangé, matériel en ordre", "s": "positif", "p": 0.5, "g": "Travail et méthode"},
  {"l": "Se remet au travail aussitôt après un rappel", "s": "positif", "p": 0.5, "g": "Travail et méthode"},
  {"l": "Punition rendue avant l'échéance", "s": "positif", "p": 0.5, "g": "Travail et méthode"},
  {"l": "Rattrape le cours après une absence, sans qu'on le demande", "s": "positif", "p": 1, "g": "Travail et méthode"},
  {"l": "Aide un camarade, à voix basse", "s": "positif", "p": 1, "g": "Savoir-être"},
  {"l": "S'excuse de lui-même ou apaise une tension", "s": "positif", "p": 1, "g": "Savoir-être"},
  {"l": "Progrès net sur un comportement signalé", "s": "positif", "p": 2, "g": "Savoir-être"},
  {"l": "Attitude exemplaire sur la séance (à réserver)", "s": "positif", "p": 2, "g": "Savoir-être"}
];
export const PUNITIONS = ["Devoir supplémentaire", "Retenue", "Excuse écrite", "Inscription au carnet", "Exclusion ponctuelle du cours"];
