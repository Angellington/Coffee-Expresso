// Vai multiplicar também

const { soma } = require('../math.js');

const calcularDobroSoma = (a, b) => {
    return soma(a, b) * 2
}

module.exports = { calcularDobroSoma }