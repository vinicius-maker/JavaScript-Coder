//para mostrar como funçao é algo muito usado em javascripy
//que é possivel se instanciar um funçao com a palavra reservado new
//nao é necessario colocar os () depois das funçoes, mas pode-se colocar tbm
console.log(typeof Object)
console.log(typeof new Object)

const Client = function(){}
console.log(typeof Client)
console.log(typeof new Client())

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto)