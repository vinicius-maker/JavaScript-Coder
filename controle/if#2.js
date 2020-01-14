function teste1(num){
    if(num > 7){
       console.log(num)
       console.log('Final')
    }
}
teste1(8.1)
teste1(6)

function teste2(num){
    if(num > 7 );{ // nao usar ; em estrutras de controle 
        console.log(num)
    }
}
teste2(6)
teste2(8)