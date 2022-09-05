let date = new Date();

/**
 * 
 * @param {Date} date 
 * @returns 
 */
function formatDateFR(date) {
    const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}


String.prototype.capitalize = function () {
    return this.split(" ").map(e => e.charAt(0).toUpperCase() + e.substring(1)).join(" ");
}

console.log(formatDateFR(date));
console.log(date.toLocaleDateString('fr-FR', {weekday:"long", day:"numeric", month:"long", year:"numeric"}).capitalize());