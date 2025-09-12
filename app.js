"use strict"

const input = document.getElementById("input");
const button = document.getElementById("btn");
let spesa = document.getElementById("Spesa");
let bollette = document.getElementById("Bollette");
let affitto = document.getElementById("Affitto");
let macchina = document.getElementById("Macchina");
let emergenze = document.getElementById("Emergenze");
let investimenti = document.getElementById("Investimenti");
let desideri = document.getElementById("Desideri");

function gestioneSoldi(sommaSoldi){
        spesa.value = (sommaSoldi * .20).toFixed(2);
        bollette.value = (sommaSoldi * .15).toFixed(2);
        affitto.value = (sommaSoldi * .30).toFixed(2);
        macchina.value = (sommaSoldi * .10).toFixed(2);
        emergenze.value = (sommaSoldi * .06).toFixed(2);
        investimenti.value = (sommaSoldi * .04).toFixed(2);
        desideri.value = (sommaSoldi * .10).toFixed(2);
}

input.addEventListener("keyup", function (){
    gestioneSoldi(input.value);
})

button.addEventListener("click", function (gestioneSoldi){
    alert ("Stò elaborando...");
    spesa.textContent = spesa.value;
    bollette.textContent = bollette.value ;
    affitto.textContent = affitto.value ;
    macchina.textContent = macchina.value ;
    emergenze.textContent = emergenze.value ;
    investimenti.textContent = investimenti.value;
    desideri.textContent = desideri.value ;
    if(input.value === ""){
        alert("Devi inserire una somma!");

    } else if(input.value <= 1300) {
        alert ("Stò elaborando...");
        spesa.textContent = spesa.value;
        bollette.textContent = bollette.value ;
        affitto.textContent = affitto.value ;
        macchina.textContent = macchina.value ;
        emergenze.textContent = emergenze.value ;
        investimenti.textContent = investimenti.value;
        desideri.textContent = desideri.value ;
    }
})