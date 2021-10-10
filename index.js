const http = require("http");
const hostname = "localhost";
const port = 3000;
const fs = require("fs");
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch (req.url){
        case "/home":
            res.writeHead(200);
            var data = fs.readFileSync('./Index.html');
            res.end(data.toString());
            break;
        case "/about":
            res.writeHead(200);
            var data1 = fs.readFileSync('./About.html');
            res.end(data1.toString());
            break;
        case "/cart":
            res.writeHead(200);
            var data2 = fs.readFileSync('./Cart.html');
            res.end(data2.toString());
            break;
        default:
            res.writeHead(200);
            res.end("<h1>Easy on me</h1>")
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});