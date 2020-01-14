// os escopos do var sao: escopo global e escopo de funçao 
//let = mesmo preceito de const, mas podendo alterar o valor durante o codigo 
/* a variavel var dentro de um bloco de codigo, QUE NAO SEJA UMA FUNÇAO,
 * ficara visivel ate mesmo fora do bloco*/
{
    {
        {
            {
                var sera = 'Sera??'//var no caso esta dentro do bloco
                console.log(sera)
            }
        }
    }
}
console.log(sera)// var esta fora do bloco, mas mesmo assim consegue ser chamada
// mas ao tentar fazer a mesma coisa dentro de uma funçao, acarretara em um erro 
function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local) diz que a variavel local nao foi definida 
// ao criar uma variavel fora de uma funçao, ela se torna global
// ao fazer isso se cria uma varivel window NO NAVEGADOR, dentro do visual code é variavel global
// evitar fazer variaveis globais, por conta de poder ser sobrescrita a cada momento do codigo 