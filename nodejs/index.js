const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8000;

const index = fs.readFileSync('./index.html');


const server = http.createServer((req, res) => {

    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.end(index);
    }
    // res.end('Hello world');
});


server.listen(port, hostname, () => {
    console.log(`Successfully started on http://${hostname}:${port} `);
});