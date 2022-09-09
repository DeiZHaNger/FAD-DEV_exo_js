import { APIWeather } from "./APIWeather.js";

const result = document.getElementById("result");
APIWeather.init(
    "https://api.openweathermap.org/data/2.5/weather",
    "b80967f0a6bd10d23e44848547b26550",
    "metric",
    "fr",
    result
);

let timer;

const btnLocation = document.getElementById("select-location");
btnLocation.addEventListener('click', function (ev) { 
    if (timer) {
        clearInterval(timer);
    }
    let weather = new APIWeather(prompt("Ville ?"));
    timer = setInterval(() => weather.updateWeather(), 30000);
});