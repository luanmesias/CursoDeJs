function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-Feira';
        case 2:
            return diaSemanaTexto = 'Terça-Feira';
        case 3:            
            return diaSemanaTexto = 'Quarta-Feira';
        case 4:            
            return diaSemanaTexto = 'Quinta-Feira';
        case 5:           
            return  diaSemanaTexto = 'Sexta-Feira';
        case 6:            
            return diaSemanaTexto = 'Sábado';
        default:
            diaSemanaTexto = '';
    }
}

const data = new Date();
const diaSemana = data.getDay();

const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(`É ${diaSemanaTexto}`);