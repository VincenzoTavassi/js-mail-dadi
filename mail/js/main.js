// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

const listaEmail = [
    "info@ciao.com",
    "nomenome@ciaociao.com",
    "hello@hello.co.uk",
    "mariorossi@rossi.it",
    "test@test.org"
]

const sceltaUtente = prompt('Scrivi la tua e-mail');
let autorizzato = false;

for (let i = 0; i < listaEmail.length; i++) {
    let currentEmail = listaEmail[i];

    if (currentEmail == sceltaUtente) {
        autorizzato = true;
    }
}

if (autorizzato == true) {
    alert(`Benvenuto ${sceltaUtente}`);
} else {
    alert(`Non sei autorizzato`);
}