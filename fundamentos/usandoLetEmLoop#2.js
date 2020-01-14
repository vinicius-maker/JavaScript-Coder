// ao mudar a variavel de var para let, o comportamento do codigo muda tambem 
// é como se agora a variavel tivesse a capacidade ler na memoria o valor que aquele
// indice estava ao iniciar o loop de repetiçao 
const func = []
for (let i =0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[0]()
func[8]()