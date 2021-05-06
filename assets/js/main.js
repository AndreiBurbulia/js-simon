/*
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//Un alert() espone 5 numeri generati casualmente.
var numeriRandom = [];

for (var i = 0; i < 5; i++) {
    var numero = getRndInteger(1, 30);
    numeriRandom.push(numero)
}
console.log(numeriRandom);
alert("Questi sono i numeri da memorizzare : " + numeriRandom + "\nAvrai 30 secondi per memorizzarli e poi dovrai inserirli uno alla volta!");


//Da li parte un timer di 30 secondi.
setTimeout(function () {
    alert("Il è tempo scaduto ora devi inserire un numero alla volta")
    //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    var numeriUtente = [];

    for (var i = 0; i < 5; i++) {
        var numeroInserito = parseInt(prompt("Inserisci il " + (i + 1) + " numero!"));
        numeriUtente.push(numeroInserito);
    }
    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    var numeriIndovinati = [];

    for (var i = 0; i < 5; i++) {
        var elemento = numeriUtente[i];

        if (numeriRandom.includes(elemento)) {
            numeriIndovinati.push(elemento);
        }
    }

    alert("Hai indovinato " + numeriIndovinati.length + " numeri, i numeri indovinati sono : " + numeriIndovinati);

}, 3000)


