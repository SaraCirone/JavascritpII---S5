//setta le variabili del New Date necessario e poi la vriabile month e date per poter fare un confronto con la data attuale e poter pescare nei relativi array, il giorno ed il mese (a lettere) corrispondente. 
let data = new Date(); 
let month = data.getMonth();
let day = data.getDay();

const arrayMesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

const arrayGiorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

//stampa la data concatenando numero, mese (in lettere) e anno
document.getElementById('dataOggi').innerHTML += ` ${data.getDate()}/${arrayMesi[month]}/${data.getFullYear()}`;

//stampa la data completa in formato fuso orario 
document.getElementById('fullData').innerHTML = data;
//stampa il numero del giorno
document.getElementById('giorno'). innerHTML += `${data.getDate()}`;
//stampa il giorno in lettere
document.getElementById('giorno2'). innerHTML += `${arrayGiorni[day]}`;
//stampa il numero del mese
document.getElementById('mese'). innerHTML += `${data.getMonth()}`;
//stampa il mese in lettere
document.getElementById('mese2'). innerHTML += `${arrayMesi[month]}`;
//stampa la data a numeri concatenando giorno, mese ed anno
document.getElementById('dataFull').innerHTML += ` ${data.getDate()} / ${data.getMonth()} / ${data.getFullYear()}`

//con un setInterval puntato sulla funzione (ora attuale), si setta un refresh a 1000 millisecondi (1 secondo) per far si che l'orario scorra ogni secondo autocamenticamente.  Dentro (come variabile locale) si setta nuovamente il new date e si stampano poi ora, minuti e secondi. Alla fine si chiama la funzione esternamente. 
setInterval(oraAttuale, 1000);
function oraAttuale() {
    const oraAdesso = new Date; 
    document.getElementById('orario').innerHTML = `<b>Sono le ore</b> ${oraAdesso.getHours()} : ${oraAdesso.getMinutes()} : ${oraAdesso.getSeconds()}`;
}
oraAttuale();

//si setta come prima un setinterval ad (1 secondo) puntato sulla funzione saluto. Si crea un IF che controlla diversi orari ed in base ai parametri inseriti restituisce un saluto
setInterval(saluto, 1000);
function saluto() {
    const ora = new Date; 
    console.log(ora.getHours());

    if(ora.getHours() >= 6 && ora.getHours() <= 12) {
        document.getElementById('saluto').innerHTML = `<b>Buongiorno</b>`; 
    } else if(ora.getHours() >= 13 && ora.getHours() <= 19){
        document.getElementById('saluto').innerHTML = '<b>Buon Pomeriggio!</b>';  
    } else if(ora.getHours() >= 20 && ora.getHours() <= 23){
        document.getElementById('saluto').innerHTML = '<b>Buona Sera!</b>'; 
    } else {
        document.getElementById('saluto').innerHTML = '<b>Vai a letto!</b>'; 
    }

}
saluto();
