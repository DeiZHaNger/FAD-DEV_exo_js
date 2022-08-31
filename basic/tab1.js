let array = [
    ["titi", "tata", "toto"],
    ["jiji", "jaja", "jojo"],
  ];

array.splice(1, 0, ["jojo","tutu","fafa"]);
console.table(array);

array.push("solo");
console.table(array);

array.push(["juju","fofo", "tete"]);
console.table(array);

let arrOfHuman = ["john", "james", "bob", "leonard"];
let arrOfHumanBk = arrOfHuman.slice();
console.table(arrOfHuman);

arrOfHuman = ["peach", "apple", "banana", "lemon"];
console.table(arrOfHuman);

let truc = "Machin";
arrOfHuman.splice(0, 4, "Anubis", "Bastet", "Isis", truc);
console.table(arrOfHuman);


console.log(`index de "james" : ${arrOfHumanBk.indexOf("james")}`);
arrOfHumanBk.push(truc.toLocaleLowerCase());
for (let human of arrOfHumanBk) {
    console.log(human);
}