// const nome = 'Luan';
// const sobrenome = 'Lima';
// const idade = 30;

// function soma(x, y) {
//     return x + y;
// }

// export { nome, sobrenome, idade, soma };

/* ****************************************************** */

// Model 2
// export { nome as nome2, sobrenome, idade, soma };

/* ****************************************************** */

// // Model 3

// export const nome = 'Luan';
// export const sobrenome = 'Lima';
// export const idade = 30;

// export function soma(x, y) {
//     return x + y;
// }

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome
//     }
// }

/* ****************************************************** */

// Model 4

// export const nome = 'Luan';
// export const sobrenome = 'Lima';
// export const idade = 30;
// const cpf = 'vlalva';

// export function soma(x, y) {
//     return x + y;
// }

/* ****************************************************** */

// Model 6

// export const nome = 'Luan';
// export const sobrenome = 'Lima';
// export const idade = 30;
// const cpf = 'vlalva';

// export default function soma(x, y) {
//     return x + y;
// }

/* ****************************************************** */

// Model 6

const nome = 'Luan';
const sobrenome = 'Lima';
const idade = 30;
const cpf = 'vlalva';

export function soma(x, y) {
    return x + y;
}

export { nome as default, sobrenome, idade, soma }
/* ****************************************************** */