const valores = [2.2, 3.3, 4.4, 5.5]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'Teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)