function rand (min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject(new Error("ERRO: "));
                return;
            } 
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    });
}

/* Métodos úteis para Promises */

const promises = [
    /* 'Primeiro valor', */
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    /* esperaAi(1000, 1000), */
    /* 'Outro Valor' */
];

function baixaPagina() {
    const emCache = true;

    if(emCache){
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', rand(1,5));
    }
}

/* Resolve todas as promises, mas retorna a primeira que foi resolvida*/
/* Promise.race(promises)
    .then((valor)=>{
        console.log(valor);
    })
    .catch((e)=>{
        console.log(e);
    }) */

/* Resolve todas as promises */
/* Promise.all(promises)
    .then((valor)=>{
        console.log(valor);
    })
    .catch((e)=>{
        console.log(e);
    }) */

baixaPagina()
    .then((dadosPagina) => {
        console.log(dadosPagina);
    })
    .catch((e)=>console.log('ERRO', e));