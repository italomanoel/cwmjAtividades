const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2; //resto da divisao
template = `multiplicacao ${multiplicacao}, divisao ${divisao} e resto da divisão ou modulo ${modulo}`;
console.log('soma '.concat(soma), 'subtracao ' + subtracao, template);
