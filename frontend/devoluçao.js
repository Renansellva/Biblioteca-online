// Função para simular a devolução de um livro
function devolverLivro(livro) {
    // Exibe a mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagemDevolucao');
    mensagemSucesso.style.display = 'block';

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        mensagemSucesso.style.display = 'none';
    }, 3000);

    // Aqui você pode implementar a lógica de devolução no banco de dados ou localStorage
    console.log(`Livro "${livro}" devolvido com sucesso!`);
}
