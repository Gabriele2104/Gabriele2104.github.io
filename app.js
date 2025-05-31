let input = document.querySelector('.fatturato'); //Selettore input con classe 'fatturato'

let output = document.querySelector('.tasse'); //Selettore span con classe 'tasse'

function calcTasse(fatturato) {
    let tasse = (fatturato / 100) * 47
    output.innerHTML = tasse.toFixed(2); //lasciamo solo due valori dopo la virgola
}

input.addEventListener('keyup', function() {
    calcTasse(input.value);
})

