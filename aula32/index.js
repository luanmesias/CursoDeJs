const verdaideira = true;

let nome = 'luan';
var nome2 = 'luan';

//if (verdaideira) {
//    let nome = 'Messias';
//    console.log(nome, nome2);
//
//    if (verdaideira) {
//        let nome = 'Outra coisa';
//        console.log(nome, nome2);
//    }
//}

if (verdaideira) {
    var nome2 = 'Messias';
    if (verdaideira) {
        var nome2 = 'Outra coisa';
    }
}
console.log(nome, nome2);
