let valor // nao inicializada
console.log(valor)
// undefined = produto sem valor na memoria, ainda nao foi declarado valor 
valor = null //ausencia de valor ]
console.log(valor)
// null = produto ja foi declaro valor, mas nao pega nenhum espaço na memoria 
const produto = {}
console.log(produto.preco)
console.log(produto)
// neste caso produto é um objeto declarado, mas preço nao foi, sem assim um objeto vazio
// mas ao passar um valor para preço, produto deixa de ser um objeto vazio 
produto.preco = 350
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
console.log(produton)
//caso queira zerar um objeto e deixa-lo sem valor, utilzar o null