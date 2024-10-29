const num1 = '10';
const num2 = 3;
const num3 = Number(num1);
console.log(num1 + num2) // Concatena pois o num1 é String
console.log(num3 + num2) // Realizou a soma, pois converteu o num1 em Number
console.log(num1 - num2) // Subtração funciona mesmo entre String e Number
console.log(num3 * num2) // Multiplicação
console.log(num3 ** num2) // Potenciação 
console.log(num3 % num2) // Diferente da Matematica. No js % retorna a sobra de uma divisão.
let contador = 1;
contador++;
console.log(contador);
++contador;
console.log(contador);
contador--;
console.log(contador);
--contador;
console.log(contador);
contador *= 10;
console.log(contador);  
