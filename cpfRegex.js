
// Esse é um modelo de mascara de segurança no CPF utilizando RegExp.
// Podemos alterar a quantidade de numeros mascarados atŕas função replace.

const typeRegexSecurityMask = (cpf) => {
  if (cpf) {
    const typeCharacter = 'x';
    return cpf.replace(/^\d{1,6}/, x => x.replace(/./g, typeCharacter));
  }
  return cpf;
};
