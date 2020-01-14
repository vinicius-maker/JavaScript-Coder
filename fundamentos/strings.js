const escola = "Cod3r"

console.log(escola.charAt(4)) // acha a letra no indice 4 e retorna R (array)
console.log(escola.charAt(5)) // nao acha a letra mas nao da erro, apenas nulo
console.log(escola.charCodeAt(3)) //retorna o valor do numero 3 na tabela code
console.log(escola.indexOf('3')) //retorna em qual indcie esta o caracter 3, no caso 3 
console.log(escola.substring(1)) //mostra na tela todos os caracteres menos o primeiro
console.log(escola.substring(0 , 3)) //ira mostrar do indice 1 ate o indice 3 
// Literal é passar um dado direto, sem o uso de uma variavel 
console.log('Escola '.concat(escola).concat("!"))// juntar as informaçoes direto com .concat
// poderia fazer a conctenaçao das Strings com o sinal de + 
console.log(escola.replace(3 , 'e'))// ira tirar 3 do Cod3er e ira colacar o 3
// o replace pode ser usado com o Regex
console.log('Ana,Maria,Pedro'.split(',')) 
// converte a string em um array, especificando o ponto de separação, no caso a ','.