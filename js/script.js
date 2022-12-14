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

        document.getElementById('offer').innerHTML = "Biglietto Young";


    } else if (userAge == "senior") {
        priceTrip = (priceTrip * 0.6).toFixed(2) + "€";

        document.getElementById('offer').innerHTML = "Biglietto Senior";
    }  else {
        document.getElementById('offer').innerHTML = "Biglietto Standard";

    }     
    
    console.log(priceTrip);


    document.getElementById('passenger').innerHTML = name;
    document.getElementById('priceTrip').innerHTML = priceTrip;

    let minCarriage = 1;
    let maxCarriage = 8;
  
    let Carriage = Math.floor(Math.random() * (maxCarriage - minCarriage + 1)) + minCarriage;


    document.getElementById('carriage').innerHTML = Carriage;


    let minCpNumber = 90000;
    let maxCpNumber = 99999;

    let CpNumber = Math.floor(Math.random() * (maxCpNumber - minCpNumber + 1)) + minCpNumber;


    document.getElementById('codeCP').innerHTML = CpNumber;

    

    


 


})
