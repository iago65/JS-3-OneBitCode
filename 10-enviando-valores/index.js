function register(element){
  //* element = a section que veio do HTML
  // element.children = todos os elementos filhos da section
  // Pego o valor dos inputs pelo name
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if (password === passwordConfirmation){
    alert("Usuario " + username + " registrado!") 
  } else {
    alert("As senhas não conferem.")
  }
}