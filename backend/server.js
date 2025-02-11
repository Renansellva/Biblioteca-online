import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import livroRotas from './routes/livroRotas.js';  // Importa as rotas de livro

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com o MongoDB
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI não está definido no arquivo .env");
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar:", err));

// Usando as rotas de livros
app.use('/api', livroRotas);  // Define a base URL para as rotas de livro

// Porta do servidor
const PORTA = process.env.PORTA || 3000;
app.listen(PORTA, () => console.log(`🚀 Servidor rodando na porta ${PORTA}`));
