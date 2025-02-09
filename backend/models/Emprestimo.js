const mongoose = require('mongoose');

const EmprestimoSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    livro: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro' },
    dataEmprestimo: { type: Date, default: Date.now },
    dataDevolucao: { type: Date },
    devolvido: { type: Boolean, default: false }
});

module.exports = mongoose.model('Emprestimo', EmprestimoSchema);
