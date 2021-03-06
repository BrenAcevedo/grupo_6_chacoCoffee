const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser'); // Info que se guarda por servidor y navegador.
const {resolve} = require('path');
const method = require('method-override');

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

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