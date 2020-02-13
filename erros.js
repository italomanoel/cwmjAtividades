function tratarErro(erro){
//exemplos de como pode usar o thow, sendo inteiro - boolean - string
    //throw new Error('Ocorreu um erro');    
    //throw 10;
    //throw true;
    //throw 'mensagem';
    throw {
        nome: erro.name,
        mensagem: erro.message,
        date: new Date
    };
};
function imprimirNome(objeto){
    try{
        console.log(objeto.name.toUpperCase() + '!!!');
        //console.log(objeto.nome.toUpperCase() + '!!!');  //sem erro para ver como fica mensagem 
    } catch (erro) {
        tratarErro(erro);
    } finally {
        console.log('Erro final');
    }
}

const objeto = { nome: 'Testando nome'};
imprimirNome(objeto);