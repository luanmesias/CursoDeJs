//const h1 = document.querySelector('.container h1');
//
//function converteDiaSemana(diaSemana) {
//    let diaString;
//    switch (diaSemana) {
//        case 0:
//            return diaString = "Domingo";
//        case 1:
//            return diaString = "Segunda-Feira";
//        case 2:
//            return diaString = "Terça-Feira";
//        case 3:
//            return diaString = "Quarta-Feira";
//        case 4:
//            return diaString = "Quinta-Feira";
//        case 5:
//            return diaString = "Sexta-Feira";
//        case 6:
//            return diaString = "Sábado";
//    }
//}
//function converteMes(mes) {
//    let mesString;
//    switch (mes) {
//        case 0:
//            return mesString = "Janeiro";
//        case 1:
//            return mesString = "Fevereiro";
//        case 2:
//            return mesString = "Marco";
//        case 3:
//            return mesString = "Abril";
//        case 4:
//            return mesString = "Maio";
//        case 5:
//            return mesString = "Junho";
//        case 6:
//            return mesString = "Julho";
//        case 7:
//            return mesString = "Agosto";
//        case 8:
//            return mesString = "Setembro";
//        case 9:
//            return mesString = "Outubro";
//        case 10:
//            return mesString = "Novembro";
//        case 11:
//            return mesString = "Dezembro";
//
//    }
//}
//
//function zeroAEsquerda (num) {
//    return num >= 10 ? num : `0${num}`
//}
//const data = new Date();
//const diaSemana = data.getDay();
//const dia = zeroAEsquerda(data.getDate());
//const mes = data.getMonth();
//const ano = data.getFullYear();
//const hora = zeroAEsquerda(data.getHours());
//const min = zeroAEsquerda( data.getMinutes());
//
//const diaString = converteDiaSemana(diaSemana);
//const mesString = converteMes(mes);
//
//const dataOrdenada = `${diaString}, ${dia} de ${mesString} de ${ano} 
//${hora}:${min}`;
//
//h1.innerHTML = dataOrdenada;


const h1 = document.querySelector('.h1');
const data = new Date();
const opcoes = {
   weekday: 'long',
   year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
   hour: '2-digit', 
   minute: '2-digit'
}
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
