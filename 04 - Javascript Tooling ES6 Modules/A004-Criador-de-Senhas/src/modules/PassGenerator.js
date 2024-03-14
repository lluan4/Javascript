import FormReader from './FormReader';

export default class PassGenerator{
    instance = null;
    password = [];
    possibilities = [];

    passLenght = null;
    addNumber = null;
    addUpperCase = null;
    addLowerCase = null;
    addSymbol = null;

    characters = {
        0:'abcdefghijklmnopqrstuvwxyzç',
        1:'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ',
        2:'1234567890',
        3:'!@#$%¨&*()+-='
    };
    
    constructor() {
        if (!PassGenerator.instance) {
            PassGenerator.instance = this;
        }
        
        return PassGenerator.instance;
    }

    static generatePassword () {
        const instance = new PassGenerator();

        instance.redefine();
        instance.getPossibilities();

        for (let index = 0; index < instance.passLenght; index++) {

            let possibility = instance.choosePossibility(instance.possibilities.length);
            instance.getChar(instance.possibilities[possibility]);
            
        }
        return  instance.password.join('');
    }

    redefine(){
        this.password = [];
        this.possibilities = [];
        this.passLenght = FormReader.readerInputLengthPass()
        this.addNumber = FormReader.readCheckBoxNumber();
        this.addUpperCase = FormReader.readCheckBoxUpperCase();
        this.addLowerCase = FormReader.readCheckBoxLowerCase();
        this.addSymbol = FormReader.readCheckBoxSymbol();
    }

    choosePossibility(max){
        return Math.floor(Math.random() * max);
    }

    getChar(possibility){
        let index = this.choosePossibility(this.characters[possibility].length);
        this.password.push(this.characters[possibility][index]);
    }

    getPossibilities(){

        if(this.addNumber === true){
            this.possibilities.push(2);
        }

        if(this.addUpperCase === true){
            this.possibilities.push(1);
        }

        if(this.addLowerCase === true){
            this.possibilities.push(0);
        }

        if(this.addSymbol === true){
            this.possibilities.push(3);
        }

    }
}