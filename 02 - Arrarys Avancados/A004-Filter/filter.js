// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

function randNumber() {
    return Math.floor(Math.random() * 100)
}

let numeros=[];
for (let index = 0; index < 10; index++) {
    numeros.push(randNumber());
}

// function callbackFilter(valor){
//     return valor > 10;
// }

// A função de Callback deve retornar true ou fale
// Retorne os números maiores que 10
// 1º - const numerosFiltrados = numeros.filter(callbackFilter);
// 2º - const numerosFiltrados = numeros.filter(function (valor){
//     return valor > 10;
// });
// 3º -const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// })

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);





// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luan', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 14 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoas5letras = pessoas.filter(obj => obj.nome.length >= 5);
const pessoas50anos = pessoas.filter(obj => obj.idade > 50);
const pessoasComFinalA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoasComFinalA);
