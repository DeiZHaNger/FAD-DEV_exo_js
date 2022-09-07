import { Card } from './Card.js';
import { Note } from './Note.js';

export class NoteCard extends Card{
    /**
     * 
     * @param {Note} obj 
     */
    static createNoteCardElement(obj) {
        let card = super.createCardElement(obj);
        card.label.textContent = card.label.cardSrc;
        card.content.textContent = card.content.cardSrc;
        return card;
    }
}