const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Alexandre',
    idade: 27,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    },
    incrementaIdade(){
        ++this.idade;
    }
}

pessoa.fala();
console.log(pessoa.idade);
pessoa.incrementaIdade();
console.log(pessoa.idade);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);

// console.log(pessoa1.nome);