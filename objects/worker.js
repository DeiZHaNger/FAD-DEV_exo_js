/*
    Ce programme fonctionne uniquement en console
    N'utilisez pas d'alert prompt ou confirm 
    Vous pourrez par la suite faire une version qui fonctionne sur navigateur si vous le souhaitez

    Crée une classe travailleur,
    Cette classe à pour propriété: 
    nom, corp de métier, savoirFaire, compétence
    faite une méthode au boulot qui retourne un console.log nom ce met au boulot
*/

class Worker {
    constructor(fullName, profession, expertise, skillPoints) {
        this.fullName = fullName;
        this.profession = profession;
        this.expertise = expertise;
        this.skillPoints = skillPoints;
    }

    setToWork() {
        console.log(`${this.fullName} se met au boulot!`);
    }
}

/*
    Faite une classe Informaticien qui hérite de Travailleur
    il hérite des propriété précedente, avec langage en plus
    Modifié la méthode au boulot dans informaticien,
    si langage est égale à javascript 
        nom ce met à coder du langage frénétiquement
        lance la méthode jet de compétence
    sinon 
        c'est quoi ce langage bizarre
        diminuer compétence de 3 point

    faite une méthode jet de compétence
        qui tire un nombre aléatoire entre 0 et 100

    faite une méthode acharnement 
        qui affiche nom code toutes la nuit comme un sauvage !
        augmenter compétence de 5 point
    faite une méthode affiche competence
        affiche votre competence actuel est à competence

    Faite maintenant un petit scénario
        instancié un nouvel informaticien
    
    faite une méthode qui 
        lance au boulot
        faite ensuite un jetDeCompetence
    Si user.competence est supérieur à jet de compétence
        affiche au dodo j'ai finis ma journée
    sinon si user.competence est inférieur à jet de compétence
        execute user.acharnement
    Affiche afficheCompetence

    Executé la méthode 2, 3 fois d'affiler pour que le résultat soit différent
    Vous verrez votre personnage évoluer au fil de l'execution de la fonction */

class ITEngineer extends Worker {
    /**
     * 
     * @param {String} fullName 
     * @param {String} profession 
     * @param {String} expertise 
     * @param {Number} skillPoints 
     * @param {String} langage 
     */
    constructor(fullName, profession, expertise, skillPoints, langage) {
        super(fullName, profession, expertise, skillPoints);
        this.langage = langage;
    }

    setToWork() {
        if (this.langage.toLowerCase() == "javascript") {
            console.log(`${this.fullName} se met à coder frénétiquement!`)
            this.skillRoll();
        } else {
            console.log(`Quel est ce langage bizarre qu'essaie d'utiliser ${this.fullName}`);
            this.skillPoints -= 3;
        }
    }

    skillRoll() {
        let result = Math.floor(Math.random() * 101);
        console.log(`Jet de compétence = ${result}`);
        return result;
    }

    persist() {
        console.log(`${this.fullName} code sauvagement toute la nuit!`);
        this.skillPoints += 5;
    }

    showSkillPoints() {
        console.log(`${this.fullName} a ${this.skillPoints} points de compétence.`);
    }

    layOnCouch() {
        console.log(`${this.fullName} reste inerte sur le canapé!`);
        this.skillPoints -= 5;
        this.showSkillPoints();
    }
}

const engineer = new ITEngineer("Brenan Deich", "Coder", "Coding", 66, "JavaScript");

function dailyRun() {
    console.log("Nouvelle Journée");
    engineer.setToWork();
    if (engineer.skillPoints >= engineer.skillRoll()) {
        console.log(`${engineer.fullName} a fini sa journée!`);
    } else {
        engineer.persist();
    }

    engineer.showSkillPoints();
}

dailyRun();
dailyRun();
dailyRun();

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Set to [W]ork or (default) Lay on [C]ouch ? ", function (answer) {
    if (answer.toLowerCase().startsWith("w")) {
        engineer.setToWork();
    } else {
        engineer.layOnCouch();
    }
    rl.close();
});

/*
    Bonus 
    Il faudra executer le code en faisant node program.js sinon cela ne fonctionne pas
    Ajouter une méthode rienFoutre sur le canapé
        competence perd 5 point
        affiche Competence
    Trouver une solution pour demander une saisis utilisateur en console.
    et proposer lui un choix entre auBoulot et rien foutre 

    BONUS DE LA MUERTE 

    refait ce tp en graphique avec le DOM
*/