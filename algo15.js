// Fonction qui vérifie si un tableau contient une valeur spécifique
function contientValeur(tableau, valeur) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === valeur) {
            return true;
        }
    }
    return false;
}

// Exemple d'utilisation
let nombres = [1, 2, 3, 4, 5];
let contientTrois = contientValeur(nombres, 3);
console.log(contientTrois); 

let contientSix = contientValeur(nombres, 6);
console.log(contientSix);
