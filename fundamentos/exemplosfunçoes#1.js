// funçao sem retorno 
function imprimirSoma(a,b) {
    console.log(a + b)
}
imprimirSoma(2,3)// ira somar 2 = a e 3 = b
imprimirSoma(2)// ira retornar NaN, pois nao passou o parametro b
imprimirSoma(2, 10 ,3 , 4 ,5 , 6)// ira ignorar todos os outros numeros menos os dois primeiros 
imprimirSoma()// ira retornar NaN pois nenhum paramentro foi passado 

//funcao com retorno 

function soma(a ,b = 1){ //na funçao ja esta sendo passado o valor de B como padrao 1
    return a + b
}
console.log(soma(2,3))//necessidade de passar com o console pois a funçao possui retorno
// e o paramentro B quera era 1, é trocado pelo novo falor indicado, no caso 3 
console.log(soma(2))// foi passado apenas o parametro de A, mas ja faz a soma com o valor padrao de b 
console.log(soma())// parametro de A nao foi passado sendo assim retonra um Not A Number