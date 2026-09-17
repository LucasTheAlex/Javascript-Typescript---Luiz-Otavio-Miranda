// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constantes com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar constantes com const
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.
const nomeCliente = 'Luiz';

const nome = 'Enrique'

console.log(nomeCliente);

console.log(nome, 'nasceu em 1984')
console.log('Em 2000', nome, 'conheceu Maria')
console.log(nome, 'casou-se com Maria e 2012')
console.log('Maria teve 1 filho com', nome, 'em 2015')
console.log("O filho de", nome, 'se chama Eduardo')

// String = Text | Number = Número
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
console.log(resultaDuplicado);
console.log(typeof resultaDuplicado);
console.log(primeiroNumero + 5)
console.log(resultado)