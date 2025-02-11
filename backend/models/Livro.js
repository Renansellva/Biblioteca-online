import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  // Adicione outros campos conforme necessário
}, {
  timestamps: true // Adiciona campos `createdAt` e `updatedAt` automaticamente
});

const Livro = mongoose.model('Livro', livroSchema);

export default Livro;
