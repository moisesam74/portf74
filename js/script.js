document.getElementById('formContato')?.addEventListener('submit', function(e) {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const erro = document.getElementById('mensagemErro');

  if (!nome || !email.includes('@') || mensagem.length < 10) {
    erro.textContent = 'Preencha todos os campos corretamente.';
    e.preventDefault();
  } else {
    erro.textContent = '';
    alert('Formulário enviado com sucesso!');
  }
});
