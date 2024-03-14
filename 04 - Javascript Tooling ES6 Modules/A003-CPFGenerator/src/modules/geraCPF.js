export default class GeraCPF {
    cpf = [];
    sumFirstDigit = 0;
    sumSecondDigit= 0;
    restDivisionFirstDigit = 0;
    restDivisionSecondDigit = 0;

    constructor() {
        this.cpf = [];
        this.generateCPF();
    }

    getRandomInt(max = 9) {
        return Math.floor(Math.random() * max);
    }

    generateCPF () {

        for (let index = 0; index < 9; index++) {
            this.cpf.push(this.getRandomInt())
        }

        if (this.isCPFSequential() === true){
            this.cpf = [];
            this.generateCPF();
            return;
        }

        if (this.isCPFHaveDuplicate() === true){
            this.cpf = [];
            this.generateCPF();
            return;
        }

        this.firstDigitCalculate();
        this.secondDigitCalculate();
        this.cpf =  this.cpf.join("");
    }


    isCPFSequential() {
        for (let i = 0; i < this.cpf.length; i++) {
            if (parseInt(this.cpf[i + 1]) == parseInt(this.cpf[i] + 1)){
               return true
            }

            if (parseInt(this.cpf[i + 1]) == parseInt(this.cpf[i] - 1)){
                return true
            }
        }
        return false;
    }

    isCPFHaveDuplicate() {
        for (let i = 0; i < this.cpf.length; i++) {
            if (parseInt(this.cpf[i + 1]) == parseInt(this.cpf[i])){
               return true
            }
        }
        return false;
    }

    firstDigitCalculate() {
        this.cpf.forEach((value, index) => {
            this.sumFirstDigit += value * (10 - index);
        })
        
        this.restDivisionFirstDigit = this.sumFirstDigit % 11;
        if (this.restDivisionFirstDigit === 0 || this.restDivisionFirstDigit === 1){
            this.cpf.push(0);
        } else {
            this.cpf.push(11 - this.restDivisionFirstDigit);
        }
    }

    secondDigitCalculate() {
        this.cpf.forEach((value, index) => {
            (index !== 0)? this.sumSecondDigit += value * (11 - index):null;
        })
        
        this.restDivisionSecondDigit = this.sumSecondDigit % 11;
        if (this.restDivisionSecondDigit === 0 || this.restDivisionSecondDigit === 1){
            this.cpf.push(0);
        } else {
            this.cpf.push(11 - this.restDivisionSecondDigit);
        }
    }

}