// ira retornar certo, mas impatricavel com grandes sentaças
const nome = 'Rebeca'
const concetenaçao = 'Olá' + nome + '!'
// para caso de grandes sentaças usar o template String, chama-lo com (` `)
const template = `
    Olá
    ${nome}!`
console.log(concetenaçao , template)
// e usar o $ seguido de colchetes ${}
const up = texto => texto.toUpperCase() // funçao up para deixar maisculo, (toUpperCase)
console.log(`Ei... ${up('cuidado')}!'`)