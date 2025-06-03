let input = document.querySelector('.fatturato'); //Selettore input con classe 'fatturato'

let output = document.querySelector('.tasse'); //Selettore span con classe 'tasse'

let gest = document.querySelectorAll('.gestione'); 

let rimasti = document.querySelector('.rimasti')

function calcTasse(stipendio) {
    let tasse = (stipendio / 100) * 47
    output.innerHTML = tasse.toFixed(2); //lasciamo solo due valori dopo la virgola
    rimasti.innerHTML = stipendio-tasse
    stipendio = parseFloat(stipendio)
}

input.addEventListener('keyup', function() {
    calcTasse(input.value);
})

function gestSoldi(rimasti) {
   const allocazioni = {
        cibo: 0.20, // 20% della somma rimanente
        bollette: 0.20, // 15%
        veicolo: 0.10, // 10%
        affittoMutuo: 0.35, // 35%
        investimenti: 0.20 // 20%
    };

    gest[0].innerHTML = `Cibo: €${(rimasti * allocazioni.cibo).toFixed(2)}`;
    gest[1].innerHTML = `Bollette: €${(rimasti * allocazioni.bollette).toFixed(2)}`;
    gest[2].innerHTML = `Veicolo: €${(rimasti * allocazioni.veicolo).toFixed(2)}`;
    gest[3].innerHTML = `Affitto / Mutuo: €${(rimasti * allocazioni.affittoMutuo).toFixed(2)}`;
    gest[4].innerHTML = `Investimenti: €${(rimasti * allocazioni.investimenti).toFixed(2)}`;
}

