function notaMedia(notaAluno) {
    if(notaAluno >= 7){
        console.log("Você foi aprovado " + notaAluno);
    } else {
        console.log("Você não passou ", notaAluno);
    };
};

notaMedia(8.1);
notaMedia(6.1);

function valorE(valor) {
    if(valor) {
        console.log('O valor verdadeiro ' + valor);
    };
};

valorE();
valorE(null);
valorE(undefined);
valorE(NaN);
valorE('');
valorE(0);
valorE(-1);
valorE(' '); //espaço é valor, com isso true

