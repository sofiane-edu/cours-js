// Fonction qui trouve la première occurrence d'un élément dans un tableau
function trouverPremiereOccurrence(tableau, propriete, valeur) {
    return tableau.find(obj => obj[propriete] === valeur);
}

// Exemple d'utilisation
let utilisateurs = [
    { id: 1, nom: "Pierre" },
    { id: 2, nom: "Paul" },
    { id: 3, nom: "Jacques" },
    { id: 4, nom: "Paul" }

];

let utilisateurTrouve = trouverPremiereOccurrence(utilisateurs, 'nom', 'Paul');
console.log(utilisateurTrouve);

