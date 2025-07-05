const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/text.txt', 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})

server.listen(5000)

