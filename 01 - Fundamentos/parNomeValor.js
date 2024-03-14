const saudacao = "Opa" // contexto léxico 1= Qual lugar fisico a sua varíavel foi definido

function exec(){
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}


// Objetos são gruppos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)