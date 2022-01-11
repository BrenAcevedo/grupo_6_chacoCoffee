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

app.get('/producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});
