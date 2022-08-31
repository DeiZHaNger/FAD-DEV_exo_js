let userName = prompt("Your firstname?");
let nbChar = userName.length;
let message = 1 < nbChar && nbChar < 10 ? `Hello ${userName}` : "Erreur";
alert(message);