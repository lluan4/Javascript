function rand (min=0,max=3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject(new Error("CAI NO ERRO"));
                return;
            } 
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    });
}

/* esperaAi('FASE 1', rand(0, 3))
    .then(valor => {
        console.log(valor);
        return esperaAi('FASE 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('FASE 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase:', fase);
    })
    .catch(e => console.log(e)); */


async function executa() {
    try {
        const fase1 = esperaAi('FASE 1', 1000);
        console.log(fase1);

        setTimeout(function () {
            console.log(fase1);
        }, 1100);
    
        const fase2 = await esperaAi('FASE 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi(3, rand());
        console.log(fase3);
    
        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();

/* Status do Promise */

// Pending -> Pendente
// Fulfilled -> Resolvida
// Reject -> Rejeitada