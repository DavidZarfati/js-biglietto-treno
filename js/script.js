// console.log("Hello world");
// const kmPercorso = prompt("Inserisci il numero di chilometri che vuoi percorrere")


// if (eta.length >= 3 &&
//     event.key !== 'Backspace' &&
//     event.key !== 'Delete') {
//     event.preventDefault();
// }

let kmPercorso;
do {
    kmPercorso = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere(tra 0 e 100000 Km):"));
} while (isNaN(kmPercorso) || kmPercorso < 0 || kmPercorso > 100000);



let eta;
do {
    eta = parseInt(prompt("Inserisci l'età (0-150 anni):"));
} while (isNaN(eta) || eta < 0 || eta > 150);


const prezzoKm = 0.21
const prezzoViaggio = kmPercorso * prezzoKm
let prezzoViaggioMin = 0
let prezzoViaggioMag = 0
const messaggio = "Il prezzo del tuo biglietto é di "
const scontoMin = "grazie al tuo sconto Minorenni(Under 18) da 20% "
const scontoMag = "grazie al tuo sconto Over65 da 40% "

if (eta < 18) {
    let prezzoViaggioMin = (prezzoViaggio / 100) * 80
    // let prezzoViaggioMinArrotondato = +prezzoViaggioMin.toFixed(2)
    // let prezzoViaggioMinArrotondato = Math.round((prezzoViaggioMin + Number.EPSILON) * 100) / 100
    let prezzoViaggioMinArrotondato = parseFloat(prezzoViaggioMin)
    console.log(`${messaggio}${prezzoViaggioMinArrotondato.toFixed(2)}.€ ${scontoMin}`)

    // Debug Variabili Under 18
    // console.log(prezzoViaggioMin, prezzoViaggioMinArrotondato);

}
else if (eta > 65) {
    let prezzoViaggioMag = (prezzoViaggio / 100) * 60
    let prezzoViaggioMagArrotondato = parseFloat(prezzoViaggioMag)
    console.log(`${messaggio}${prezzoViaggioMagArrotondato.toFixed(2)}.€ ${scontoMag}`)

    //Debug Variabili Over 65
    // console.log(prezzoViaggioMag, prezzoViaggioMagArrotondato);

}
else {
    let prezzoViaggioArrotondato = parseFloat(prezzoViaggio)
    console.log(`${messaggio}${prezzoViaggioArrotondato.toFixed(2)}€`)

    // Debug Variabili 18 < && > 65
    // console.log(prezzoViaggioArrotondato)
}






// Debug

// Variabili Generali
// console.log(kmPercorso, eta, prezzoKm, prezzoViaggio,);


// Ragionamento
// chiedo eta e km da percorrere
// Moltiplico il prezzo per KM per i KM percorsi
// Controllo in base all'eta se hanno diritto ad uno sconto
// Applico lo sconto al prezzo totale
// do in output il prezzo totale, scontato se hanno diritto ad uno sconto