const express = require('express');
const {resolve} = require('path');
const method = require('method-override');

const app = express();

app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, './views'));

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto '+app.get('port'))
});


const publicPath = resolve(__dirname, '../public');
const uploadsPath = resolve(__dirname, '../uploads');

app.use( express.static(publicPath) );
app.use( express.static(uploadsPath) );

app.use(express.urlencoded({extended: true})); 
app.use(method('m'));

app.use(require('./routes/web'));

app.use('/user',require('./routes/user'));

app.use('/products',require('./routes/product'));
