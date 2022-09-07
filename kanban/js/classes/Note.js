export class Note {

    static states = ["todo", "done", "verified"];
    static keyLabel = this.name;

    /**
     * 
     * @param {String} label 
     * @param {String} content 
     * @param {Number} state 
     * @param {Boolean} trash 
     * @param {Number} timestamp 
     * @param {String} key 
     */
    constructor (label, content, state=null, trash=false, timestamp=null, key=null) {
        this.label = label;
        this.content = content;
        this.state = this.constructor.states.includes(state) ? state : this.constructor.states[0];
        this.trash = trash;
        this.timestamp = timestamp ? timestamp : Date.now();
        this.key = key ? key : this.genKey();
    }

    genKey() {
       return `${this.constructor.keyLabel}${this.timestamp}`; 
    }

    toJson() {
        return JSON.stringify(this);
    }

    toTrash() {
        this.trash = true;
    }

    toTrashLocal() {
        this.unstoreLocal();
        this.toTrash();
        this.storeLocal();
    }

    getState() {
        return this.constructor.states[this.state];
    }

    changeState(state) {
        if (state != this.state && this.constructor.states.includes(state)) {
            this.state = state;
            this.timestamp = Date.now();
            this.key = this.genKey();

            return true;
        }

        return false;
    }

    changeStateLocal(state) {
        this.unstoreLocal();
        let result = this.changeState(state);
        this.storeLocal();
        
        return result;
    }

    storeLocal() {
        try {
            localStorage.setItem(this.key, this.toJson());
            return true;
        } catch (e) {
            alert(e.message);
            return false;
        }
    }

    unstoreLocal() {
        localStorage.removeItem(this.key);
    }

    static fromJson(json) {
        let obj = JSON.parse(json);
        return new this(...Object.values(obj));
    }
    
    static retrieveLocal(key) {
        return this.fromJson(localStorage.getItem(key));
    }

    static retrieveLocalAll() {
        let result = [];
        for (let [_, value] of Object.entries(localStorage).filter(e => e[0].startsWith(this.keyLabel))) {
            result.push(this.fromJson(value));
        }
        return result.sort((a, b) => a.timestamp - b.timestamp);
    }
}