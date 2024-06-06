// Fonction qui affiche les nombres de 1 à 5
function afficherNombres() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// Exemple d'utilisation
afficherNombres();


// Fonction qui demande un mot de passe jusqu'à ce qu'il soit correct
function demanderMotDePasse() {
    let motDePasse;
    const motDePasseCorrect = "1234";
    do {
        motDePasse = prompt("Entrez le mot de passe :");
    } while (motDePasse !== motDePasseCorrect);
    console.log("Mot de passe correct !");
}


