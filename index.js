const http = require("http");
const hostname = "localhost";
const fs = require("fs");
const path = require("path");
const express = require("Express");
const app = express();
const router = express.Router();
const { append } = require("vary");
const port = process.env.PORT || 3000;

//image source
app.use('/images', express.static(__dirname + '/images'));


router.get('/', (req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    var data = fs.readFileSync("./Index.html");
    res.end(data.toString());
});
router.get('/cart', (req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    var data = fs.readFileSync("./Cart.html");
    res.end(data.toString());
    //res.sendFile(__dirname + '/Cart.html');
});
router.get('/about', (req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    var data = fs.readFileSync("./About.html");
    res.end(data.toString());
    //res.sendFile(__dirname + '/About.html');
});

app.use("/", router);
app.listen(port, () => console.log('Listening'));
