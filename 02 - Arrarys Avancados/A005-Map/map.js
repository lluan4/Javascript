function randNumber() {
    return Math.floor(Math.random() * 100)
}

let numeros=[];
for (let index = 0; index < 10; index++) {
    numeros.push(randNumber());
}


//Dobre os números

// const numerosEmDobro = numeros.map(valor => `${valor} x 2 = ${valor * 2}`)

// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luan', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 14 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => {return obj.nome});
const somenteChaveIdade = pessoas.map(obj => ({obj: obj.idade}))


const addID = pessoas.map( (obj, indice) => { 
    const newObj = {id:indice, ...obj };
    return newObj;
})

console.log(nomes);
console.log(somenteChaveIdade);
console.log(addID);
