//variaveis definidas com var tem escopo global e de função.
//variaveis definidas com let tem escopo global, de função e de bloco.
var numero = 1;
{
    var numero = 2;
    console.log('dentro = ',numero);
}
console.log('fora = ', numero); 