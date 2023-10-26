

const eta= prompt( "Inserisci la tua eta", "");
const kmdaPercorrere = prompt("quanti km devi percorrere ?", "");
const prezzoBiglietto = kmdaPercorrere * "0.21";


document.getElementById("calcolokm").innerHTML = kmdaPercorrere * "0.21";
document.getElementById("calcolokm").innerHTML = `Il prezzo del biglietto e ${kmdaPercorrere}`;