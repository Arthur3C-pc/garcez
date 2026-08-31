document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('btnMensagem');
  const caixaMensagem = document.getElementById('mensagem');

  if (botao && caixaMensagem) {
    botao.addEventListener('click', () => {
      const paginaAtual = window.location.pathname;

      if (paginaAtual.includes('entrada.html')) {
        caixaMensagem.innerText = 'Seja bem-vindo à nossa tradição e história!';
      } else if (paginaAtual.includes('sala.html')) {
        caixaMensagem.innerText = 'Respeito, foco e dedicação constroem o futuro!';
      } else if (paginaAtual.includes('quadra.html')) {
        caixaMensagem.innerText = 'Cuidar da saúde é humanidade, responsabilidade e vocação!';
      } else {
        caixaMensagem.innerText = 'Educando e formando profissionais com excelência.';
      }
    });
  }
});