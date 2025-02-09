import express from 'express';
const router = express.Router();

// Exemplo de rota para livros
router.get('/', (req, res) => {
  res.send('Lista de livros');
});

router.post('/', (req, res) => {
  // Adicionar lógica para criar livro
  res.send('Livro criado');
});

export default router;
