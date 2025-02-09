const Usuario = require('../models/Usuario');

exports.cadastrarUsuario = async (req, res) => {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.json(novoUsuario);
};

exports.fazerLogin = async (req, res) => {
    const usuario = await Usuario.findOne({ email: req.body.email, senha: req.body.senha });
    if (usuario) {
        res.json({ mensagem: "Login realizado com sucesso!", usuario });
    } else {
        res.status(401).json({ erro: "Credenciais inválidas" });
    }
};
