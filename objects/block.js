class Block {
    /**
     * 
     * @param {String} tag 
     * @param {String|Block} content 
     */
    constructor(tag, content) {
        this.tag = tag;
        this.content = content;
        this.body = document.body;
        this.element = document.createElement(this.tag);
    }

    fillElement() {
        this.element.innerHTML = this.content;
    }

    append() {
        this.body.appendChild(this.element);
    }

    addNewElement() {
        this.fillElement();
        this.append();
    }
}

class Button extends Block {
    /**
     * 
     * @param {String} tag 
     * @param {String|Block} content
     * @param {String} event 
     */
    constructor(tag, content, event) {
        super(tag, content);
        this.event = event;
    }

    addNewEvent(func) {
        this.element.addEventListener(this.event, func);
    }
}

const aButton = new Button('button', 'Add Block', 'click');
aButton.addNewElement();
aButton.addNewEvent(() => new Block('p', 'New paragraph').addNewElement());