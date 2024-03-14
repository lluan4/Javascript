console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}


const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj2.exec()

class Objeto{

    nome
    idade

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

        let frase = "Legal";

        this.redefinirNome = (novoNome) => this.nome = novoNome

       
    }

}

class Pessoa extends Objeto{
    cor;

    constructor(nome, cor){
        super(nome);
        this.cor = cor

    this.exibirInformacoes = () => console.log(`Meu nome é ${nome} tenho ${idade} anos e sou ${frase}`)
    }
}

const obj4 = new Objeto("Luan", 29)

obj4.saudacao()