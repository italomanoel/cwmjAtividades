//forma literal de declarar
    function fun1(){ };

// armazenada em uma variavel
    const fun2 = function(){ };

//armazernar em um array
    const array = [function (a, b){ return a + b}, fun1, fun2];
    console.log(array[0] (2, 3));

//armazenar em atributo de objeto
    const obj = { };
    obj.falar = function(){
        return 'Teste de atributo de objeto'
    }
    console.log(obj, obj.falar());

//Passar funcao como parametro
    function run(funcao){
        funcao();
    }
    run(function(){console.log('Executando funcao como parametro')})

//Funcao como retornar ou conter outra funcao
    function soma(a,b){
        return function (c){
            console.log(a + b + c);
        }
    }
    soma(2,3)(4); //já passado o 'a b' e o 'c', chamar diretamente
    //apenas outra forma de chamar o 'a b' e 'c'
    const cincoMais = soma(2,3);
    cincoMais(4);