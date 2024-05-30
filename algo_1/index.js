// script.js

// On sélectionne les éléments HTML (à savoir le bouton et le conteneur de données)
const fetchDataBtn = document.getElementById('fetchDataBtn');
const dataContainer = document.getElementById('dataContainer');

// Fonction pour afficher les données

function displayData(data) {
    dataContainer.innerHTML = ''; // Vider le conteneur de données


// Boucler sur les éléments de données, jusqu'à un maximum de 5
    for (let i = 0; i < data.length && i < 10; i++) {
        const dataItem = document.createElement('div');
        dataItem.textContent = `ID: ${data[i].id} - Title: ${data[i].title}`;
        dataContainer.appendChild(dataItem); // Ajouter l'élément au conteneur
    }
}

// Fonction pour récupérer les données

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        dataContainer.textContent = 'Failed to fetch data';
    }
}

// Ajouter un écouteur d'événements au bouton, qui va déclencher le fetchdata lorsque le bouton est cliqué
fetchDataBtn.addEventListener('click', fetchData);
