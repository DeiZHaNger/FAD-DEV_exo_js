(() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const multi = (a, b) => a * b;
    const div = (a, b) => a == 0 && b == 0 ? undefined : a / b;

    const operators = {"+" : add, "-" : sub, "*" : multi, "/" : div};

    function main() {
        let operator;
        let errMsg = "";
        do {
            operator = prompt(errMsg + "Choix de l'opérateur : +, -, *, /");
            if (!errMsg) {
                errMsg = "Mauvais Choix. Recommencez.\n";
            }
        } while (!operators.hasOwnProperty(operator));


        let nb1, nb2, resultError;
        do {
            nb1 = parseFloat(prompt("Première opérande"));
            nb2 = parseFloat(prompt("Seconde opérande"));

            try {
                let result = operators[operator](nb1, nb2);
                if (isNaN(result) && result !== undefined) {
                    throw new Error("Erreur de saisie. Nombres attendus.\nRecommencez.");
                }
                resultError = false;
                alert(`${nb1} ${operator} ${nb2} = ${operators[operator](nb1, nb2)}`);
            } catch (e) {
                resultError = true;
                alert(e.message);
            }
        } while (resultError);
    }

    do {
        main();
    } while (confirm("Autre calcul ?"));
})();