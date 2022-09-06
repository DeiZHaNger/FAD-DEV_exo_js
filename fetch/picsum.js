function getRandomInt(max, min=0) {
    return Math.floor(Math.random() * (max - min)) + min;
}

fetch(`https://picsum.photos/v2/list?page=${getRandomInt(51)}&limit=10`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.table(data);
    const mainContainer = document.querySelector('main');
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
});