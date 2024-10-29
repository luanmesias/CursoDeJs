function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];
    
    //form.onsubmit = function (evento) {
    //    evento.preventDefaut();
    //    alert(1);
    //    console.log('Foi enviado');
    //};

    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)
        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;
    }


    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();