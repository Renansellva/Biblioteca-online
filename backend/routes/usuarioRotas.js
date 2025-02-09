import express from 'express';
const router = express.Router();

// Exemplo de rota para usuários
router.get('/', (req, res) => {
  res.send('Lista de usuários');
});

router.post('/', (req, res) => {
  // Adicionar lógica para criar usuário
  res.send('Usuário criado');
});

export default router;
