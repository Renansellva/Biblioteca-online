const express = require('express');
const { cadastrarUsuario, fazerLogin } = require('../controllers/usuarioController');

const router = express.Router();

router.post('/', cadastrarUsuario);
router.post('/login', fazerLogin);

module.exports = router;
