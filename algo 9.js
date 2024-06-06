// Fonction qui calcule le total des salaires et trouve les employés qui gagnent + d'un certain montant
function traiterSalaires(employes, seuil) {
    let totalSalaires = 0;
    let employesBienPayes = [];

    employes.forEach(function(employe) {
        totalSalaires += employe.salaire;
        if (employe.salaire > seuil) {
            employesBienPayes.push(employe.nom);
        }
    });

    console.log("Total des salaires : " + totalSalaires);
    console.log("Employés gagnant plus de " + seuil + " : " + employesBienPayes.join(', '));
}

// Exemple d'utilisation
let employes = [
    { nom: "Pierre", salaire: 3000 },
    { nom: "Paul", salaire: 2500 },
    { nom: "Jacques", salaire: 4000 },
    { nom: "Charles", salaire: 3500 }
];

let seuil = 3000;
traiterSalaires(employes, seuil);

