const http = require('http');
// Importa o modulo nativo http do node
// Permite criar servidores HTTP no Node.js


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page, dear!')
    }
    if(req.url === '/about'){
        res.end('Here is our short history, beloved!')
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for, dear!</p>
        <a href="/">back home</a>`)
})



server.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})