const tarefaPesage = () => {
    for(let i = 0; i < 10000000; i ++){}
    console.log("Terminou a tarefa")
}
console.log('Inicio')
// tarefaPesada();
setTimeout(() => {
    tarefaPesage()
}, 100000)
console.log("Fim")