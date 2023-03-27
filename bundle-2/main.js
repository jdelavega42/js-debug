/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// 1 - i deve essere minore
// 2 -
// 3 -

// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// function addIfEven(num = 2) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }
// console.log(addIfEven());

// 1 - aggiunge 5 se il numero é pari
// 2 - = é assegnazione, == é uguaglianza, === é identità
// 3 - no



// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// console.log(loopToFive());

// 1 - crea un loop fino al 5
// 2 - vanno le ; al posto delle ,
// 3 - viene inviato il loop anche ad i = 4, 


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log( displayEvenNumbers()); // [2,4,6,8]