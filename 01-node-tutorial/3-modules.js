// modules
// CommonJS, every file is module (by default)
// Modules - Encapsuleted COde (Only share minimum)

// Importando o módulo
const names = require('./4-name')
const sayHi = require('./5-utils')


// Trazendo o objeto do módulo
console.log(names)
// console.log(sayHi('Raquel Seixas'))



sayHi('Raquel')
sayHi('susan')
sayHi(names.minerva)
sayHi(names.alves)

const { singlePerson } = require('./6-alternative-flavor')
console.log(singlePerson.name)

require('./7-mind-grenade') // Esta exportando aqui (fazendo referencia)
