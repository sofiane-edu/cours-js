// Fonction qui calcule la somme des valeurs d'un tableau de nombres
function calculerSomme(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

// Exemple d'utilisation
let nombres = [1, 2, 3, 4, 5];
let somme = calculerSomme(nombres);
console.log("La somme des nombres est : " + somme); 
