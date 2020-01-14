// par nome/valor
const saudaçao = 'Opa' //constexto lexico 1

function exec(){
    const saudaçao = 'Falaaaa' // contexto lexico 2
    return saudaçao
}

//Objetos são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereço: {
        logadouro: 'Rua topzera',
        numero: 123
    }
}

console.log(saudaçao)
console.log(exec())
console.log(cliente)