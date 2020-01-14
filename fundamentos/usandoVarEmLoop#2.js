// criado um array func constante
//criado um for com o bloco tendo o array func.push
//dentro do array criado uma funçao anonima
//com a funçao de mostrar a variavel var I
const func = []
for (var i =0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[0]()
func[8]()
//deveria-se retornar os indices 0 e 8, mas como var nao tem como escopo o bloco de comando 
//apresenta o valor como 10 