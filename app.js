"use strict"

// La somma che viene inserita nell'input, deve essere divisa e allocata nelle voci presenti sotto

const input = document.getElementById("input");
const button = document.getElementById("btn");
let spesa = document.getElementById("Spesa");
let bollette = document.getElementById("Bollette");
let affitto = document.getElementById("Affitto");
let macchina = document.getElementById("Macchina");
let risparmio = document.getElementById("Risparmio");
let varie = document.getElementById("Varie");

function gestioneSoldi(sommaSoldi){
        spesa.value = sommaSoldi * .20;
        bollette.value = sommaSoldi * .15;
        affitto.value = sommaSoldi * .30;
        macchina.value = sommaSoldi * .10;
        risparmio.value = sommaSoldi * .10;
        varie.value = sommaSoldi * .10;
}

input.addEventListener("keyup", function (){
    gestioneSoldi(input.value);
})

button.addEventListener("click", function (gestioneSoldi){
    spesa.textContent = spesa.value;
    bollette.textContent = bollette.value ;
    affitto.textContent = affitto.value ;
    macchina.textContent = macchina.value ;
    risparmio.textContent = risparmio.value ;
    varie.textContent = varie.value ;
    if(input.value === ""){
        alert("Devi inserire una somma!");
        return;
    } else if(input.value <= 1300) {
        alert ("Stò elaborando... ma nel mentre trovati un nuovo lavoro! :)");
        spesa.textContent = spesa.value;
        bollette.textContent = bollette.value ;
        affitto.textContent = affitto.value ;
        macchina.textContent = macchina.value ;
        risparmio.textContent = risparmio.value ;
        varie.textContent = varie.value ;
    }
})