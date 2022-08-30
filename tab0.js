let movies = ["Saison 1", "Saison 2", "Saison 3", "Saison 4", "Saison 5"];
console.log(`4: ${movies[3]}\n2: ${movies[1]}`);

const tableauDeMonstre = [
    "Frankenstein",
    "Dracula",
    "Momie",
    "Pikachu"
];

const arrOfHuman = [
    "jean",
    "emeline",
    "jean-paul",
    "sarah",
    "edouard",
    "mohamed",
    "gwendoline",
    "kamella"
];

console.log("for");
for (let i = 0; i < tableauDeMonstre.length; i++) {
    console.log(tableauDeMonstre[i]);
}

console.log("\nforeach");
tableauDeMonstre.forEach(e => console.log(e));

console.log("\nfor of");
for (let human of arrOfHuman) {
    console.log(human);
}

const moviesNDirectors = {"Film1" : "Real1", "Film2" : "Real2", "Film3" : "Real1", "Film4" : "Real3", "Film5" : "Real3"};
const mndEntries = Object.entries(moviesNDirectors);
console.log(`${mndEntries[2]}\n${mndEntries[4]}`);

movies.forEach((e, i) => movies[i] = [e, `Real${e}`]);
movies.forEach(e => console.log(e));
