// const mod1 = require('./modulos');

// console.log(mod1);
// console.log(mod1.falaNome());

// const nome = require('./modulos').nome;

// console.log(nome);

// const { nome, sobrenome, falaNome } = require('./modulos');

// console.log(nome);
// console.log(sobrenome);
// console.log(falaNome());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./modulos');


axios('https://servicodados.ibge.gov.br/api/v3/calendario')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

const p1 = new Pessoa('Luan');
console.log(p1);