// Criar um livro
router.post('/', async (req, res) => {
    console.log(req.body); // Verifique os dados recebidos
    try {
      const livro = new Livro(req.body);
      await livro.save();
      res.status(201).json(livro);
    } catch (err) {
      console.error(err); // Log do erro
      res.status(400).json({ message: 'Erro ao criar livro', error: err });
    }
  });
  
  // Listar todos os livros
  router.get('/', async (req, res) => {
    try {
      const livros = await Livro.find();
      console.log(livros); // Verifique os livros retornados
      res.status(200).json(livros);
    } catch (err) {
      console.error(err); // Log do erro
      res.status(500).json({ message: 'Erro ao listar livros', error: err });
    }
  });
  