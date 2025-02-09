import express from 'express';
import { adicionarLivro, listarLivros } from '../controllers/LivroController.js';

const router = express.Router();

router.post('/', adicionarLivro);
router.get('/', listarLivros);

export default router;
