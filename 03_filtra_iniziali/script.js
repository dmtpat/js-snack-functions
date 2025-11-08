/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Funzione che restituisce un'array contenente le stringhe che hanno la lettera scelta come iniziale
 * @param {Array} stringArray Array contenente stringhe
 * @param {string} letter lettera scelta
 * @returns {Array} restituisce l'array che rispetta i criteri iniziali
 */

function sameInitialArray(stringArray, letter) {
    const result = [];
    //stringArray.toLowerCase();
    let j = 0;
    for (let i = 0; i < stringArray.length; i++) {
        if (letter.toUpperCase() === stringArray[i].toUpperCase().charAt(0)) { 
            result[j] = stringArray[i];
            j++;
        }        
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
const letter = "A"
console.log(sameInitialArray(names, letter))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]