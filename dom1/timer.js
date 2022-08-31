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
const linkToggleColorChange = document.createElement("a");
linkToggleColorChange.href = "#";
linkToggleColorChange.textContent = "Toggle Color Change";
document.querySelector("header").append(linkToggleColorChange);

const changeColor = function () {
    buttonColorChange.style.backgroundColor = getRandomColor();
};

let runningColor = setInterval(changeColor, 2000);
linkToggleColorChange.addEventListener('click', function () {
    if (runningColor) {
        clearInterval(runningColor);
        runningColor = null;
    } else {
        runningColor = setInterval(changeColor, 2000);
    }
});
