(() => {
    const MAX_SECONDS = 10;
    const startButton = document.querySelector("button");
    const h2 = document.querySelector("h2");

    let seconds;
    let timer = null;

    function start() {
        if (timer == null) {
            seconds = MAX_SECONDS;
            displayTime();
            timer = setInterval(countdown, 1000);
        }
    }

    function stop() {
        clearInterval(timer);
        timer = null;
    }

    function displayTime() {
        h2.textContent = seconds == 0 ? "" : seconds;
    }

    function countdown() {
        seconds--;
        displayTime();
        if (seconds == 0) {
            stop();
        }
    }

    startButton.addEventListener('click', start);
})();