// 📁 Exercício 4 — Criar uma pasta e um arquivo dentro dela

//     Crie uma pasta chamada usuarios.

//     Dentro dela, crie um arquivo chamado usuario1.txt com o conteúdo: "Nome: Ana\nIdade: 25".


const { mkdir, writeFileSync, existsSync } = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, 'usuarios');

if(existsSync(dirPath)){
    mkdir(dirPath, { recursive: true }, (e) => {
    console.log('Tying')
    if(e) throw e;
    console.log('Diretorio Criado')})
    writeFileSync(path.join(dirPath, 'usuario1.txt'), 'Nome: Ana\nIdade: 25', 'utf-8')
} else {
    writeFileSync(path.join(dirPath, 'usuario1.txt'), 'Nome: Ana\nIdade: 25', 'utf-8')
}