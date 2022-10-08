function calcularMedia() {
  //Cria referência aos elementos da página
  let inNome = document.getElementById('inNome')
  let inNota1 = document.getElementById('inNota1')
  let inNota2 = document.getElementById('inNota2')
  let outMedia = document.getElementById('outMedia')
  let outSituacao = document.getElementById('outSituacao')

  //Obtem os conteúdos dos campos de entrada
  let nome = inNome.value.toUpperCase()
  let nota1 = Number(inNota1.value)
  let nota2 = Number(inNota2.value)

  //Calcula a média das notas
  let media = (nota1 + nota2) / 2

  //Apresenta a media (altera o conteúdo do elemento outMedia)
  outMedia.textContent = 'Media das notas: ' + media.toFixed(1)

  //Cria a condição
  if (media >= 7) {
    outSituacao.textContent = 'Parabéns! ' + nome + ', Você foi aprovado(a)'
    //Altera o texto e estilo da cor do elemento outSituacao
    outSituacao.style.color = 'blue'
  }else{
    outSituacao.textContent = 'Ops! ' + nome + '... Você foi reprovado(a)'
    outSituacao.style.color = 'red'
  }
  //Cria uma referência ao elemento btResultado (botão)
  let btResultado = document.getElementById('btResultado')

  //Registra um evento associado ao botão, para carregar uma função
  btResultado.addEventListener('click', calcularMedia)
}