import express from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import Usuario from './models/Usuario.js'; // Importação do modelo de Usuario
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar:", err));

// Rota de login
app.post('/api/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        
        if (!usuario) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        // Verificando a senha
        const senhaCorreta = await bcryptjs.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        // Login bem-sucedido
        res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});

// Porta do servidor
const PORTA = process.env.PORTA || 3000;
app.listen(PORTA, () => console.log(`🚀 Servidor rodando na porta ${PORTA}`));
