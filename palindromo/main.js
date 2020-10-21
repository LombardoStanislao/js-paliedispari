// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)


var palindromi = ['otto', 'cane', 'anna', 'benvenuto', 'occorrenza', 'kayak' ];


//  Inizio il ciclo for per prender ogni parola dall'array
for (var i = 0; i < palindromi.length; i++) {
    // Inizializzo una variabile di supporto per inidicare ogni singolo elemento che sta scorrendo nel ciclo
    var parolaCorrente = palindromi[i];
// Creo una variabile con una stringa vuota che viene riempita nel successivo ciclo for da ogni lettera
    var parola = '';
// Ciclo for dentro un ciclo for, utilizzato per prender ogni elemento del primo ciclo e scomporlo a sua volta ma partendo dall'utilimo elemento
    for (var j = parolaCorrente.length - 1; j >= 0; j--) {
// Unisco ogni lettera dell'elemento che ho scomposto per riformare una la parola ma al contrario
        parola += parolaCorrente[j]

    }

    // stampo la parola al contrario per intero
    console.log(parola);
// Creo la condizione tale per cui, se la parola appena scomposta al contrario è uguale alla parola iniziale del primo ciclo for, prenda la prima strada, altrimenti, la seconda
    if (parolaCorrente == parola) {
        console.log('La parola ' + parolaCorrente + ' è palindroma');
    } else {
        console.log('La parola ' + parolaCorrente + ' NON è palindroma');
    }

}



function palindrom(stringa) {


    var parola = '';

    for (var i = stringa.length -1; i >= 0 ; i--) {
        parola += stringa[i];
    }

    if (stringa == parola) {
        console.log('La parola ' + stringa + ' è palindroma');
    } else {
        console.log('La parola ' + stringa + ' NON è palindroma');
    }

    return;

}


var test = palindrom('ciao');

console.log(test);
