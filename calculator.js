const add = (a, b) => { return a + b };
const sub = (a, b) => { return a - b };
const multi = (a, b) => { return a * b };
const div = (a, b) => { return a / b };

const operators = {"+" : add, "-" : sub, "*" : multi, "/" : div};

let operator;
let errMsg = "";
do {
    operator = prompt(errMsg + "Choix de l'opérateur : +, -, *, /");
    if (!errMsg) {
        errMsg = "Mauvais Choix, recommencez\n";
    }
} while (!operators.hasOwnProperty(operator));

let nb1 = parseFloat(prompt("Première opérande"));
let nb2 = parseFloat(prompt("Seconde opérande"));

try {
    let result = operators[operator](nb1, nb2);
    if (isNaN(result)) {
        throw new Error("Erreur de saisie. Nombres attendus.")
    }
    alert(`${nb1} ${operator} ${nb2} = ${operators[operator](nb1, nb2)}`);
} catch (e) {
    alert(e.message);
}