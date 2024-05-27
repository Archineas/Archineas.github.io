// API-URL für zufällige Katzenbilder
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

// Funktion zum Abrufen eines neuen Katzenbildes
async function fetchNewCatImage() {
    try {
        const response = await fetch(CAT_API_URL);
        const data = await response.json();
        return data[0].url;
    } catch (error) {
        console.error('Fehler beim Abrufen des Katzenbildes:', error);
        return null;
    }
}

// Funktion zum Aktualisieren des Hintergrundbildes
async function updateBackground() {
    const imageUrl = await fetchNewCatImage();
    if (imageUrl) {
        document.body.style.backgroundImage = `url(${imageUrl})`;
    }
}

// Intervall zum Aktualisieren des Hintergrundbildes (alle 10 Sekunden)
setInterval(updateBackground, 3000);

// Initialer Aufruf zum Setzen des ersten Hintergrundbildes
updateBackground();
