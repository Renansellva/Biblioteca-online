const express = require('express');
const { realizarEmprestimo, devolverLivro } = require('../controllers/emprestimoController');

const router = express.Router();

router.post('/', realizarEmprestimo);
router.put('/:id/devolver', devolverLivro);

module.exports = router;
