const fs = require('fs');

const lerArquivo = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

module.exports = { lerArquivo }