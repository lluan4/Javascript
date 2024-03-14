
/*
* Objeto É um grupo de pares e valor
*/
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Deconto Legal'] = 0.40 //Evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

'{"nome": "Camisa Polo","preco": 79.9}'
console.log(prod2)


console.log(typeof Object)