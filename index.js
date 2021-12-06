
//module http
const http = require('http');
//module filesystem
const fs = require('fs');

// port
const port = process.env.port || 3001;

//create server
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    }
    else if (req.url === '/about') {
        fs.readFile('./about.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    }
    else if (req.url === '/contact-me') {
        fs.readFile('./contact-me.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text-html' });
            res.write(data);
            return res.end();
        })
    }
    else {
        fs.readFile('./404.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text-html' });
            res.write(data);
            return res.end();
        })
    }
});



//listen server
server.listen(port, () => {
    console.log(`Server -> ${port}`)
})