const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
let IMC = peso / (altura * altura);
let anoNascimento = new Date().getFullYear() - idade;

console.log(nome, sobrenome, "tem", idade, "anos")
console.log("pesa" + ' ' + peso + ' ' + "kg, tem" + ' ' + altura + ' ' + "de altura")
console.log(`e seu IMC é de ${IMC}`)
console.log(nome, sobrenome, "nasceu em", anoNascimento)
