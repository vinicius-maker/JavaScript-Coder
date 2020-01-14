// existe 3 palavras reservadas para tratar erro, try, cath, finaly
// try ele tentar executar o erro
// catch caso o try nao consiga, cai nele e faz certa açao
// finaly, sempre é executado, indempendente de ter sido resolvido no try ou no catch
// throw é para lançar um erro, existem varias formas abaixo demonstrando
function tratarErroELancar(erro){
    // throw new Error ('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new Date
    }
}
function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)