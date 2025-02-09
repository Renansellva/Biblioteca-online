const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    genero: String,
    ano: Number,
    disponivel: { type: Boolean, default: true }
});

module.exports = mongoose.model('Livro', LivroSchema);
