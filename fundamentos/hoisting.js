console.log('a = ',a); //colocará como indefinido.
var a = 2; //hosting, içamento da variável, em javascript ele puxa a variável para cima, mas deixa indefinido, seria como se ele fizesse: var a; console.log(a); a = 2; console.log(a);
console.log('a = ', a);

function teste(){ //mesmo dentro da função ele faz o hosting
    console.log('função a = ',a); //colocará como indefinido.
    var a = 2; //hosting, içamento da variável, em javascript ele puxa a variável para cima, mas deixa indefinido, seria como se ele fizesse: var a; console.log(a); a = 2; console.log(a);
    console.log('função a = ', a);
}
teste();

let b = 2; //o hosting(içamento) não funciona com 'let'
console.log('b = ', b);