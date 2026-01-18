// Selezioniamo tutti gli elementi .giornale
const giornali = document.querySelectorAll('.giornale');

// Funzione per generare una posizione casuale per ogni giornale
function getRandomPosition() {
    const randomX = (Math.random() - 0.5) * 200; // Posizione casuale X
    const randomY = (Math.random() - 0.5) * 200; // Posizione casuale Y
    const randomRotate = (Math.random() - 0.5) * 60; // Angolo casuale di rotazione
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
        // I giornali tornano in una posizione casuale
        giornali.forEach((g) => {
            g.style.transform = getRandomPosition();  // Posizione casuale
        });
    });
});
