//1
document.getElementById("timestamp").innerHTML = Date.now();
//2
document.getElementById("localDate").innerHTML = new Date().toLocaleDateString();
//3
document.getElementById("localTime").innerHTML = new Date().toLocaleTimeString();
//4
let aujourdhui = new Date();
let futur = new Date();
futur.setDate(aujourdhui.getDate() + 2);
futur.setHours(aujourdhui.getHours() + 6);
document.getElementById("DateNow").innerHTML = aujourdhui;
document.getElementById("futureDate").innerHTML = futur;

if (futur > aujourdhui) {
    let newDiv = document.createElement("div");

    let interval = futur.getTime() - aujourdhui.getTime();
//Différence totale
    let days = Math.floor(interval / 60 / 60 / 24 / 1000);
    let hours = Math.floor((interval - (days * 60 * 60 * 24 * 1000)) / 60 / 60 / 1000);
    newDiv.innerHTML = "La différence entre ses 2 dates est de " + days + " jour(s) ET " + hours + " heure(s)."
    document.body.appendChild(newDiv);
}