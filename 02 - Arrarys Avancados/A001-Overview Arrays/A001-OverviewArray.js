//                  0        1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];

// slice cria um array de acordo com o index -1.
const novo2 = nomes.slice(0, 3);
const novo3 = nomes.slice(0, -1);

const nomeCompleto = 'Luan Lima';
const nomes1 = nomeCompleto.split(' ');
const nomes2 = nomes1.join(' ');

// Remove Elementos
novo.pop();

// Adiciona elementos ao final da pilha
novo.push('Café');

// Adiciona elementos ao cameço da pilha
novo.unshift('Faísca');


console.log(nomes2);