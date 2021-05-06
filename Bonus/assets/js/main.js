
/**
 * # Genera numeri tra due range
 * 
 * @param {Number} min -Numero del range inferiore 
 * @param {Number} max -Numero del range superiore
 * @returns {Number} -Return a number
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//Un alert() espone 5 numeri generati casualmente.
var numeriRandom = [];
// --> Bonus -- Controllo che i numeri inseriti non siano doppi
for (var i = 0; i < 5; i++) {
    var numero = getRndInteger(1, 30);
    if (!numeriRandom.includes(numero)) {
        numeriRandom.push(numero)
    } else {
        i--
    }


}
console.log(numeriRandom);


alert("Questi sono i numeri da memorizzare : " + numeriRandom + "\nAvrai 30 secondi per memorizzarli e poi dovrai inserirli uno alla volta! \nI numeri vanno da 1 a 30!");


//Da li parte un timer di 30 secondi.
setTimeout(function () {
    alert("Il è tempo scaduto ora devi inserire un numero alla volta")
    //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    var numeriUtente = [];

    for (var i = 0; i < 5; i++) {
        var numeroInserito = parseInt(prompt("Inserisci il " + (i + 1) + " numero!"));
        while (numeroInserito < 1 || numeroInserito > 30 || isNaN(numeroInserito)) {
            alert("Il numero inserito non è valido!");
            numeroInserito = parseInt(prompt("Inserisci il " + (i + 1) + " numero!"));
        }

        if (!numeriUtente.includes(numeroInserito)) {  //Bonus --> controllo che il numero inserito dall'utente non sia gia stato inserito
            numeriUtente.push(numeroInserito);
        } else {
            alert("Il numero " + numeroInserito + " è gia stato inserito!")
            i--
        }
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

    document.getElementById("numeri_random").innerHTML = numeriRandom;
    document.getElementById("numeri_inseriti").innerHTML = numeriUtente;
    document.getElementById("numeri_indovinati").innerHTML = numeriIndovinati;
    document.getElementById("totale_numeri_indovinati").innerHTML = numeriIndovinati.length;





}, 3000)


