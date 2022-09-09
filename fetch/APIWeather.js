export class APIWeather {
    static apiURL;
    static appid;
    static units;
    static lang;
    static field;

    htmlField;
    requestURL;
    city;
    temp;

    constructor(city, field=null) {
        this.city = city;
        this.htmlField = field ? field : this.constructor.field;
        this.requestURL = this.getURL();
        this.updateWeather();
    }

    getURL() {
        return this.constructor.getURLFormat() + this.city;
    }

    async requestWeather() {
        const response = await fetch(this.requestURL);
        if (!response.ok) {
            throw new Error(`HTTPError ${response.status}`);
        }
        return response.json();
    }

    updateWeather() {
        this.requestWeather().then(data => {
            this.temp = data.main.temp;
            this.htmlField.textContent = `${this.temp}°C à ${this.city}`;
        }).catch(e => alert(`Impossible d'afficher la page.\nErreur: ${e.message}`));
    }

    /**
     * 
     * @param {String} url 
     * @param {String} key 
     * @param {String} units 
     * @param {String} lang 
     * @param {HTMLElement} field 
     */
    static init(url, key, units, lang, field=null) {
        this.apiURL = url;
        this.appid = key;
        this.units = units;
        this.lang = lang;
        this.field = field;
    }

    static getURLFormat() {
        return `${this.apiURL}?appid=${this.appid}&units=${this.units}&lang=${this.lang}&q=`;
    }
}