// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)


var palindromi = ['otto', 'cane', 'anna', 'benvenuto', 'occorrenza', 'kayak' ]

var tostring = palindromi.toString();

// console.log(tostring);

for (var i = 0; i < tostring.length; i++) {
    console.log(tostring[i]);
    console.log(tostring.reverse());
}

function isPalindromo(element) {
    var palindrome = element.reverse();

    return palindrome;
}
