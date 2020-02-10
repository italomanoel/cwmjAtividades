const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); 

valores[4] = 10;
console.log("acrescentando valor não existente " + valores[4]); 
console.log("tamanho do array: " + valores.length);

valores.push({id: 3}, false, null, 'teste') //push add novo elemento ao array
console.log("O Push: " + valores);

console.log(valores.pop());      //pop pega o último valor do array e retira esse valor do array, verá o campo como null
delete valores[0];
console.log(valores);

console.log(typeof valores)//em javascript array é um objeto
