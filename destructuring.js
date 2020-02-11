//destructuring ou desestruturação é tirar algo de objetos ou de arrays
const pessoa = {
    nome: 'Todd',
    idade: '20',
    endereco: {
        logradouro: 'Rua ABCD',
        numero: 1000
    }
};

const {nome, idade } = pessoa;
console.log(nome, idade);

const {nome: n, idade: i } = pessoa;
console.log(n, i);

const {sobrenome, Humero = true } = pessoa;
console.log(sobrenome, Humero);

const {endereco:{ logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);