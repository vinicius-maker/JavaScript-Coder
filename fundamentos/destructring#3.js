// usar o operador destructing para funçoes tambem é possivel
// criado uma funçao rand para gerar numeros aleatorias de 0 a 1000
// nesta primeira parte do codigo nao foi criado o objeto, apenas a funçao e o operador
// usar parametros padroes para poder chamar o metodo de varias formas diferentes
function rand({min = 0 , max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// o obejto foi criado a partir daqui, usando o metodo rand 

const obj = {max: 50 , min: 40 } // passando os valores max e mininos
console.log(rand(obj))
console.log(rand({ min:955}))// passado apenas o valor minimo, pois o maximo ja foi passado na funçao
console.log(rand({}))// passar um objeto vazio, que gerara valores aleatorios de 1000 a 0 (funçao)
//console.log(rand())// nao ira funcionar pois esta passando um objeto vazio, sendo assim nao ha nada para retirar
