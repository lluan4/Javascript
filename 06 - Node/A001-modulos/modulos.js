// const nome = 'Luan';
// const sobrenome = 'Lima';

// const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "Teste";
// console.log(exports);

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

// exports.Pessoa = Pessoa;

const nome = 'Luan';
const sobrenome = 'Lima';

module.exports = {
    nome, sobrenome, Pessoa
}