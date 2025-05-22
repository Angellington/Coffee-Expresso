const { soma, subtracao } = require('./math.js');
//  Usei desestructuring para pegar apenas a função soma
const { bomDia, boaTarde, boaNoite } = require('./utils/messages.js');

console.log(soma(3, 4))
console.log(subtracao(10, 3))
// console.log(soma(1, 2));
let nome = 'Minerva'

console.log(bomDia('Lucas'))

console.log(bomDia(nome), boaTarde(nome), boaNoite(nome))

const { calcularDobroSoma } = require('./utils/calculoAvancao.js');

console.log(calcularDobroSoma(2, 3))

let path = '/home/minerva/Desktop/Projects/Express-Journey/01-node-tutorial/moduleEx/texto.txt';

const { lerArquivo } = require('./utils/leitor.js');

console.log(lerArquivo(path))