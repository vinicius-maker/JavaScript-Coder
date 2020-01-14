const notas = [6, 7, 8, 9 , 10]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Rosa',
    idade: 52,
    peso: 60
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}