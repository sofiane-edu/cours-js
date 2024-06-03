// Fonction qui compte le nombre de mots dans une chaîne de caractères
function compterMots(chaine) {
    // Diviser la chaîne par les espaces et filtrer les éléments vides
    let mots = chaine.split(' ').filter(function(mot) {
        return mot.length > 0;
    });
    return mots.length;
}

// Exemple d'utilisation
let phrase = "Bonjour, comment allez-vous ?";
let nombreDeMots = compterMots(phrase);
console.log(nombreDeMots);