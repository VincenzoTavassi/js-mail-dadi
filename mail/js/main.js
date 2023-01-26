// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// ARRAY DI EMAIL 
const listaEmail = [
    "info@ciao.com",
    "nomenome@ciaociao.com",
    "hello@hello.co.uk",
    "mariorossi@rossi.it",
    "test@test.org"
]

// AUTORIZZAZIONE FALSA DI DEFAULT 
let autorizzato = false;

// EVENTO SUL CLICK DEL PULSANTE DI CONTROLLO AUTORIZZAZIONE
document.getElementById('controlla').addEventListener('click', function () {

    // OTTENGO IL VALORE INSERITO DALL'UTENTE 
    let sceltaUtente = document.getElementById('controllo-email').value;
    // CICLO LA LISTA E-MAIL
    for (let i = 0; i < listaEmail.length; i++) {
        let currentEmail = listaEmail[i];
        // SE C'E' UN'E-MAIL UGUALE A QUELLA DELL'UTENTE ALLORA E' AUTORIZZATO
        if (currentEmail == sceltaUtente) {
            autorizzato = true;
        }
    }
    // MESSAGGIO DI AUTORIZZAZIONE 
    if (autorizzato == true) {
        alert(`Benvenuto ${sceltaUtente}`);
    } else {
        alert(`Non sei autorizzato`);
    }
})

// EVENTO SUL CLICK DEL PULSANTE PER OTTENERE AUTORIZZAZIONE
document.getElementById('autorizza').addEventListener('click', function () {
    // OTTENGO IL VALORE INSERITO DALL'UTENTE 
    let nuovoUtente = document.getElementById('email-da-autorizzare').value;
    // AGGIUNGO IL VALORE ALL'ARRAY DI E-MAIL 
    listaEmail.push(nuovoUtente);
    // MESSAGGIO DI CONFERMA
    alert(`Email ${nuovoUtente} inserita!`)

})