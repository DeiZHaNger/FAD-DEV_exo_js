const showButton = document.getElementById("show-hide");
const spoiler = document.getElementById("spoiler");

showButton.addEventListener('click', function () {
    this.textContent = spoiler.classList.toggle("hidden") ? "Show" : "Hide";
});