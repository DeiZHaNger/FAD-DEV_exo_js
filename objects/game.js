class Fighter {
    /**
     * 
     * @param {String} pseudo 
     * @param {String} type 
     * @param {Number} health 
     * @param {Number} damage 
     */
    constructor(pseudo, type, health, damage) {
        this.pseudo = pseudo;
        this.type = type;
        this.health = health;
        this.damage = damage;
        this.level = 1
    }

    levelUp() {
        this.level++;
        console.log(`${this.pseudo} passe au niveau ${this.level}!`);
    }

    checkHealth() {
        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.pseudo} a perdu!`);
        }
    }

    get info() {
        return `${this.pseudo}, ${this.type} de niveau ${this.level}, a ${this.damage} points d'attaque et ${this.health} points de vie.`;
    }

    /**
     * 
     * @param {Fighter} target 
     */
    attack(target) {
        target.health -= this.damage;
        this.levelUp();
        target.checkHealth();
    }

    /**
     * 
     * @param {Fighter} target 
     */
    useSpecialSkill(target) {
        target.health -= this.damage * 5;
        this.levelUp();
        target.checkHealth();
    }
}

class Magician extends Fighter {
    /**
     * 
     * @param {String} pseudo 
     */
    constructor(pseudo) {
        super(pseudo, "magicien", 170, 90);
    }

    /**
     * 
     * @param {Fighter} target 
     */
    attack(target) {
        console.log(`${this.pseudo} lance un sort basique sur ${target.pseudo} et inflige ${this.damage} points de dégâts.`);
        super.attack(target);
    }

    /**
     * 
     * @param {Fighter} target 
     */
    useSpecialSkill(target) {
        console.log(`${this.pseudo} lance "Puissance des Arcanes" sur ${target.pseudo} et inflige ${this.damage * 5} points de dégâts.`);
        super.useSpecialSkill(target);
    }
}

class Warrior extends Fighter {
    /**
     * 
     * @param {String} pseudo 
     */
    constructor(pseudo) {
        super(pseudo, "guerrier", 350, 50);
    }
    
    /**
     * 
     * @param {Fighter} target 
     */
    attack(target) {
        console.log(`${this.pseudo} attaque ${target.pseudo} et inflige ${this.damage} points de dégâts.`);
        super.attack(target);
    }

    /**
     * 
     * @param {Fighter} target 
     */
    useSpecialSkill(target) {
        console.log(`${this.pseudo} abat ses "Haches de guerre" sur ${target.pseudo} et inflige ${this.damage * 5} points de dégâts.`);
        super.useSpecialSkill(target);
    }
}

const aragorn = new Warrior("Aragorn");
const saroumane = new Magician("Saroumane");

console.log(aragorn.info);
console.log(saroumane.info);
saroumane.attack(aragorn);
console.log(aragorn.info);
aragorn.attack(saroumane);
console.log(saroumane.info);
saroumane.useSpecialSkill(aragorn);