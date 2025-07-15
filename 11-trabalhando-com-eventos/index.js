function register(ev){
  console.log(ev)
  const username = ev.currentTarget.children.username.value
  const password = ev.currentTarget.children.password.value
  const passwordConfirmation = ev.currentTarget.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert('Usuário ' + username + ' registrado!')
  }else{
    alert('As senhas não conferem!')
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)