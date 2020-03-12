let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //voltando ao seu original, nesse caso true por ter colocado como na linha 4
console.log(!isAtivo); //! é negação
//---------true
console.log(!!3);
console.log(!!-1);
console.log(!! " "); //com espaço será 'true', sem espaço será 'false'. Por conta de a string vazia ou não
console.log(!![]); //array
console.log(!!{}); //objetos
console.log(!!Infinity);
 //---------false
console.log(!!0);
console.log(!!""); //com espaço será 'true', sem espaço será 'false'. Por conta de a string vazia ou não
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('' || null || 0 || '');