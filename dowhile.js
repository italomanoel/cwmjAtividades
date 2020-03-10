function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

do { //no do ele executa o bloco primeiro e depois vai checar a estrutura de repetição;
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1);

console.log('Até logo');
