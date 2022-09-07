export class Card {
    static prefix;
    static sampleID;
    static sampleElement;
    static requiredCSSClasses;
    
    constructor(obj) {
        Object.assign(this, obj);
    }

    /**
     * 
     * @param {...String} [args]
     */
    static init(args) {
        this.prefix = `${this.name.split(/(?=[A-Z0-9])/).join('-').toLowerCase()}`;
        this.sampleID = this.format('sample');
        this.sampleElement = document.getElementById(this.sampleID);
        if (!this.sampleElement) {
            throw new Error(`${this.name} init failed. HTML element with id="${this.sampleID}" is missing`);
        }
        this.sampleElement.removeAttribute('id');
        this.sampleElement.parentNode.removeChild(this.sampleElement);

        this.requiredCSSClasses = Array.from(arguments).map((e) => {
            let css = this.format(e);
            if (!this.sampleElement.querySelector(`.${css}`)) {
                throw new Error(`${this.name} init failed. HTML element with class="${css}" is missing`);
            }
            return {tag: e, cssClass: `.${css}`};
        });
    }

    static format(tag) {
        return `${this.prefix}-${tag}`;
    }
    
    static createCardElement(obj) {
        let card = new Object();
        card.self = this.sampleElement.cloneNode(true);
        card.self.classList.add(this.format("container"));
        this.requiredCSSClasses.forEach(e => {
            let item = card.self.querySelector(e.cssClass);
            item.cardSrc = obj[e.tag];
            card[e.tag] = item;
        });
        
        return card;
    }
}