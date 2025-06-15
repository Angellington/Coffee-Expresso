const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

// console.log(__dirname)
const filepath = path.join('/subfolder', 'first.txt')
// console.log(filepath)




const first = readFileSync('01-node-tutorial/subfolder/first.txt', 'utf-8')

writeFileSync('01-node-tutorial/subfolder/result.txt', `Here is the result ${first}`, { flag: 'w'})

