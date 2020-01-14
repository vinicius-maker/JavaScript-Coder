//for in mostra os elementos do array e diz o indice que o mesmo se encontra  

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5){
        break // causa um desvio de fluxo e joga para fora do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y ==5){
        continue // interrompe a reptiçao corrente e vai para a proxima reptiçao 
    }
    console.log(`${y} = ${nums[y]}`)
}
// para fazer um break agir em um laço especifico, deve-se nomear o laço
externo: for(a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim')