import { Card } from './Card.js';
import { Note } from './Note.js';

export class NoteCard extends Card{

    static requiredTags = ["label", "content", "timestamp"];

    static init() {
        super.init(...this.requiredTags);
    }

    /**
     * 
     * @param {Note} obj 
     */
    static createNoteCardElement(obj) {
        let card = super.createCardElement(obj);
        card.label.textContent = card.label.cardSrc;
        card.content.textContent = card.content.cardSrc;
        card.timestamp.textContent = card.timestamp.cardSrc;
        card.data = obj;
        return card;
    }
}