// Fonction qui crée un tableau d'objets à partir de deux tableaux
function creerTableauObjets(cles, valeurs) {
    let objets = [];
    for (let i = 0; i < cles.length; i++) {
        let objet = {};
        objet[cles[i]] = valeurs[i];
        objets.push(objet);
    }
    return objets;
}

// Exemple d'utilisation
let noms = ["Pierre", "Paul", "Jacques"];
let ages = [20, 30, 40];
let tableauObjets = creerTableauObjets(noms, ages);
console.log(tableauObjets);

