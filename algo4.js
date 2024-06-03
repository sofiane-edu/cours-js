// Fonction qui filtre les nombres pairs d'un tableau
function filtrerNombresPairs(tableau) {
    return tableau.filter(function(nombre) {
        return nombre % 2 === 0;
    });
}

// Exemple d'utilisation
let nombres = [1, 2, 3, 4, 5, 6, ];
let nombresPairs = filtrerNombresPairs(nombres);
console.log(nombresPairs);