// O que é?
// Permite certas tarefas como (Chamadas de API, timers, leitura de arquivos) sejam feitas sem travar o código (setTimeout, Promises, async/await)

console.log("1 - Início");
setTimeout(() => {
    console.log("2 - Esperou 2 segundos!")
}, 2000);
console.log("3 - Fim")