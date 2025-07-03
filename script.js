window.onload = function () {
  const botao = document.getElementById('Botao');
  const mensagemDiv = document.getElementById('mensagem');

  botao.addEventListener('click', function() {
    mensagemDiv.textContent = 'A vida é bela, então viva cada momento e seja feliz!';
  });
};