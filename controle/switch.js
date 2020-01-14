const imprimirResultado = function (nota){
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
        case 6:
            console.log('Aprovado')
        case 5:
        case 4:
            console.log('Recuperação')  
        case 3:
        case 2:
        case 1:
            console.log('Reprovado')       
        default:
            console.log('Nota Invalida') 
    }
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(4)
imprimirResultado(1)
imprimirResultado(-1)