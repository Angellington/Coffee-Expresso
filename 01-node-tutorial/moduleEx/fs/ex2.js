// ➕ Exercício 3 — Append de dados

//     Adicione uma nova linha ao log.txt com o horário atual cada vez que o script for executado.

const { appendFile } = require('fs')
const date = new Date()
const Date_Now = date.toLocaleTimeString()

appendFile('01-node-tutorial/moduleEx/fs/sub/log.txt', `\nData da execução: ${Date_Now}`, (e) => {
    if(e) throw e;
    console.log('The data to append was appended to file!')
} )