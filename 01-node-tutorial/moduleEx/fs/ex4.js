// Ótima pergunta! Para o Exercício 5 — “Se log.txt tiver mais de 5 linhas, apague-o” — você vai precisar usar algumas funções do fs em conjunto com lógica de string, além de uma função para deletar arquivos.

const { writeFileSync, readFileSync, unlinkSync } = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'sub', 'log.txt')

// console.log(readFileSync(dirPath, 'utf-8'))

const logLines = readFileSync(dirPath, 'utf-8')
const logSplit = logLines.split('\n')

// console.log(logSplit.length)
if(logSplit.length > 5){
    logSplit.shift() // Remove o primeiro elemento
    let newLogLine = logSplit.join('\n')

    console.log(newLogLine)
    unlinkSync(dirPath);
    writeFileSync(dirPath, newLogLine,  'utf-8')
}
