const escola = "Senae";

console.log(escola.charAt(4)); //O índice começa no 0
console.log(escola.charAt(6)); // Se caso não tiver nunhum caracter, o interpretador mostrará o valor "vazio"
console.log(escola.charCodeAt(3)); //Valor na tabela ASCII
console.log(escola.indexOf("e")); //Monstra o Index da primeira ocorrencia do caracter

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // Vá para o index 0 e me de 3 caracteres

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(/\e/, "i")); // Substituiu a primeira ocorrência da expressão regular
console.log(escola.replace(/\e/g, "i")); // Substituiu todas as ocorrências da expressão regular (regexp)
/*
 *Uma expressão regular é uma forma comum e
 *concisa de representar algum tipo de padrão em texto
 *https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions
*/

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) //Pode usar o Regexp