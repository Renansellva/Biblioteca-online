const express = require('express');
const { adicionarLivro, listarLivros } = require('../controllers/livroController');

const router = express.Router();

router.post('/', adicionarLivro);
router.get('/', listarLivros);

module.exports = router;
