const imprimirResultado = function(nota){
    if(nota > 7 ){
        console.log('Aprovado')
    } else { // se colocasse um ; aqui, imprimira na tela os dois resultados
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('EPA') // cuidado, javascript é fracamente tipada, entao ele compara mas nao da erro