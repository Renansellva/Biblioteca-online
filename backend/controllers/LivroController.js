import Livro from '../models/livro.js';

export const adicionarLivro = async (req, res) => {
    const novoLivro = new Livro(req.body);
    await novoLivro.save();
    res.json(novoLivro);
};

export const listarLivros = async (req, res) => {
    const livros = await Livro.find();
    res.json(livros);
};
