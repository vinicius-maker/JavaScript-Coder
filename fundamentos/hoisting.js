// javascript possui uma funcionalidade chamada hosting (içar, jogar para cima)
// nada mais é que ele nao le o codigo linha por linha, ou de baixo para cima 
// ele consegue ler todo o codigo, nao tendo a necessidade de declarar a variavel 
// e depois escrever o codigo 

console.log("a =", a)// retorna como indefinada, mas nao da erro
var a = 2
console.log("a =", a)// retorna o valor de a 
//hosting só funciona com a variavel var, nao funciona com let 
//apenas uma curiosidade, nao é algo interresente de se usar em um codigo do dia a dia
console.log("b =", b)
let b = 2
console.log("b =", b)
