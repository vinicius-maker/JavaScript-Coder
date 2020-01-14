// operador destructing em array
function rand([min = 0 , max = 1000]){
    if (min > max) [min , max] = [max , min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50 , 40]))// calcular aleatorio de 50 a 40
console.log(rand([992]))// calcultar de 922 a 100
console.log(rand([, 10]))// calcular de 0 a 10
console.log(rand([]))// calcular de 0 a 1000
//console.log(rand()) apresentaria erro por tentar desestruturar um array vazio 



