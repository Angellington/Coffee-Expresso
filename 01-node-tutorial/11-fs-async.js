const { readFile, writeFile } = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'subfolder');

readFile(path.join(dirPath, 'first.txt'), 'utf-8', (err, first) => {
  if (err) {
    console.error(err);
    return;
  }

  readFile(path.join(dirPath, 'second.txt'), 'utf-8', (err, second) => {
    if (err) {
      console.error(err);
      return;
    }

    const result = `${first} and ${second}`;
    const resultPath = path.join(dirPath, 'result-async.txt');

    writeFile(resultPath, result, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('Arquivo criado com sucesso!');
    });
  });
});
