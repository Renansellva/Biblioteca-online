import express from 'express';
import Livro from '../models/livro.js';

const router = express.Router();

// Criar um livro
router.post('/', async (req, res) => {
  try {
    const livro = new Livro(req.body);
    await livro.save();
    res.status(201).json(livro);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar livro', error: err });
  }
});

// Listar todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar livros', error: err });
  }
});

export default router;
