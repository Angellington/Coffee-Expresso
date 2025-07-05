const http = require("http");
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.homePage
        res.end();
    } else if(url === '/about'){
        // about page
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>About Page</h1>");
    } else {
        // 404
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>page not found</h1>");
        res.end();
    }
    

});

server.listen(5000);
