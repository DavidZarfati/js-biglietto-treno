// console.log("Hello world");
const kmPercorso = prompt("Inserisci il numero di chilometri che vuoi percorrere")
const eta = prompt("Inserisci l'età di chi percorrà il percorso")

// if (eta.length >= 3 &&
//     event.key !== 'Backspace' &&
//     event.key !== 'Delete') {
//     event.preventDefault();
// }




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
