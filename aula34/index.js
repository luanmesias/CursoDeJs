const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:30,
    endereco: {
      rua: 'Av Brasil',
      numero: 320
    }
}

//const {nome :teste = '', sobrenome} = pessoa;
const {endereco: { rua, numero}} = pessoa;
console.log(rua, numero);