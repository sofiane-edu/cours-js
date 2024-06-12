// Fonction qui crée un tableau contenant les longueurs des mots d'un tableau de chaînes de caractères
function longueurDesMots(tableau) {
    let longueurs = [];

    tableau.forEach(function(mot) {
        longueurs.push(mot.length);
    });

    console.log("Chaque mot possède respectivement : " + longueurs.join(', ') + " caractères" );
}

// Exemple d'utilisation
let mots = ["Le", "JavaScript", "c'est", "ez"];
longueurDesMots(mots);
