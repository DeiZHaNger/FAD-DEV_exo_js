let firstname = prompt("Prénom ?").toLocaleLowerCase();
let age = parseInt(prompt("Age?"));
let gender;

switch (firstname) {
    case "hubert": case "damien": case "johnny":
        gender = "masculin";
        break;
    case "emma": case "lucie": case "jane":
        gender = "féminin";
        break;
    default:
        gender = "indéterminé";
}

console.log(`Vous êtes de genre ${gender}`);
let suffix = gender == "féminin" ? "e": "";
console.log("Vous êtes " + (age < 18 ? "mineur" : "majeur") + suffix);