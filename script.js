// Selezioniamo tutti gli elementi .giornale
const giornali = document.querySelectorAll('.giornale');

// Funzione per generare una posizione casuale per ogni giornale dentro i limiti del contenitore
function getRandomPosition() {
    // Impostiamo le dimensioni del contenitore
    const containerWidth = 400;  // Larghezza del contenitore
    const containerHeight = 400; // Altezza del contenitore

    // Generiamo una posizione casuale X e Y limitata all'interno dei bordi del contenitore
    const randomX = (Math.random() - 0.5) * (containerWidth - 100);  // Limita la posizione X
    const randomY = (Math.random() - 0.5) * (containerHeight - 130); // Limita la posizione Y

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
