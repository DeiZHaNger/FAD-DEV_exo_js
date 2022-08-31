const body = document.body;
const primeColor = getComputedStyle(body).getPropertyValue("--primaryColor");
const thirdColor = getComputedStyle(body).getPropertyValue("--thirdColor");
body.style.background = `linear-gradient(${thirdColor}, ${primeColor} 80px)`;