const promessa = new Promise((resolve, reject) => {
    const deuCerto = false;

    if(deuCerto){
        resolve('Deu certooo!! XD')
    } else {
        reject("Deu errado! ;-;")
    }
})

promessa
.then((mensagem) => {
    console.log("Sucesso!", mensagem)
})
.catch((erro) => {
    console.log("Erro: ", erro)
})
