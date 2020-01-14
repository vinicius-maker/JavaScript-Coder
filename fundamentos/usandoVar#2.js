//o escopo de um var só é limitado por funçoes, nao por blocos de comandos {}
// sendo assim o var declarado fora do bloco é o mesmo var declarado dentro do bloco
// sobrecrevendo o var de fora pelo de dentro, pois o dois estao no mesmo escopo e com mesmo nome
var numero = 1
{
    var numero = 2
    console.log("dentro =", numero)
}
console.log("fora =", numero)