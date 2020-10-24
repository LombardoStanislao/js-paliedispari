// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// Creo i due array con numero di elementi diversi

var firstArray = ['ciao', 'pippo', 'casa', 'paolo', 'pluto', 'cane', 7, 'gatto', 'topo', 1];

var secondArray = [3, 'mario'];

// Creo un ciclo do-while in cui pushare gli elementi generati casualmente nel
// secondArray fino a che non raggiunge lo stesso numero di elemnti del firstArray

do {
    var random = getRndInteger(1, 100);

    secondArray.push(random);

} while (secondArray.length != firstArray.length);

console.log(firstArray);

console.log(secondArray);






function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
