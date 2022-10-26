btn = document.getElementById('spendi'); //definisce il pulsante btn come quello collegato ad ID Spendi

btn.addEventListener('click', () => {  
    
    document.getElementById('totale').innerHTML = '';  //al click di spendi cancella sempre in automatico tutto il contenitore
    var budget = 1000; //ridefinisce ogni volta il budget a 1000 ad ogni click
    
    while (budget > 200) {
        let spent = Math.floor(Math.random() * 100);//genera il numero random

        if (spent > budget) { //fa il confronto con il budget
            spent = budget; //ridefinisce spesa
        }

        budget -= spent; //fa la sottrazione tra budget e spesa. 
        
        document.getElementById('totale').innerHTML += `<p>Hai speso <b>${spent}</b>€`; //scrive quanto hai speso.

        if (budget > 200) {
            document.getElementById('totale').innerHTML += '<p><i>Hai ancora soldi da spendere</i></p>';
        } else if (budget < 200) {
            document.getElementById('totale').innerHTML += '<p><i>Hai superato il tuo budget</i></p>';

        }


        document.getElementById('totale').innerHTML += `<p>Ti rimangono <b>${budget}€</b></p>`;
    }
    
})
