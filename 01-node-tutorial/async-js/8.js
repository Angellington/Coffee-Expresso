const random = Math.random() > 0.5
console.log(random)
const buscarDados = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuErrado = random;
            if(deuErrado){
                reject("Deu errado!!")
            } else {
                resolve("Dadaos recebidos!")
            }
        }, 1500);
    });
}

console.log("Antes da Promise");
buscarDados().then(dado => console.log(dado)).catch((e) => console.log('Deu erro!', e));
console.log("Depois da promise")