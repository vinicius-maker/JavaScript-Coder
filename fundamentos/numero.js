//declaração de constantes
const peso1 = 1.0
const peso2 = Number('2.0')
//Number.isInterger perguntando se o numero é inteiro
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliaçao1 = 9.87
const avaliaçao2 = 6.97
// criaçao de constante total e media 
const total = peso1 * avaliaçao1 + peso2 * avaliaçao2
const media = total / (peso1 + peso2)
//Mostrando a media com o .toFixed (regula a casas decimais que voce queira que mostre)
//Convertendo o valor de inteiro para string com o comando .toString
console.log(media.toFixed(2))
console.log(media.toString(2)) //se passar o valor nos parenteses, retonar o valor binario
console.log(typeof media)//mostar o tipo do dado 