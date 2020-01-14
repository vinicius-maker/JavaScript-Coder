// armazenando uma funçao dentro de uma variavel 
const imprimirSoma = function(a,b){//funçao anonima (sem nome) foi criada dentro da constante imprimirSoma
    console.log(a + b)
}
imprimirSoma(2,3)
// armazenando uma funçao arrow em uma variavel
const soma = (a,b) => { // o simbolo => substituin a palavra reservada function 
    return a + b
}
console.log(2,3)
// criando uma funçao com arrow e retorno implicito
const subtracao = (a,b) => a - b
//fez uma funçao em apenas uma linha, com arrow (=>) 
// ela retorna o valor passado, sem a palavra return, pois a mesma foi criada sem {}
console.log(subtracao(2,3))
// criar um funçao sem () nos parametros por conta de ser apenas um valor passado
const imprimir = a => console.log(a)
imprimir("Psiuu")