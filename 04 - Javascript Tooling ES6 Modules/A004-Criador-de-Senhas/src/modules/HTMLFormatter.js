import PassGenerator from "./PassGenerator";

export default class HTMLFormatter {
    static instance = null;
    static paragraph = null;
    parent = document.querySelector('section');

    constructor() {
        if (!HTMLFormatter.instance) {
            HTMLFormatter.instance = this;
        }
        return HTMLFormatter.instance;
    }

    static appendPassword(){
        const instance = new HTMLFormatter();
        if (!instance.paragraph){
            instance.createParagraph();
        } else {
            instance.addContentParagraph();
        }
        
    }

    createParagraph(){
        this.paragraph = document.createElement('p');
        this.addContentParagraph();
    }

    addContentParagraph(){
        this.paragraph.innerHTML = PassGenerator.generatePassword();
        this.appendParagraph();
    }

    appendParagraph(){
        this.parent.appendChild(this.paragraph);
    }
}