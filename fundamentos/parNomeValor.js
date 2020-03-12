const saudacao = 'Opa' //contexto léxico 1
function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

//Objetos são agrupados aninhados de pares/chave nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua nome tal",
        numero: '3984'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
