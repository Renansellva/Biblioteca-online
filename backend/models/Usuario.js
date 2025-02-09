const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    tipo: { type: String, enum: ['admin', 'usuario'], default: 'usuario' }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
