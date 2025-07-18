const express = require('express');
const app = express();
const logger = require('./logger');

// req => middleware => 

app.use('/api',logger)
// APP.USE invoca a função em todas as rotas

app.get('/', (req, res, next) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    res.send('About');
})

app.get('/api/items', (req, res) => {
    res.send('About');
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
