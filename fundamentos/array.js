// array em java script posui algumas diferenças
const valores = [7.7, 8.5, 9.6, 8.7]
console.log = (valores[0], valores[3])
console.log = (valores[4])
//quando pesquisa por um indice que nao existe, retorna undfined, nao um erro
valores[4] = 10
//criar um indicie fora do array, especificando a posiçao e o valor
console.log(valores)
console.log(valores.length)
//.lentth diz quando elementos tem dentro do array
valores.push({id: 3}, false, null, 'teste') 
console.log(valores)
// javascript o array é heterogeneo, pode haver mais de um tipo de dado dentro do array
console.log(valores.pop())
//.pop retira o ultimo valor do array, no caso 'teste'
delete valores[0]
//delete retira um valor do array, especificando o indice
console.log(valores)
console.log(typeof valores)
//mostra o tipo do array, no caso um objeto 