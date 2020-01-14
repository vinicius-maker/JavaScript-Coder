// o operador destructing possui formas similiares de criar um array ou objeto
// portante ficar atento ao fazer o mesmo, sendo a sua diferença apenas 
// a falta de um nome para a varaivel const 
const [a] = [10] 
console.log(a) 

const [n1,,n3 , n5 , n6 = 0] = [10, 7, 9 , 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6 ,8]]
console.log(nota)