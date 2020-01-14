// como a variavel foi declarada como let, o I que esta fora do bloco for, nao esta definido 
// causando assim um erro no codigo
for (let i = 0; i < 10; i++){
    console.log(i)
}
console.log("i =", i)