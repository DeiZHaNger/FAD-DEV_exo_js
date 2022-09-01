(() => {
    const PRICE_MIN = 1, PRICE_MAX = 1000;
    let price, attempts, found;

    const h2 = document.querySelector("h2");
    h2.textContent += `${PRICE_MIN}€ et ${PRICE_MAX}€`;

    const priceGuess = document.getElementById("input-guess");
    const btGuess = document.getElementById("bt-guess");
    const btStart = document.getElementById("bt-start");
    const btStop = document.getElementById("bt-stop");
    const textResult = document.getElementById("text-result");
    const textScore = document.getElementById("text-score");
    const score = document.getElementById("score");

    priceGuess.min = PRICE_MIN;
    priceGuess.max = PRICE_MAX;

    function getRandomInt(max, min=0) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function toggleButtonsVisibility() {
        for (let item of [priceGuess, btGuess, btStop, btStart]) {
            item.classList.toggle("hidden");
        }
    }

    function resetGame() {
        found = false;
        price = getRandomInt(PRICE_MAX, PRICE_MIN);
        attempts = 0;
        priceGuess.value = null;
        textResult.textContent = null;
        textScore.classList.remove("hidden");
        refreshScore();
        toggleButtonsVisibility();

        btGuess.addEventListener('click', checkGuess);
    }

    function stopGame() {
        btGuess.removeEventListener('click', checkGuess);
        toggleButtonsVisibility();
        if (found) {
            textResult.textContent = "Bravo ! Vous avez gagné, Champagne !";
        } else {
            attempts += 100;
            refreshScore();
            textResult.textContent = "Perdu! Vous ferez mieux la prochaine fois ! "
        }
    }

    function refreshScore() {
        score.textContent = Math.max(0, 100 - attempts);
    }

    function checkGuess() {
        let guess = priceGuess.value;
        console.log(guess);
        if (isNaN(guess) || guess == "" || guess < PRICE_MIN || guess > PRICE_MAX) {
            priceGuess.classList.add("error");
            alert(`Nombre attendu. Entre ${PRICE_MIN} et ${PRICE_MAX}.`);
            priceGuess.value = null;
            return;
        }

        priceGuess.classList.remove("error");
        attempts++;
        refreshScore();
        found = guess == price;
        if (found) {
            stopGame();
        } else {
            textResult.textContent = guess > price ? "Trop haut" : "Trop bas";
        }
    }

    btStart.addEventListener('click', resetGame);
    btStop.addEventListener('click', stopGame);
})();