// Fonction qui filtre les chaînes de caractères par longueur minimale
function filtrerParLongueur(tableau, longueurMin) {
    let resultat = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].length >= longueurMin) {
            resultat.push(tableau[i]);
        }
    }
    return resultat;
}

// Exemple d'utilisation
let mots = ["bonjour", "tout", "le", "monde"];
let motsLongs = filtrerParLongueur(mots, (5));
console.log(motsLongs);
