// Função para simular o empréstimo de um livro
function emprestarLivro(livro) {
    // Exibe a mensagem de sucesso
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    mensagemSucesso.style.display = 'block';

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        mensagemSucesso.style.display = 'none';
    }, 3000);

    // Aqui você pode implementar o envio do livro emprestado para um banco de dados ou localStorage
    console.log(`Livro "${livro}" emprestado com sucesso!`);
}
