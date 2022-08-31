const linkHeader = document.querySelector("header a");
const buttonHeader = document.querySelector("header button");

linkHeader.addEventListener('click', function() {this.remove()});
buttonHeader.addEventListener('mouseover', () => {document.body.setAttribute('style', 'background-color: aqua')});
buttonHeader.addEventListener('mouseout', () => {document.body.style.backgroundColor = "unset"});

const mainSection = document.createElement("main");
const h1 = document.createElement("h1");
const textSection = document.createTextNode("Blabla blablabla blaaaaaaablabla blablaaaaaa blaaaaaaa bla blabla blaaablaaaaa");

h1.textContent = "Main Title";
mainSection.append(h1);
mainSection.append(textSection);
document.body.insertBefore(mainSection, document.body.lastElementChild);

// h1.addEventListener('click', () => {alert("Click sur h1")});
// mainSection.addEventListener('click', () => {alert("Click sur main")});

mainSection.addEventListener('click', function (e) {
    alert(`Clic sur ${e.target == h1 ? h1.nodeName : mainSection.nodeName}`);
});