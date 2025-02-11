import express from 'express';
import Usuario from '../models/Usuario.js'; // Importe o modelo de Usuario
import bcrypt from 'bcryptjs'; // Importar bcrypt para comparação de senhas

const router = express.Router();

// Função para login de usuário
async function login(email, senha) {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        throw new Error('Usuário não encontrado');
    }

    const isMatch = await usuario.matchPassword(senha);
    if (!isMatch) {
        throw new Error('Senha incorreta');
    }

    // Retorna o usuário autenticado (você pode também gerar um token JWT aqui)
    return usuario;
}

// Rota de login
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await login(email, senha); // Chama a função login

        // Aqui você pode gerar um token JWT para autenticação no futuro
        res.status(200).json({
            message: 'Login bem-sucedido',
            usuario,
            // token: "seu_token_aqui" // Gerar o token, se necessário
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
