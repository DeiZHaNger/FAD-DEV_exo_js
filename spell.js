const spells = [{label: "Boule de feu", dmg: 40}, {label: "Trait de glace", dmg: 35}, {label: "Chaîne d'éclairs", dmg: 25}];

let choice = parseInt(prompt(`Sort à utiliser :\n0 (par défaut) = ${spells[0].label}\n1 = ${spells[1].label}\n2 = ${spells[2].label}`));
let spell;
try {
    spell = spells[choice];
    alert(`Vous utilisez le sort ${spell.label}`);
} catch {
    spell = spells[0];
    alert(`Vous n'avez pas encore appris ce sort!\nVous utilisez le sort ${spell.label} par défaut`);
}

alert(`Vous infligez ${spell.dmg} pts de dégats`);

