const impResultado = function (nota){
    //break causa uma saída do bloco do switch, não do método.
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Passou com Honras') 
            break //parar o case
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        case 8: case 7:
            console.log('Aprovado')
            break //break causa uma saída do bloco do switch, não do método.
        default:
            console.log('Nota inválida');        
    }

}

impResultado(10);
impResultado(8.9);
impResultado(6.55);
impResultado(2.3);
impResultado(-1);
impResultado(11);