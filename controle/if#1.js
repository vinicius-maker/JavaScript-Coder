function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com:'+nota)
    }
}

soBoaNoticia(7.1)// so imprimi o valor que satisfaz a condiçao do IF
soBoaNoticia(6.9)

function seForVerdade(valor){
    if(valor){
        console.log('É verdade:'+valor)
    }
}
seForVerdade(NaN)// sao valores falsos, portanto nao imprimi na tela
seForVerdade(undefined)
seForVerdade(null)
seForVerdade(0)
seForVerdade('')
seForVerdade('oi')
seForVerdade(-1)
seForVerdade([1,2])
seForVerdade({})