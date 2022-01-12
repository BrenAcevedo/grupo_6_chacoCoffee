const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto '+app.get('port'))
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});