// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari



// Creo l'array con all'interno i numeri interi
var arrayNumbers = [1, 4, 5, 9, 11, 14, 22, 20, 7, 10, 2, 3];

console.log(arrayNumbers);

// Creo la variabile su cui sommerò tutti gli elementi in posizione dispari
var somma = 0;


// Col ciclo for provo a recuperare solo gli elementi in posizione dispari

for (var i = 0; i < arrayNumbers.length; i++) {

    if (i % 2 !=0) {
        somma += arrayNumbers[i];
        console.log(arrayNumbers[i]);
    }
}

console.log(somma);
