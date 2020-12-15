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