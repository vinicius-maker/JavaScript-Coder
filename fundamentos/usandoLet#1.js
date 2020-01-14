// escopos dos let sao: escopo global, escopo de funçao e escopo de bloco
// o escopo do let é definido por blocos de comandos,sendo assim mesma a variavel numero tendo
// o mesmo nome, elas estao em escopos diferentes, podendo assim coexistir umas com as outras
var numero = 1
{
    let numero = 2 
    console.log(numero)
}
console.log(numero)