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

    function getNewRandomIdx(currIdx, arrLen) {
        return (currIdx + getRandomInt(arrLen, 1)) % arrLen;
    }

    function main(data) {
        const quoteText = document.getElementById("quote-text");
        const quoteSrc = document.getElementById("quote-src");
        const btNext = document.getElementById("bt-next");

        const nbQuotes = data.length;
        let currQuoteIdx = -1;

        function displayNewQuote() {
            currQuoteIdx = getNewRandomIdx(currQuoteIdx, nbQuotes);
            let item = data[currQuoteIdx];

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
