function timeOfDay(hour) {
    let result = "C'est ";
    let labelTOD = hour < 12 ? "le matin" : hour < 18 ? "l'après-midi" : "le soir";
    return result + labelTOD;
}

function timeOfDayAlt(hour) {
    let result = "C'est ";
    switch ((hour > 12) + (hour > 18)) {
        case 0:
            result += "le matin";
            break;
        case 1:
            result += "l'après-midi";
            break;
        default:
            result += "le soir";
    }
    return result;
}

let hour = prompt("heure ?")%24;
alert(timeOfDay(hour) + "/" + timeOfDayAlt(hour));

let currHour = new Date().getHours();
alert(timeOfDay(currHour) + "/" + timeOfDayAlt(currHour));