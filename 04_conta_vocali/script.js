/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * 
 * @param {string} word parola da controllare
 * @returns {number}
 */

function vovelCounter(word) {
    //word.toUpperCase();
    let c = 0;
    for (let i = 0; i < word.length; i++) {
        let currentChar = word.charAt(i).toUpperCase();
        if(currentChar === "A" ||currentChar === "E" ||currentChar === "I" ||currentChar === "O" ||currentChar === "U") {
            c++;
        }  
    }
    return c;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(vovelCounter(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)