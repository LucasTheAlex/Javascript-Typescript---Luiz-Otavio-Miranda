/**
 *  ARITMETICOS 
 * + Adição/Concatenação 
 * - / * 
 * ** potenciação
 * % modulo (resto da divisão)
 * ++/+= Incremento
 * --/-= Decremento
 * NaN - Not a Number
 * parseInt
 * parseFloat
 * Number
 */

let num1 = 2;
let num2 = 10;
const num3 = '5';

console.log(num1 + num2)
console.log(num1 + num3)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 ** num2)
console.log(num1 % num2)

num1++;
++num1;
console.log(num1)
num2--;
--num2;
console.log(num2)

let a = 1;
a += num1
console.log(a)

let b = 1;
b -= num2
console.log(b)

let c = 1;
c *= num2
console.log(c)

console.log(num1 + parseInt(num3))