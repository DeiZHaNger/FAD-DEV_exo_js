(() => {
    const mainContainer = document.querySelector('main');
    const btnReload = document.getElementById("reload");
    const btnNext = document.getElementById("next");
    const btnPrev = document.getElementById("previous");
    let page, url;

    class Card {
        static downloadURLPattern;
        static imgWidth;
        static imgHeight;
        static sampleElement;

        constructor(obj) {
            this.id = obj.id
            this.author = obj.author;
            this.url = obj.url;
            this.element = this.create();
        }

        create() {
            let card = this.constructor.sampleElement.cloneNode(true);
            let cardImg = card.querySelector("img.card-img");
            let cardAuthor = card.querySelector(".card-author");
            let cardLink = card.querySelector(".card-link");

            cardLink.href = this.url;
            cardAuthor.textContent = this.author;
            cardImg.src = this.constructor.downloadURLPattern.replace('$id', this.id);

            return card;
        }

        static create(obj) {
            return new this(obj).element;
        }
    }

    Card.imgWidth = 200;
    Card.imgHeight = 200;
    Card.downloadURLPattern = `https://picsum.photos/id/$id/${Card.imgWidth}/${Card.imgHeight}`;
    Card.sampleElement = document.getElementById("card-sample");
    Card.sampleElement.removeAttribute('id');

/* ----------------------------------------- */
    function getRandomInt(max, min=0) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function setURL(page) { 
        // url = "http.error";
        // url = "http://network.error";
        // url = ""; // parse error
        url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
        console.log(`currURL = ${url}`);
    }

    function setRandomPageURL() {
        page = getRandomInt(101, 1);
        setURL(page);
    }

    function switchPage() {
        window.dispatchEvent(new Event('load'));
    }

    function main() {
        fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`HTTPError ${response.status}`);
        })
        .then(data => mainContainer.replaceChildren(...data.map(e => Card.create(e))))
        .catch(e => alert(`Impossible d'afficher la page.\nErreur: ${e.message}`));
    }

/* ----------------------------------------- */
    setRandomPageURL();
    window.addEventListener('load', main);

    btnReload.addEventListener('click', function () {
        setRandomPageURL();
        switchPage();
    });

    btnNext.addEventListener('click', function () {
        page = Math.max(1, (page + 1) % 101);
        setURL(page);
        switchPage();
    })

    btnPrev.addEventListener('click', function () {
        page = page == 1 ? 100 : page - 1;
        setURL(page);
        switchPage();
    })
})();