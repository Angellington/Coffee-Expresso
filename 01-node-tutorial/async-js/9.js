const buscarDados = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random() > 0.5;

            if(random > 5){
                reject("Deu errado!!")
            } else {
                resolve("Dadaos recebidos!")
            }
        }, 1500);
    });
}

async function carregar(){
    try{
        const resultado = await buscarDados();
        console.log(resultado);
    } catch(erro) {
        console.error("Erro ao buscar dados: ", erro)
    }
}

carregar();