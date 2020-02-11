//destructuring ou desestruturação é tirar algo de objetos ou de arrays
const [a] = [10]; //lado direito array, ou operador de desestruturação no lado esquerdo.
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9 , 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; 
console.log(nota); //6 segunda posição do segundo array.



