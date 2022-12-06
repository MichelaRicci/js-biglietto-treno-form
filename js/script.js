console.log('JS OK');

/* 1. Chiedere all'utente quanti km vuole percorrere
2. Chiedere all'utente quanti anni ha
3. Calcolare prezzo totale del viaggio (prezzo finale per utenti 19-64 anni)
4. Applicare sconti al totale del viaggio: 20% <18 anni, 40% >65 anni (con if/else)
5. Stampare in pagina */



// Prendo input e button 

const ticketGenerator = document.getElementById('ticketGenerator');



// Collego event listener al button 

ticketGenerator.addEventListener("click", function() {

    const name = document.getElementById('name').value;

    const kmTrip = document.getElementById('kmTrip').value;

    const userAge = document.getElementById('userAge').value;

    let priceTrip = (kmTrip * 0.21);


    if (userAge == "young") {
        priceTrip = (priceTrip * 0.8).toFixed(2) + "€";
    } else if (userAge == "senior") {
        priceTrip = (priceTrip * 0.6).toFixed(2);
    }       
    
    console.log(priceTrip);


    document.getElementById('passenger').innerHTML = name;
    document.getElementById('priceTrip').innerHTML = priceTrip;


})
