console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola'; //anotacao .nome é mais eficiente que: obj1['nome'] = 'Bola';
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Printra');
    };

};

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Cadeira');
console.log(obj2.nome);
console.log(obj3.nome);

