function getRandomInt(max, min=0) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function main(url) {
    fetch(url)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
    })
    .then(data => display(data))
    .catch(e => alert(`Impossible d'afficher la page.\nCode erreur ${e.message}`));
}

function display(data) {
    // console.table(data);
    data.forEach(function (e) {
        let itemContainer = document.createElement('div');
        let infoContainer = document.createElement('div');
        let authorTag = document.createElement('h3');
        let visitLink = document.createElement('a');
        let picTag = document.createElement('img');

        visitLink.href = e.url;
        visitLink.textContent = "Visit";
        authorTag.textContent = e.author;
        picTag.src = `https://picsum.photos/id/${e.id}/200/200`;
        infoContainer.append(authorTag, visitLink);
        itemContainer.append(infoContainer, picTag);
        mainContainer.append(itemContainer);

        infoContainer.classList.add("info-container");
        itemContainer.classList.add("item-container");
    });
}

const mainContainer = document.querySelector('main');
const btnReload = document.getElementById("reload");
const btnNext = document.getElementById("next");
let page, url;

function setURL(page) {
    url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
    console.log(`currURL = ${url}`);
}

function setRandomPageURL() {
    page = getRandomInt(51, 1);
    setURL(page);
}

setRandomPageURL();
window.addEventListener('load', () => main(url));

btnReload.addEventListener('click', function () {
    mainContainer.replaceChildren();
    setRandomPageURL();
    window.dispatchEvent(new Event('load'));
});

btnNext.addEventListener('click', function () {
    mainContainer.replaceChildren();
    page = Math.max(1, (page + 1) % 51);
    setURL(page);
    window.dispatchEvent(new Event('load'));
})