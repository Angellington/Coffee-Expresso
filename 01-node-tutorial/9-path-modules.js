const path = require('path')

// console.log(path.sep)
// /

// console.log(path.join()
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder')
console.log(absolute)