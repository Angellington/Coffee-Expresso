const express = require('express');
const app = express();

const { musicas } = require('./data')

const { products } = require('./data')
app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/musicas">musicas</a>')
});

app.get('/api/musicas/', (req, res) => {
    const newMusicas = musicas.map((musica) => {
        const { id, titulo, genero } = musica;
        return { id, titulo, genero}
    })

    res.json(newMusicas)
})

app.get('/api/musicas/:id', (req, res) => {
    const { id } = req.params;
    const singleMusica = musicas.find((musica) => musica.id === Number(id))
    if(!singleMusica){
        return res.status(404).send('Product Does Not Exist')
    }
    console.log(req)
    console.log(req.params)
    console.log(singleMusica)

    res.json(singleMusica)
})

app.get('/api/musicas/:id/review/:reviewId', (req, res) => {
    console.log(req.param)
    res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedMusicas = [...musicas];

    if (search) {
        sortedMusicas = sortedMusicas.filter((musica) => {
            return musica.titulo.toLowerCase().startsWith(search.toLowerCase());
        });
    }

    if (limit) {
        sortedMusicas = sortedMusicas.slice(0, Number(limit));
    }

    if(sortedMusicas.length < 1){
        // res.status(200).send("No musicas para pesquisar")
        return res.status(200).json({success: true, data: []})
    }
    return res.status(200).json(sortedMusicas);
});




app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
