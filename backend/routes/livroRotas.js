import express from 'express';
import Livro from '../models/livro.js';  

const router = express.Router();

// Rota para cadastrar um livro
router.post('/', async (req, res) => {
  try {
    const { titulo, autor, ano, genero, descricao } = req.body;

    const novoLivro = new Livro({ titulo, autor, ano, genero, descricao });
    await novoLivro.save();
    res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: novoLivro });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar livro', error: err.message });
  }
});

// Outras rotas de livros podem ser adicionadas aqui (por exemplo, buscar, atualizar, excluir)

export default router;
