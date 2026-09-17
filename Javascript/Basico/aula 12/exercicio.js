let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

// const auxVarA = varA;

// varA = varB;
// varB = varC;
// varC = auxVarA;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
