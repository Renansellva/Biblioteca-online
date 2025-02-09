import Emprestimo from '../models/emprestimo.js';

export const realizarEmprestimo = async (req, res) => {
    const novoEmprestimo = new Emprestimo(req.body);
    await novoEmprestimo.save();
    res.json(novoEmprestimo);
};

export const devolverLivro = async (req, res) => {
    const emprestimo = await Emprestimo.findById(req.params.id);
    if (emprestimo) {
        emprestimo.devolvido = true;
        emprestimo.dataDevolucao = new Date();
        await emprestimo.save();
        res.json(emprestimo);
    } else {
        res.status(404).json({ erro: "Empréstimo não encontrado" });
    }
};
