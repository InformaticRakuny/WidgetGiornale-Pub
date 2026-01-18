// Selezioniamo tutti gli elementi .giornale
const giornali = document.querySelectorAll('.giornale');

// Memorizziamo la posizione iniziale di ogni giornale rispetto al centro
const initialPositions = [
    'translate(-50%, -50%) rotate(-15deg) translateX(-60px) translateY(-80px)', // Giornale 1
    'translate(-50%, -50%) rotate(10deg) translateX(40px) translateY(-40px)',  // Giornale 2
    'translate(-50%, -50%) rotate(-5deg) translateX(70px) translateY(50px)',   // Giornale 3
    'translate(-50%, -50%) rotate(20deg) translateX(-30px) translateY(70px)'    // Giornale 4
];

// Funzione per gestire l'effetto di spostamento dei giornali
giornali.forEach((giornale, index) => {
    // Impostiamo la posizione iniziale per ogni giornale (centrato, ma con traslazione)
    giornale.style.transform = initialPositions[index];

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

    // Quando il mouse esce dalla pila (mouseout)
    giornale.addEventListener('mouseout', () => {
        // Ripristiniamo la posizione iniziale dei giornali, come se la pagina venisse ricaricata
        giornali.forEach((g, i) => {
            g.style.transform = initialPositions[i]; // Ripristina la posizione originale
        });
    });
});
