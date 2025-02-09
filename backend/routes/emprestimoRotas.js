import express from 'express';
const router = express.Router();

// Defina suas rotas aqui
router.get('/', (req, res) => {
  res.send('Lista de empréstimos');
});

router.post('/', (req, res) => {
  res.send('Empréstimo criado');
});

// Exportação padrão (default)
export default router;
