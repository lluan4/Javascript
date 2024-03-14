
export default class FormReader{
   
    static readerInputLengthPass(){
        const input = (document.getElementById("qnt-char"))? document.getElementById("qnt-char"): null;

        if(input){
            return parseInt(input.value);
        }
    }

    static readCheckBoxNumber(){
        const input = (document.getElementById("add-numbers"))? document.getElementById("add-numbers"): null;

        if(input){
            return input.checked;
        }
    }

    static readCheckBoxUpperCase(){
        const input = (document.getElementById("add-uppercase"))? document.getElementById("add-uppercase"): null;

        if(input){
            return input.checked;
        }
    }

    static readCheckBoxLowerCase(){
        const input = (document.getElementById("add-lowercase"))? document.getElementById("add-lowercase"): null;

        if(input){
            return input.checked;
        }
    }

    static readCheckBoxSymbol(){
        const input = (document.getElementById("add-symbol"))? document.getElementById("add-symbol"): null;

        if(input){
            return input.checked;
        }
    }
}