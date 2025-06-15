// rename path
const { rename } = require('fs')
const path = require('path')

const dirName = path.join(__dirname, 'sub')

rename(dirName, path.join(__dirname, 'log'), (e) => {
    if(e) throw console.error('Ocorreu um erro inesperado!', e)
    console.log('Renomeado com sucesso!')
} )
