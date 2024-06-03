é
 //Fonction qui demande à l'utilisateur deux nombres et affiche leur somme
function sommeDeuxNombres() {
    let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
    let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    let somme = nombre1 + nombre2;
    console.log("La somme de " + nombre1 + " et " + nombre2 + " est " + somme);
}
