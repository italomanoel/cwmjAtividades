const notas = [6.7, 7.4, 9.8, 8.1, 7.6];
//uso do let para ser apenas do bloco referido.
for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome:   'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let caracteristica in pessoa){
    console.log(`${caracteristica} = ${pessoa[caracteristica]}`);
}