const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuaŕio normal';

const corUsuario = 'Amarela';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
