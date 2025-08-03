const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => 

// 1. use vs route
// 2. options - our own / express / third party

    // Posso usar middleware aqui
// app.use('/api', [logger,authorize])
app.use(morgan('tiny'));

// APP.USE invoca a função em todas as rotas

app.get('/', (req, res, next) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

// Ou usar middleware assim
app.get('/api/products', (req, res) => {
    res.send(`Usuário autorizado: ${req.user.name}`);
})

app.get('/api/items', (req, res) => {
    res.send('About');
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
