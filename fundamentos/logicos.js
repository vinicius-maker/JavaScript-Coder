function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2 
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //faz a mesma coisa do que o de cima 
    const manterSaudavel = !compraSorvete // operador unario

    return {comprarTv32, comprarTv50, compraSorvete, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))