// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // B vai assumir o valor undefined
imprimirSoma(2, 10, 4, 5, 6, 7) // Vai assumir os 2 primeiros valores
imprimirSoma() // A e B vai assumir o valor undefined


// Função com retorno

function soma(a = 0, b) {
    return a + b 
}

console.log(soma(2, 3))
console.log(soma("", 2))