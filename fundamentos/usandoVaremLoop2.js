const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]() //com var será 10 em ambos os casos, problema histórico do javascript. Usando Let fica diferente.