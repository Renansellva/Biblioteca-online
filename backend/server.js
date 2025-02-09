require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// conectando ao mongo
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar:", err));

const livroRotas = require('./routes/livroRotas');
const emprestimoRotas = require('./routes/emprestimoRotas');
const usuarioRotas = require('./routes/usuarioRotas');

app.use('/api/livros', livroRotas);
app.use('/api/emprestimos', emprestimoRotas);
app.use('/api/usuarios', usuarioRotas);


const PORTA = process.env.PORTA || 3000;
app.listen(PORTA, () => console.log(`🚀 Servidor rodando na porta ${PORTA}`));
