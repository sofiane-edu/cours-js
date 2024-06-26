// Fonction qui regroupe des chaînes de caractères par leur première lettre
function regrouperParPremiereLettre(tableau) {
    return tableau.reduce((acc, chaine) => {
        let premiereLettre = chaine[0].toUpperCase();
        if (!acc[premiereLettre]) {
            acc[premiereLettre] = [];
        }
        acc[premiereLettre].push(chaine);
        return acc;
    }, {});
}

// Exemple d'utilisation
let fruits = ["Banane", "Abricot", "Pomme", "Avocat", "Poire", "Ananas", "Coing"];

let fruitsGroupes = regrouperParPremiereLettre(fruits);
console.log(fruitsGroupes);





// Fonction qui trie un tableau de chaînes de caractères par ordre alphabétique
function trierAlphabetiquement(tableau) {
    return tableau.sort((a, b) => a.localeCompare(b));
}

// Exemple d'utilisation
let fruits = ["Banane", "Abricot", "Pomme", "Avocat", "Poire", "Ananas", "Coing"];

let fruitsTries = trierAlphabetiquement(fruits);
console.log(fruitsTries); // Affiche ["Abricot", "Ananas", "Avocat", "Banane", "Poire", "Pomme"]
