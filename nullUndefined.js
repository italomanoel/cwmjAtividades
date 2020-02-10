let valor; //não inicializado
console.log(valor);

valor = null; //ausência de valor
console.log(valor);
//console.log(valor.toString()) //Dará erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //envitar atribuir valor undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);
