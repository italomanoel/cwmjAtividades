//armazenar funcao em uma variavel
const imprimeSoma = function (a,b) {
    console.log(a+b)
};
imprimeSoma(2,3);

//armazenando funcao 'arrow' em uma variavel
const soma = (a,b) => {
    return a + b
};
console.log(soma(2,3));

//retorno implicito, apenas o =>
const subtracao = (a,b) => a - b
console.log(subtracao(2,3));



