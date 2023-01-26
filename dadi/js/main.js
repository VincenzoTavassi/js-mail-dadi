// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


document.getElementById('genera-numero').addEventListener('click', function () {
    const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
    const numeroPc = Math.floor(Math.random() * 6) + 1;

    document.querySelector('#numero-giocatore').innerHTML = `Il tuo numero è ${numeroGiocatore}!`;
    document.querySelector('#numero-pc').innerHTML = `Il numero del computer è ${numeroPc}!`;

    if (numeroGiocatore > numeroPc) {
        document.querySelector('#risultato').innerHTML = `<strong>HAI VINTO!</strong>`
    }
    else if (numeroGiocatore == numeroPc) {
        document.querySelector('#risultato').innerHTML = `<strong>PAREGGIO!</strong>`
    }
    else {
        document.querySelector('#risultato').innerHTML = `<strong>HAI PERSO!</strong>`
    }
})