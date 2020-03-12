function imprimeSoma(a,b){
    console.log(a + b)
};



imprimeSoma(2,3);
imprimeSoma(2); //coloca como 'NaN' por não receber o parametro b
imprimeSoma(2, 10, 4, 5, 6, 7, 8); //javascript pega os pârametros pedidos, e não dá erro nesse caso, outras linguagens podem interpretar mal por passar mais que o pedido
imprimeSoma();

function soma(a, b = 0){
    return a + b
};

console.log(soma(2, 3));
console.log(soma(2));

function imprimeSoma2(a,b){
    if(b == undefined){
        b = 2
        a = a+2
    }
    console.log(a + b)
}