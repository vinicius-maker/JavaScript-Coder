//objeto em javascript é a combinaçao de java e valor 
const produto1 = {} //criado um objeto vazio, apenas colocando as chaves 
produto1.nome = 'camisa polo'
produto1.preco = 19.90
produto1.tamanho = 'M'
// colancando valores dentro do objeto, sem previamente ter declarados 
console.log(produto1)
//possibilidade de criar o objeto ja junto ao valor
const produto2 = {
    nome: 'Camisa Polo',
    preco: 19.90
}
console.log(produto2)
//lembrar de colocar a virgula apos cada atributo do objeto
//possibilidade de criar um objeto dentro de outro objeto
const produto3 = {
    nome: 'CAMISA POLO',
    preco: 19.90,
    cc:  {
            tamanho: 'M',
            cor: 'Rosa',
            tipo: 'Algodao',
    }    
}
//json sao arquivos textuais, separados por aspas duplas "" cada elemento
// '{"nome:""}'

