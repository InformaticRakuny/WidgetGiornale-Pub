// Selezioniamo tutti gli elementi .giornale
const giornali = document.querySelectorAll('.giornale');

// Funzione per generare una posizione casuale per ogni giornale all'interno del contenitore
function getRandomPosition() {
    const containerWidth = 400;  // Larghezza del contenitore
    const containerHeight = 400; // Altezza del contenitore

    const giornaleWidth = 100;   // Larghezza del giornale
    const giornaleHeight = 130;  // Altezza del giornale

    // Limiti per le posizioni casuali, considerando le dimensioni del giornale
    const maxX = containerWidth - giornaleWidth;  // X massima
    const maxY = containerHeight - giornaleHeight; // Y massima

    // Generiamo una posizione casuale X e Y all'interno dei limiti
    const randomX = Math.random() * maxX; // Posizione casuale X
    const randomY = Math.random() * maxY; // Posizione casuale Y

    // Genera una rotazione casuale tra -30 e +30 gradi
    const randomRotate = (Math.random() - 0.5) * 60;

    return `rotate(${randomRotate}deg) translateX(${randomX}px) translateY(${randomY}px)`;
}

// Funzione per gestire l'effetto di spostamento dei giornali
giornali.forEach((giornale, index) => {
    // Quando il mouse passa sopra il giornale
    giornale.addEventListener('mouseover', () => {
        // Ogni giornale cambia posizione a seconda della sua posizione relativa
        giornali.forEach((g, i) => {
            if (i < index) {
                g.style.transform = 'rotateY(-30deg) translateX(-50px) translateY(30px)';
            } else if (i > index) {
                g.style.transform = 'rotateY(30deg) translateX(50px) translateY(-30px)';
            } else {
                g.style.transform = 'rotateY(0deg) scale(1.1)';
            }
        });
    });

    // Quando il mouse esce dalla pila
    giornale.addEventListener('mouseout', () => {
        // I giornali tornano in una posizione casuale, ma dentro i limiti
        giornali.forEach((g) => {
            g.style.transform = getRandomPosition();  // Posizione casuale dentro i limiti
        });
    });
});
