function getInteiroNumerosAleatorios(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opçao = -1

do{
    opçao = getInteiroNumerosAleatorios(-1, 10)
    console.log(`Opção escolhida foi ${opçao}.`)
}while(opçao != -1)
console.log('Até a proxima')