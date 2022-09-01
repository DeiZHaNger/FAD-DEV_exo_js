(() => {
    /* fetch base code from https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373 */
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        main(data.filter(e => e.author).slice(0, 10));
    });

    function getRandomInt(max, min=0) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getNewRandomInt(currValue, max, min=0) {
        return (currValue + getRandomInt(max, 1)) % max;
    }

    function main(data) {
        const quoteText = document.getElementById("quote-text");
        const quoteSrc = document.getElementById("quote-src");
        const btNext = document.getElementById("bt-next");

        const nbQuotes = data.length;
        let currQuoteIdx = -1;

        function displayNewQuote() {
            let item = data[getNewRandomInt(currQuoteIdx, nbQuotes)];
            quoteText.textContent = item.text;
            quoteSrc.textContent = item.author;
        }

        // console.table(data);
        displayNewQuote();
        btNext.addEventListener('click', function (ev) {
            ev.preventDefault();
            displayNewQuote();
        });
    }
})();
