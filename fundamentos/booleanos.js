// colancando um variavel como falsa de forma direta com a palavra reservada false
let isAtivo = false
console.log(isAtivo)
// colancando um variavel como verdadeira de forma direta com a palavra reservada true
isAtivo = true
console.log(isAtivo)
// formas de declarar se um valor é verdadeiro ou falso com o boolean sendo usado pela !
isAtivo = 1
console.log(!!isAtivo)
// quando se tem apenas uma exclamaçao(!) quer dizer not
// mas quabdi se tem duas quer dizer not not, portante sendo verdadeiro 

//alguns exemplos de expressoes verdadeiras
console.log('Os Verdadeiros')
console.log(!!3)
console.log(!! -1)
console.log(!! ' ')
console.log(!![])
console.log(!!{})
console.log(!! Infinity)
console.log(!! (isAtivo = true))
//alguns exemplos de expressoes falas 
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (isAtivo = false))
//para finalizar
console.log('Finalizando')
console.log(!!('' || null || 0 || ' ')) //pegar expressao e se houver uma verdadeira e imprimir true

//exemplo pratica de boolean
let nome = ""
console.log(nome || 'Desconhecido')
// Ou....
nome = "Lucas"
console.log(nome || 'Desconhecido')

