// Fonction qui vérifie si tous les éléments d'un tableau sont des chaînes de caractères
function verifierChaines(tableau) {
    let sontTousDesChaines = true;

    tableau.forEach(function(element) {
        if (typeof element !== 'string') {
            sontTousDesChaines = false;
        }
    });

    console.log("Tous les éléments sont des chaînes de caractères : " + sontTousDesChaines);
}

// Exemple d'utilisation
let elements = ["Comment va", "le S", "aujourd'hui?"];
verifierChaines(elements);

let elements2 = ["un boeuf", 42, 105];
verifierChaines(elements2);
