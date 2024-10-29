const nome ="Luan Messias";
const sobrenome = "de Oliveira";
const idade = 28;
const peso = 87.2;
const altura = 1.75;

let imc;
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2024 - idade;

// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
