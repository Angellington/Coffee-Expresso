const os = require('os')

console.log(os.platform())
// output: linux (retorna o OS)

console.log(os.arch())
// output: x64 (retorna arquitetura)

console.log(os.cpus().length);
// output: 8 (retorna a quantidade de nucleos)
console.log(os.cpus()[0])
// output: detalhese do primeiro núclleo

console.log('Livre', os.freemem())
console.log('Uso', os.totalmem())
// output: Retorna a quantidade de memorias

// Aqui em MB, ou GB
const toGB = bytes => (bytes / 1024 / 1024 / 1024).toFixed(2);
console.log('Memória Livre (GB):', toGB(os.freemem()));


console.log(`Uptime: ${os.uptime()} segundos`);
// Tempo de Uso

console.log(os.hostname())
// Output: minerva (o usuario)

console.log(os.userInfo())
// Output: informações do usuário

console.log(os.homedir());
console.log(os.tmpdir());
// Repositórios temporários