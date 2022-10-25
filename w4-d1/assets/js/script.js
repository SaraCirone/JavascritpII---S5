var oggi = new Date(); 
var m = oggi.getMonth();
var hours = oggi.getHours();
var minutes = oggi.getMinutes();
var second = oggi.getSeconds(); 

const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

document.getElementById('dataOggi').innerHTML = `${oggi.getDate()} - ${mesi[m]} - ${oggi.getFullYear()}`;

//uno

document.getElementById("europe").innerHTML = oggi; //stampa formato europeo
document.getElementById('gg').innerHTML += oggi.getDate();//stampa formato giorno 
document.getElementById('mese').innerHTML += mesi[m]; //stampa mese nome
document.getElementById('dataNow').innerHTML = `${oggi.getDate()} - ${oggi.getMonth() + 1} - ${oggi.getFullYear()}`; //data formattata con mese numerico


//stampa orario
document.getElementById('ore').innerHTML = `Sono le ore ${oggi.getHours()}, ${oggi.getMinutes()} minuti, e ${oggi.getSeconds()} secondi`;