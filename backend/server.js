import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import livroRotas from './routes/livroRotas.js';
import emprestimoRotas from './routes/emprestimoRotas.js';
import usuarioRotas from './routes/usuarioRotas.js';

const app = express();
app.use(express.json());
app.use(cors());

// Conectando ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar:", err));

// Rotas
app.use('/api/livros', livroRotas);
app.use('/api/emprestimos', emprestimoRotas);
app.use('/api/usuarios', usuarioRotas);

const PORTA = process.env.PORTA || 3000;
app.listen(PORTA, () => console.log(`🚀 Servidor rodando na porta ${PORTA}`));
