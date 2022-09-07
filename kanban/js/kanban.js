import { NoteCard } from './classes/NoteCard.js';
import { Note } from './classes/Note.js';


/* ---------- test sample ---------- */
// localStorage.clear();
// for (let i = 0; i < 10; i++) {
//     let test = new Note(`Note Test${i}`, `Content Test${i}`, Note.states[i%3], i%5 == 0, Date.now() - 3600 * (10 - i));
//     console.log(test.storeLocal());
//     console.log(`STORED - ${test.key} : ${test.toJson()}`);
// }
/* -------------- */


/* ---------- Init ---------- */
NoteCard.init();
const notes = Note.retrieveLocalAll();
const cards = notes.filter(e => !e.trash).map(e => NoteCard.createNoteCardElement(e));
const noteSections = {};
Note.states.forEach(e => noteSections[e] = document.getElementById(e));

cards.forEach(e => noteSections[e.data.state].append(e.self));


/* ---------- Events ---------- */
const formAdd = document.getElementById("create");
console.log(formAdd);
formAdd.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let note = new Note(formAdd.label.value, formAdd.content.value);
    note.storeLocal();
    let card = NoteCard.createNoteCardElement(note);
    cards.push(card);
    noteSections[note.state].append(card.self);
    setDraggable(card.self);
    console.log(note);
});

function setDraggable(e) {
    e.setAttribute('draggable', "true");
    e.addEventListener('dragstart', function (ev) {
        ev.dataTransfer.effectAllowed = "move";
        console.log(cards.find(e => e.self == ev.target).data.key);
        ev.dataTransfer.setData("text/plain", cards.find(e => e.self == ev.target).data.key);
        console.log(`dragging ${ev.target.className}`);
    })
}

document.querySelectorAll(".note-card-container").forEach(function(e) {
    setDraggable(e);
});

Object.values(noteSections).forEach(function (e) {
    e.addEventListener('dragover', function (ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    });

    e.addEventListener('drop', function (ev) {
        ev.preventDefault();
        let card = cards.find(e => e.data.key == ev.dataTransfer.getData("text/plain"));
        if (card.data.changeStateLocal(ev.target.id)) {
            ev.target.append(card.self);
        };
    });
});

const trashcan = document.getElementById("trashcan");
trashcan.addEventListener('dragover', function (ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
})

trashcan.addEventListener('drop', function (ev) {
    ev.preventDefault();
    let card = cards.find(e => e.data.key == ev.dataTransfer.getData("text/plain"));
    card.self.parentNode.removeChild(card.self);
    card.data.toTrashLocal();
})