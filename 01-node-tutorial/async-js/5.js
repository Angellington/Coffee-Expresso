const esperarDoisSegundos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Já foram os dois segundos!")
        }, 2000);
    });
}

esperarDoisSegundos()
.then((mensagem) => {
    console.log(mensagem)
})
.catch((erro) => {
    console.log("Erro", erro);
});



const esperarCincoSegundos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuErro = Math.random() > 0.5

            if(deuErro){
                reject("Algo deu errado!")
            } else  {
                resolve("Já foram os cinco segundos")
            }
        }, 5000)
    })
}

esperarCincoSegundos()
.then((mensagem) => {
    console.log("Já foram os cinco segundos")
})
.catch((e) => {
    console.log("Erro: ", e);
})

const esperarDezSegundos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Já foram os dez segundos!")
        }, 10000)
    })
}

esperarDezSegundos()
.then((mensagem) => {
    console.log(mensagem)
})
.catch((e) => {
    console.log("Erro: ", e)
})