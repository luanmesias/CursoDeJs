let varA = 'A';
let varB = 'B';
let varC = 'C';
/*const varCa = varA;
varA = varB;
varB = varC;
varC = varCa;*/
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

