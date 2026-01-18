// Selezioniamo tutti gli elementi .giornale
const giornali = document.querySelectorAll('.giornale');

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
        // I giornali restano disordinati, ma non ritornano in posizione ordinata
        giornali.forEach((g, i) => {
            // Ogni giornale mantiene una posizione casuale
            if (i < index) {
                g.style.transform = 'rotate(-15deg) translateX(-50px) translateY(20px)';
            } else if (i > index) {
                g.style.transform = 'rotate(10deg) translateX(40px) translateY(-30px)';
            } else {
                g.style.transform = 'rotate(20deg) translateX(-40px) translateY(-10px)';
            }
        });
    });
});
