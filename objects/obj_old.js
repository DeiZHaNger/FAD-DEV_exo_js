/**
 * 
 * @param {String} nom 
 * @param {String} prenom 
 * @param {Number} age 
 * @param {Ville} ville 
 */
function Stagiaire(nom, prenom, age, ville) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.ville = ville;

    this.sePresenter = function() {
        console.log(JSON.stringify(this));
    }
}

/**
 * 
 * @param {String} nom 
 * @param {Number} habitants 
 * @param {String} pays 
 */
function Ville(nom, habitants, pays) {
    this.nom = nom;
    this.habitants = habitants;
    this.pays = pays;
}

let ville = new Ville("Seattle", 3500000, "Etats-Unis");
new Stagiaire("Nom", "Prenom", 77, ville).sePresenter();