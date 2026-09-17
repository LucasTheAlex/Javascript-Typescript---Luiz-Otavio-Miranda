const alunos = ['Luiz', 'Maria', 'Joao'];
console.log(alunos);
console.log(alunos[0]);

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';

console.log(alunos);
console.log(alunos.length);

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';

console.log(alunos);

alunos.push('Otavio');

console.log(alunos);

alunos.unshift('Lucas');

console.log(alunos);

const removido_final = alunos.pop();

console.log(alunos);
console.log(removido_final);

const removido_start = alunos.shift();

console.log(alunos);
console.log(removido_start);

delete alunos[1];
console.log(alunos);

console.log(alunos[50]);

console.log(alunos.slice(0, 3));
console.log(typeof alunos);
