// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(numeroGiocatore);
const numeroPc = Math.floor(Math.random() * 6) + 1;
console.log(numeroPc);

if (numeroGiocatore > numeroPc) {
    alert('Hai vinto!')
}
else if (numeroGiocatore == numeroPc) {
    alert('Pareggio!');
}
else {
    alert('Hai perso!');
}