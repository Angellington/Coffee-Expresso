// Crie um script que:

// Crie um arquivo chamado log.txt.

// Escreva dentro dele a frase: "Sistema iniciado em: [data atual]

const { readFileSync, writeFileSync } = require('fs')

writeFileSync('01-node-tutorial/moduleEx/fs/sub/log.txt', `Sistema iniciado em: ${new Date().toLocaleTimeString()}`)

console.log(readFileSync('01-node-tutorial/moduleEx/fs/sub/log.txt', 'utf-8'))

