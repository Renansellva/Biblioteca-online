import express from 'express';
import Livro from '../models/Livro.js';  // Importa o modelo Livro

const router = express.Router();

// Rota para cadastrar livros
router.post('/livros', async (req, res) => {
    const { titulo, autor, ano, genero, descricao } = req.body;

    const livro = new Livro({
        titulo,
        autor,
        ano,
        genero,
        descricao,
    });

    try {
        await livro.save();
        res.status(201).json({ message: 'Livro cadastrado com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao cadastrar livro', error: err.message });
    }
});

// Rota para listar livros
router.get('/livros', async (req, res) => {
    try {
        const livros = await Livro.find();  // Busca todos os livros no banco
        res.status(200).json(livros);  // Retorna os livros encontrados
    } catch (err) {
        res.status(500).json({ message: 'Erro ao listar livros', error: err.message });
    }
});

export default router;
