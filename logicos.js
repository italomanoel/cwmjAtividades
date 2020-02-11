function a(parametro1, parametro2) {
    const teseOr = parametro1 || parametro2;
    const teseE = parametro1 && parametro2;
    const bitwiseXor = !!(parametro1 ^ parametro2);
    const teseXor = parametro1 != parametro2; 
    const teseUnario = !teseOr;
    return {teseOr, teseE, bitwiseXor, teseXor, teseUnario};
}

console.log("TT ",a(true, true));
console.log("TF ",a(true, false));
console.log("FT ",a(false, true));
console.log("FF ",a(false, false));

