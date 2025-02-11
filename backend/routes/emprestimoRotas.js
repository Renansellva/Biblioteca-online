import express from 'express';
import Emprestimo from '../models/emprestimo.js';

const router = express.Router();

// Rota POST para criar um novo empréstimo
router.post('/', async (req, res) => { // A rota é /api/emprestimos, não há necessidade de repetir 'api/emprestimos' aqui
    try {
        const emprestimo = new Emprestimo({
            usuario: req.body.usuario,
            livro: req.body.livro,
            dataDevolucao: req.body.dataDevolucao,
        });

        await emprestimo.save();
        res.status(201).json(emprestimo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota GET para obter todos os empréstimos
router.get('/', async (req, res) => {
    try {
        const emprestimos = await Emprestimo.find().populate('usuario livro'); // Popula os dados do usuário e livro
        res.json(emprestimos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
