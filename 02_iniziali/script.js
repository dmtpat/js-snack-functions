/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

console.log(names.length);
// Dichiara la funzione qui.
/**
 * Funzione che crea un array con elementi la prima letteera di ogni elemento dell'array
 * @param {array} namesArray array contenente nomi
 * @returns {arry} Array di elementi con un solo carattere
 */
function firstLetterArray(namesArray) {
    let result = [];

    for (let i=0; i<namesArray.length ; i++){
        result[i] = namesArray[i].charAt(0);
        console.log(result);
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = firstLetterArray(names);
console.log(risultato);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]