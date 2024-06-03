


// Fonction qui trie un tableau d'objets par une propriété donnée
function trierParPropriete(tableau, propriete) {
    return tableau.sort(function(a, b) {
        if (a[propriete] < b[propriete]) {
            return -1;
        } else if (a[propriete] > b[propriete]) {
            return 1;
        } else {
            return 0;
        }
    });
}

// Exemple d'utilisation
let personnes = [
    { nom: "Pierre", age: 25 },
    { nom: "Paul", age: 30 },
    { nom: "Jacques", age: 32 },
    { nom: "Albert", age: 121 },
    { nom: "Charles", age: 1 }
];

let personnesTriees = trierParPropriete(personnes, 'age');
console.log(personnesTriees);


// Fonction qui fusionne deux tableaux d'objets
function fusionnerTableaux(tableau1, tableau2, propriete) {
    let fusion = [...tableau1, ...tableau2];
    return fusion.filter((obj, index, self) =>
        index === self.findIndex((o) => o[propriete] === obj[propriete])
    );
}

// Exemple d'utilisation
let tableau1 = [
    { id: 1, nom: "Sofiane" },
    { id: 2, nom: "Tom" }
];

let tableau2 = [
    { id: 2, nom: "Tom" },
    { id: 3, nom: "Emma" }
];

let fusion = fusionnerTableaux(tableau1, tableau2, 'id');
console.log(fusion)


// Fonction qui trouve les éléments communs entre deux tableaux
function trouverElementsCommuns(tableau1, tableau2) {
    return tableau1.filter(element => tableau2.includes(element));
}

// Exemple d'utilisation
let tableauA = [1, 2, 3, 4, 5];
let tableauB = [3, 4, 5, 6, 7];

let elementsCommuns = trouverElementsCommuns(tableauA, tableauB);
console.log(elementsCommuns);




