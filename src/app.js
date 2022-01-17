const express = require('express');
const {resolve} = require('path');

const app = express();

const publicPath = resolve(__dirname, '../public');
const uploadsPath = resolve(__dirname, '../uploads');

app.use( express.static(publicPath) );
app.use( express.static(uploadsPath) );


app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto '+app.get('port'))
});

app.use(require('./routes/web'));

app.use(require('./routes/user'));

app.use(require('./routes/product'));
