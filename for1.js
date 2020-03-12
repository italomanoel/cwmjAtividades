let contador = 1;
while(contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++;
}
do {
    console.log(`contador = ${contador}`);
    contador++;
} while(contador <= 10)

for(let i = 1; i<= 10; i++) {
    console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i = 0; i < notas.length; i++) { //caso não use o let no 'i' ele ficará disponível fora do bloco
    console.log(`Nota = ${notas[i]}`); //mostrar o array de notas separado.
}