// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
// L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
// Il computer genera un secondo numero casuale tra 1 e 5.
// Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari.
// Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3.
// In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)


// L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".

var userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

var userEvenOdd = prompt('Scegli tra pari o dispari');

var somma = 0;


// Il computer genera un secondo numero casuale tra 1 e 5.

var pcNumber = getRndInteger(1, 5);

console.log(pcNumber);





function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
