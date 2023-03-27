/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// const myAge = 32;
// function checkAge() {
//      message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     return message
// }

// checkAge(myAge);
// console.log(checkAge(myAge));

// 1 - controlla se é maggiorenne;
// 2 -  const al posto di let, manca il return
// 3 - myAge deve essere argomento della funzione


// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

// 1 -  controlla gli oggetti nell'array ed esplicita in numero di oggetti all'interno;
// 2 -  length;
// 3 - no


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// 1 - addizione di due numeri;
// 2 - no;
// 3 - la funzione é una concatenazione, bisogna modificare ciò che ricevo dal prompt


// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// 1 -  controlla se la mai é all'interno dell'array addresses
// 2 - false e true sono delle stringhe e non valori booleani
// 3 - no
