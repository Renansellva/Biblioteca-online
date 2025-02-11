import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // Para criptografar a senha

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Garante que o email seja único
        match: [/.+@.+\..+/, 'Por favor, insira um email válido'] // Validação de formato de email
    },
    senha: {
        type: String,
        required: true,
        minlength: 6 // Garante que a senha tenha no mínimo 6 caracteres
    },
    tipo: {
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario'
    }
}, {
    timestamps: true // Adiciona `createdAt` e `updatedAt` automaticamente
});

// Função para criptografar a senha antes de salvar
UsuarioSchema.pre('save', async function(next) {
    if (!this.isModified('senha')) return next(); // Se a senha não for modificada, não faz nada
    const salt = await bcrypt.genSalt(10); // Gera o salt para a criptografia
    this.senha = await bcrypt.hash(this.senha, salt); // Criptografa a senha
    next();
});

// Função para comparar a senha no login
UsuarioSchema.methods.matchPassword = async function(senha) {
    return await bcrypt.compare(senha, this.senha); // Compara a senha fornecida com a armazenada no banco
};

export default mongoose.model('Usuario', UsuarioSchema);
