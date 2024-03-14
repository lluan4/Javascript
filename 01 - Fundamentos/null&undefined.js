const a = {name:'Teste'}
console.log(a)

const b = a
b.name = 'Opa!'

console.log(a)

/*
* a armazena um lugar na memória onde esta o objeto {name:'Teste'}
* Isso acontece pois a variável b está recebendo o endereço da memória de a 
* Portanto, b está direcionando para o mesmo lugar de memória que a variável a
* Atribuição por Referência = passar o endereço de memória da variável, não copia o valor
*/

let c = 3
let d = c
d++
console.log(d)
console.log(c)

/*
 * Quando trata de um tipo primitivo o Js faz atribuição por Valor
 * String
 * Number
 * Boolean
 * Null
 * undefined
 * Symbol (novo no ECMAScript (en-US) 6) 
*/