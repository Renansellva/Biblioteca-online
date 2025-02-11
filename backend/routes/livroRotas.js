import express from 'express';
import Livro from '../models/livro.js';

const router = express.Router();

// Rota para cadastrar um livro
router.post('/', async (req, res) => {
    try {
        const { titulo, autor, ano, genero, descricao } = req.body;

        // Verifica se todos os campos foram fornecidos
        if (!titulo || !autor || !ano || !genero || !descricao) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
        }

        // Cria o novo livro
        const novoLivro = new Livro({ titulo, autor, ano, genero, descricao });
        await novoLivro.save();

        res.status(201).json({
            message: 'Livro cadastrado com sucesso!',
            livro: novoLivro
        });
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: 'Erro de validação: ' + err.message });
        }
        res.status(500).json({ message: 'Erro interno do servidor. Tente novamente mais tarde.' });
    }
});

export default router;
