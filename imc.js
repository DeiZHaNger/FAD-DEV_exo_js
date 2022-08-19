function imc(weight, height) {
    return weight / height**2;
}

let weight = parseInt(prompt("Poids en kg?"));
let height = parseInt(prompt("Taille en cm?")) / 100;
// console.log("IMC = " + (Math.round(10 * weight / height**2) / 10));
alert("IMC = " + imc(weight, height).toFixed(1));