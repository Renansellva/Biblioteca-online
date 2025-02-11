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
});

const Livro = mongoose.model('Livro', livroSchema);

export default Livro; 
