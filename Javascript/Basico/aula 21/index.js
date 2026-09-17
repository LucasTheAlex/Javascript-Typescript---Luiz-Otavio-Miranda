function saudacao(nome = "Pessoa"){
    return `Olá ${nome}`;
}

// const variavel = saudacao("Lucas");
const variavel = saudacao();
console.log(variavel);

// const raiz = function (n) {
//     return Math.sqrt(n);
// };

// const raiz = (n) => {
//     return Math.sqrt(n);
// };

const raiz = n => Math.sqrt(n);

console.log(raiz(9));