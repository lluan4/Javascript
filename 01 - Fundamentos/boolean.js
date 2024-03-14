let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(`1 = !!(variável) retorna ${!!(isAtivo)}`)

isAtivo = 0
console.log(`0 = !!(variável) retorna ${!!(isAtivo)}`)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para Finalizar...')
console.log(!!(''|| null || 0 || ' '))

let nome = ''
console.log(nome || "Desconhecido")

nome = 'Luan'
console.log(nome || "Desconhecido")