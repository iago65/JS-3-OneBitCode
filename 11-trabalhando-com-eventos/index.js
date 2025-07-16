// Função que roda quando o botão é clicado
function register(ev){
  console.log(ev) // Mostra no console o evento que aconteceu
  
  // ev.currentTarget = o botão que foi clicado
  // .parentNode = o pai do botão (no caso, a section)
  const sectionElement = ev.currentTarget.parentNode
  
  // Pega o valor que o usuário digitou em cada campo
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  // Confere se as duas senhas são iguais
  if (password === passwordConfirmation) {
    alert('Usuário ' + username + ' registrado!') // Senhas iguais = sucesso!
  }else{
    alert('As senhas não conferem!') // Senhas diferentes = erro!
  }
}

// Lá no HTML e pega o botão pelo ID
const button = document.getElementById('register-button')

// Diz pro botão: "quando alguém clicar em você, execute a função register"
button.addEventListener('click', register)

// Função para REMOVER o event listener (parar de "escutar" cliques)
function removeListener() {
  // Remove o listener do botão - agora ele não vai mais executar a função register quando clicado
  button.removeEventListener('click', register)
  alert('Event removed') // Avisa que removeu
}

button.addEventListener('mouseover', function (ev){
  console.log(ev.currentTarget) // Mostra no console qual elemento o mouse está em cima
})