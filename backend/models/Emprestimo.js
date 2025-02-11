import mongoose from 'mongoose';

// Definindo o schema para o Emprestimo
const EmprestimoSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    livro: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro' },
    dataEmprestimo: { type: Date, default: Date.now },
    dataDevolucao: { type: Date },
    devolvido: { type: Boolean, default: false },
    multa: { type: Number, default: 0 }, // Adiciona multa, por exemplo, se for calculada
    status: {
        type: String,
        enum: ['ativo', 'concluído', 'atrasado'],
        default: 'ativo'
    },
    dataPrevistaDevolucao: { type: Date } // Adiciona a data prevista para devolução
});

// Exportando o modelo Emprestimo
export default mongoose.model('Emprestimo', EmprestimoSchema);
