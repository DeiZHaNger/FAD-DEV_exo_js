const header = document.querySelector("header");
const divHeader = document.createElement("div");
const h1 = document.createElement("h1");

h1.textContent = "Main Title";
divHeader.append(h1);
header.prepend(divHeader);

document.querySelector("img").remove();
