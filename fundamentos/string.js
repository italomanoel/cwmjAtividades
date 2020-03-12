const escola = "CodeNight";
const testeNumero = "3ss3";
console.log(escola.charAt(1)); //'charAt' para pegar o caractere naquela posição
console.log(escola.charAt(2));
console.log(escola.charCodeAt(2)); //saber o código relacionado a tabela unicode (unicode.com.br)
console.log(escola.indexOf('o')); //retorna posição que está no indice;


console.log(escola.substring(2)); //vai de um íncice até o colocado ou apartir.
console.log(escola.substring(0, 3)); //pega no indice informado até o final informado.

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace('h', 'e')); //replace substitui o que o caractere pelo desejado ao executar
console.log('Testando '.concat(testeNumero.replace(3, 'e'))) //testando concat com replace
console.log('Testando substituir todos os 3 por e = '.concat(testeNumero.replace(/\d/g, 'e'))); //o reject /\d/g contendo o g de global retira todos os digitos '3' e substitui pelo 'e'.
console.log('Teste de substituir todos pelo e = '.concat(testeNumero.replace(/\w/g,'e'))); //substituir tudo por e, usando a global (g)
console.log('Substituir,esse,aqui'.split('.'));

let contando1;
let contando2;
let contando3;

 function iniciando(){
    contato1 = 3;
    contato2 = 4;
    contato3 = contato1+contato2;
    return contato3;
}
console.log('Esse é o valor da função iniciando: ' + iniciando());