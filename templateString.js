const nome = 'Kuro';
const vamosConcatenar = 'Resolve isso com  ' + nome + '!';
const template = `
    Olá  
    ${nome}!`         //interpolar: convertendo a variável no próprio texto. Abre com o símbolo da crase ` e coloca $
console.log(vamosConcatenar, template);
console.log(`1 + 1 = ${1 + 1}`); //expressoes, caso não tenha o $ ele irá concatenar não somar.

const up = texto => texto.toUpperCase() //colocar em maiúsculo
console.log(`Ei... ${up('presta atenção aqui')}!`);

