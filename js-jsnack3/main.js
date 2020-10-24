// Crea un array vuoto e chiedi all’utente un numero da
// inserire nell’array. Continua a chiedere i numeri all’utente e
// a inserirli nell’array fino a quando la somma degli elementi
// è minore di 50.


// Creo un array vuoto

var arrayNumbers = [];

var somma = 0;

// Chiedo all'utente un numero da inserire nell'array



// Creo un ciclo while in cui pushare i numeri inseriti dall'utente dentro l'arrayNumbers

do {
    var userNumbers = parseInt(prompt('Inserisci un numero'));

    if (!isNaN (userNumbers)) {

        arrayNumbers.push(userNumbers);
    } else {
        alert(' Devi inserire un numero, non lettere')
    }

} while (arrayNumbers.length < 3);

console.log(arrayNumbers);
