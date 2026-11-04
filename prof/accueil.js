/* accueil.js — page d'entrée de l'espace prof (v62) */
import { garde, fermerCode, deconnecterProf, eleves, etat } from "./socle.js";

const zone = document.getElementById("verrou");
document.getElementById("etat").textContent = "Accès réservé";
garde(zone).then(async () => {
  document.getElementById("outils").hidden = false;
  try {
    const d = await eleves();
    document.getElementById("etat").textContent = d.eleves.length + " élèves déchiffrés · " + d.source;
  } catch (e) { document.getElementById("etat").textContent = "Liste des élèves illisible"; }
});
document.getElementById("fermer-code").onclick = () => { fermerCode(); };
document.getElementById("sortir").onclick = () => { deconnecterProf(); };
