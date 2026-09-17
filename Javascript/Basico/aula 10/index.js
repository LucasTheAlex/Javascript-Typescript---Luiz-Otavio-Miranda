// String, number, undefined
// NaN - Not a number parseInt (inteiro), parseFloat(decimais)
const nome = 'Luiz';
const num1 = 10;
const num2 = 10.52;
// undefined = não aponta para nenhum local na memoria
let nomeAluno;
// null = não aponta para nenhum local na memoria / usado pra desconfigurar uma variavel
let sobrenomeAluno = null;
const booleano = false; // true ou false
console.log(typeof nome,typeof num1, typeof nomeAluno, typeof sobrenomeAluno, typeof booleano);

const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b)