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

    // Controllo che inserisca un numero e non lettere

    if (!isNaN (userNumbers)) {

        arrayNumbers.push(userNumbers);

    // Faccio la somma di tutti i numeri che vengono pushati sfruttando la variabile
    // creata in precedenza "somma"

        somma += userNumbers;

    // Alert da mandar all'utente se non inserisce numeri
    } else {
        alert(' Devi inserire un numero, non lettere')
    }

    // Creo la condizione tale per cui se "somma" vale meno di 50 il ciclo si ripete

} while (somma < 50);

console.log(arrayNumbers);

console.log(somma);
