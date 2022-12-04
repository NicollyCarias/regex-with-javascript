// Esse é um modelo de mascara de segurança no nome utilizando RegExp.
// Podemos alterar a quantidade de caracteres mascarados atŕas função replace,
// como podemos alterar a regra de quais nomes serão mascarados.


const typeCharacter = 'x';

const nomeDoMeio = (nomeDoMeio) => {
  const middleNameStr = nomeDoMeio.join(' ');
  return middleNameStr.replace(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ])/g, typeCharacter);
};

const ultimoNome = (ultimoNome) => {
  return ultimoNome.slice(0, -2).replace(/./g, typeCharacter) + ultimoNome.slice(-2);
};

const typeRegexSecurityMask = (nome) => {
  if (nome) {
    const nomeCompleto = nome.split(' ');
    const primeiroNome = nomeCompleto.shift();
    const ultimoNomeMascarado = ultimoNome(nomeCompleto.pop());
    const nomeMeioMascarado = nomeDoMeio(nomeCompleto);

    return `${primeiroNome} ${nomeMeioMascarado} ${ultimoNomeMascarado}`;
  }
  return nome;
};

module.exports = nome => typeRegexSecurityMask(nome);
