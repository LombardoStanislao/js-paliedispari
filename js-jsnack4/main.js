// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// Creo i due array con numero di elementi diversi

var firstArray = ['ciao', 'pippo', 'casa', 'paolo', 'pluto', 'cane', 7, 'gatto', 'topo', 1];

var secondArray = [3, 'mario'];

// Creo un ciclo do-while in cui pushare gli elementi generati casualmente nel
// secondArray fino a che non raggiunge lo stesso numero di elemnti del firstArray

do {

    // Prima versione, creando solo numeri da pushare
    var randomNumbers = getRndInteger(1, 100);

    secondArray.push(randomNumbers);

    // Seconda versione creando stringhe da pushare

    var randomString = makeString(7);

    secondArray.push(randomString);


} while (secondArray.length != firstArray.length);

console.log(firstArray);

console.log(secondArray);







function makeString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
