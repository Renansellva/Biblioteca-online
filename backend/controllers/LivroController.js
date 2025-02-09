import Livro from '../models/livro.js';

export const getLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter livros' });
  }
};

export const criarLivro = async (req, res) => {
  const { titulo, autor } = req.body;
  
  try {
    const livro = new Livro({ titulo, autor });
    await livro.save();
    res.status(201).json(livro);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar livro' });
  }
};
