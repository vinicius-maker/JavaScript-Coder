// Destructring é a desestruraçao de dados, ele tira da estrutura 
// duas formas de trabalho, para objetos sao com chaves {}
// para array sao os colchetes []

const pessao = {
    nome: "psiuuu",
    idade: 6,
    endereço: {
        logradouro: 'Rua oi',
        numero: 1000
    }
}
//para chamar o operador destructing, seguir o modelo (OBJETO)
const {nome, idade } = pessao
console.log(nome, idade)
// conseguiu retirar nome e idade, mas caso queira mudar os nomes dos mesmos 
// criar variveis dos dados retirados 
const {nome: n, idade: i} = pessao
console.log(n,i)
//caso queira retirar dados nao existem no objeto
const {sobrenome , humor = true}= pessao
console.log(sobrenome, humor)
//retirar as informaçoes de um objeto que esta dentro de um objeto 
const {endereço: { logradouro, numero, cep } } = pessao
console.log(logradouro, numero)