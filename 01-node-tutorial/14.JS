const { readFile, writeFile } = require('fs');
const path = require('path');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const filePath = path.join(__dirname, 'first.txt')



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

// Turning the callback function into a promise
readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error('Error reading file:', err);
    } else {
        console.log(data);
    }
}) 

// getText(filePath)
//     .then(result => console.log(result))
//     .catch((err) => console.error('Error:', err));

// getText('./log.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.error('Error:', err));
// // getText(__dirname)

const start = async() => {
    try {
        const data = await readFilePromise(filePath, 'utf8');
        const secondaData = await readFilePromise('log.txt', 'utf8');
        
        await writeFilePromise('log.txt', `LANNDO, FOi tudo o que eu pensei. Que tudo poderia ter sido diferente. ${data}`)
        console.log(data, secondaData);
    } catch (err) {
        console.log(err)
    }
}

start()