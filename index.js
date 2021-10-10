const http = require("http");
const express = require("Express");
const app = express();
const port = process.env.PORT || 3000

//image source
app.use('/images', express.static(__dirname + '/images'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/Index.html');
});
app.get('/about', (req,res) => {
    res.sendFile(__dirname + '/About.html');
});
app.get('/cart', (req,res) => {
    res.sendFile(__dirname + '/Cart.html');
});
app.listen(port, () => console.log('Listening'));