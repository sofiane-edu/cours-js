// Fonction qui demande un mot de passe jusqu'à ce qu'il soit correct
function demanderMotDePasse() {
    let motDePasse;
    const motDePasseCorrect = "1234";
    do {
        motDePasse = prompt("Entrez le mot de passe :");
    } while (motDePasse !== motDePasseCorrect);
    console.log("Mot de passe correct !");
}

demanderMotDePasse(); // à utiliser dans un navigateur par exemple