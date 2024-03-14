let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor. Por tanto houve a inicialização da variável e passou que ela não aponta apra nenhum endereço de memória
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)