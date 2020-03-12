console.log(typeof Object); //função - function
console.log(typeof new Object); //objeto - object

const Cliente = function(){
    console.log(typeof Cliente);
    console.log(typeof new Produto())
};
class Produto{};
    console.log(typeof Produto);
    console.log(typeof new Produto());

