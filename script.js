// ==================================================
// Função para escrita animada
// ==================================================
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML  = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            }, 75 * i);
        });
    }
  
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
  }
  
  // ==================================================
  // Função para ativar menu mobile
  // ==================================================
  function ativacaoMenu(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')
  
    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
  }
  ativacaoMenu();
  
  // ==================================================
  // Função para mostrar experiência e educação
  // ==================================================
  function sobreMim(){
    const experiencia = document.querySelectorAll('.experience_content div');
    const botao = document.querySelectorAll('.experience_content ul li')
    const education = document.querySelectorAll('.education_content div');
    const botaoEducation = document.querySelectorAll('.education_content ul li')
  
    experiencia[0].classList.add('ativo')
    botao[0].classList.add('ativo')
    education[0].classList.add('ativo')
    botaoEducation[0].classList.add('ativo')
  
    function slideShow(index){
        experiencia.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botao.forEach((item)=>{
            item.classList.remove('ativo')
        });
        experiencia[index].classList.add('ativo')
        botao[index].classList.add('ativo')
    }
  
    function slideShow2(index){
        education.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botaoEducation.forEach((item)=>{
            item.classList.remove('ativo')
        });
        education[index].classList.add('ativo')
        botaoEducation[index].classList.add('ativo')
    }
  
    botao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });
  
    botaoEducation.forEach((div, index)=>{
        div.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })
  }
  sobreMim();
  
  // ==================================================
  // Sistema de Projetos
  // ==================================================
  const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
  const buttonGeral = document.querySelectorAll('.project_navegacao li');
  
  listaALL.forEach((item)=>{
    item.classList.add('ativo');
  })
  
  function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
  }
  
  buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
  })
  
  function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });
  
    if(buttom == 'design'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
    }
    if(buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }
  
    if(buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
  
    if(buttom == 'all'){
        lista.forEach((item) => item.classList.add('ativo'));
    }
  }
  
  buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } 
        if(currentButton.classList.contains('design')){
            showLista(listaALL, "design")
        }
        if(currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic")
        }
        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website")
        }
    });
  });
  
  // ==================================================
  // Integração com o Backend da Biblioteca
  // ==================================================
  const API_BASE_URL = "http://localhost:3000/api"; // URL base do backend
  
  // Função para buscar empréstimos
  function buscarEmprestimos() {
      fetch(`${API_BASE_URL}/emprestimos`)
          .then(response => response.json())
          .then(data => {
              console.log("Lista de empréstimos:", data);
              mostrarEmprestimosNaTela(data); // Exibir na interface
          })
          .catch(error => console.error("Erro ao buscar empréstimos:", error));
  }
  
  // Função para cadastrar um novo empréstimo
  function cadastrarEmprestimo(usuarioId, livroId, dataDevolucao) {
      fetch(`${API_BASE_URL}/emprestimos`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              usuario: usuarioId,
              livro: livroId,
              dataDevolucao: dataDevolucao
          })
      })
      .then(response => response.json())
      .then(data => {
          console.log("Empréstimo criado:", data);
          buscarEmprestimos(); // Atualiza a lista na tela
      })
      .catch(error => console.error("Erro ao criar empréstimo:", error));
  }
  
  // Exibir lista de empréstimos na tela
  function mostrarEmprestimosNaTela(emprestimos) {
      const lista = document.getElementById("listaEmprestimos");
      lista.innerHTML = ""; // Limpa antes de adicionar novos itens
  
      emprestimos.forEach(emprestimo => {
          const item = document.createElement("p");
          item.textContent = `Usuário: ${emprestimo.usuario.nome} | Livro: ${emprestimo.livro.titulo} | Devolução: ${emprestimo.dataDevolucao}`;
          lista.appendChild(item);
      });
  }
  
  // Quando a página carregar, buscar empréstimos
  document.addEventListener("DOMContentLoaded", buscarEmprestimos);
  
  // Capturar envio do formulário de cadastro de empréstimos
  document.getElementById("formEmprestimo")?.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o recarregamento da página
  
      const usuarioId = document.getElementById("usuarioId").value;
      const livroId = document.getElementById("livroId").value;
      const dataDevolucao = document.getElementById("dataDevolucao").value;
  
      cadastrarEmprestimo(usuarioId, livroId, dataDevolucao);
  });
  