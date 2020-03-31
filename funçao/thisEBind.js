const pessoa = {
    saudaçao: "Bom dia",
    falar(){
        console.log(this.saudaçao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // colocar em uma variavel o metodo falar e tentar chama-lo, nao ira dar certo
// pois o THIS esta no objeto pessoa 

const falarPessoa = pessoa .falar.bind(pessoa)//bind amarra o objeto e tras junto o this
falarPessoa()