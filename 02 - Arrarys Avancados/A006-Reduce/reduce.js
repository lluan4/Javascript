function randNumber() {
    return Math.floor(Math.random() * 100)
}

let numeros=[];
for (let index = 0; index < 10; index++) {
    numeros.push(randNumber());
}


// Some todos os números (reduce)
// Retorne um array com os apres (filter)
// Retorne um array com o dobro dos valores (map)

// const total = numeros.reduce((acumulador, valor, indice, array)=>{
//     console.log(acumulador);
//     return acumulador;
// }, 0);

// const total = numeros.reduce((acumulador, valor, indice, array)=>{
//     acumulador += valor;
//     return acumulador
// }, 0);

const pares = numeros.reduce((acumulador, valor)=>{
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

// console.log(pares);


//Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luan', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 200 },
    { nome: 'Letícia', idade: 99 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) =>{
    if(acumulador.idade < valor.idade) return valor;
    return acumulador;
})

console.log(maisVelha.nome);