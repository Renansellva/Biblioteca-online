import mongoose from 'mongoose';

// Definindo o schema para o Emprestimo
const EmprestimoSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    livro: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro' },
    dataEmprestimo: { type: Date, default: Date.now },
    dataDevolucao: { type: Date },
    devolvido: { type: Boolean, default: false }
});

// Exportando o modelo Emprestimo
export default mongoose.model('Emprestimo', EmprestimoSchema);
