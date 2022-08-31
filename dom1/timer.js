function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomColor() {
    let color = "rgb(";
    for (let i = 0; i < 3; i++) {
        color += getRandomInt(256) + ", ";
    }
    return color.substring(0, color.length - 3) + ")";
}

const buttonColorChange = document.getElementById("colorChange");

const changeColor = setInterval (function () {
    buttonColorChange.style.backgroundColor = getRandomColor();
}, 2000);

const linkStopColorChange = document.createElement("a");
linkStopColorChange.href = "#";
linkStopColorChange.textContent = "Stop Color Change";
document.querySelector("header").append(linkStopColorChange);

linkStopColorChange.addEventListener('click', () => {clearInterval(changeColor)});
