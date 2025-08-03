const express = require("express");
const app = express();

const peopleRouter = require("./routes/people");
const auth = require('./routes/auth.js')
const { musicas } = require("./data/data.js"); // importa musicas

// middlewares
app.use(express.static("./methods-public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// monta o router em /api/people
app.use('/login', auth)
app.use("/api/people", peopleRouter);

// rota de músicas
app.get("/api/musicas", (req, res) => {
  res.status(200).json({ success: true, data: musicas });
});

// login


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
