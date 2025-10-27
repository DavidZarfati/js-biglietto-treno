// console.log("Hello world");
// const kmPercorso = prompt("Inserisci il numero di chilometri che vuoi percorrere")


// if (eta.length >= 3 &&
//     event.key !== 'Backspace' &&
//     event.key !== 'Delete') {
//     event.preventDefault();
// }

// dichiarizioni di variabili

let kmPercorso;
do {
    kmPercorso = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere(tra 0 e 100000 Km):"));
} while (isNaN(kmPercorso) || kmPercorso < 0 || kmPercorso > 100000);



let eta;
do {
    eta = parseInt(prompt("Inserisci l'età (0-150 anni):"));
} while (isNaN(eta) || eta < 0 || eta > 150);


const prezzoKm = 0.21
let prezzoViaggio = kmPercorso * prezzoKm


// logica

if (eta < 18) { // sconto minorenni
    prezzoViaggio = prezzoViaggio * 0.8; // 20% di sconto
} else if (eta > 65) { // sconto anziani
    prezzoViaggio = prezzoViaggio * 0.6; // 40% di sconto
}

prezzoViaggio = prezzoViaggio.toFixed(2);


// output
console.log(`Il prezzo finale è ${prezzoFixato}.€`)













// Debug

// Variabili Generali
// console.log(kmPercorso, eta, prezzoKm, prezzoViaggio,);


// Ragionamento
// chiedo eta e km da percorrere
// Moltiplico il prezzo per KM per i KM percorsi
// Controllo in base all'eta se hanno diritto ad uno sconto
// Applico lo sconto al prezzo totale
// do in output il prezzo totale, scontato se hanno diritto ad uno sconto