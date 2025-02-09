const Livro = require('../models/Livro');

exports.adicionarLivro = async (req, res) => {
    const novoLivro = new Livro(req.body);
    await novoLivro.save();
    res.json(novoLivro);
};

exports.listarLivros = async (req, res) => {
    const livros = await Livro.find();
    res.json(livros);
};
