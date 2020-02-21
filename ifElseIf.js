Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
};
const impResultado = function(nota) {
    if (nota.entre(9, 10)){ //chamando a função pelo valor de 'nota'.
        console.log("Passou com honra");
    } else if(nota.entre(7, 8.99)){
        console.log("Aprovado");
    } else if(nota.entre(4, 6.99)){
        console.log("Recuperação");
    } else if(nota.entre(0, 3.99)){
        console.log("Reprovado");
    } else {
        console.log("Nota invalida");
    }
    console.log("fim");
}

impResultado(10);
impResultado(8.9);
impResultado(6.55);
impResultado(2.3);
impResultado(-1);
impResultado(11);
