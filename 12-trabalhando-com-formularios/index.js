// Vai lá no HTML e pega o formulário pelo ID
const form = document.getElementById('orderForm')

// Fica "vigiando" o formulário: quando alguém clicar em "Enviar", executa essa função
form.addEventListener('submit', function (ev){
  //? IMPORTANTE: impede que a página recarregue (comportamento normal de formulário)
  ev.preventDefault() 

  // Vai em cada campo do formulário e pega o que o usuário digitou
  const name = document.querySelector('input[name="name"]').value // Pega o nome
  const address = document.querySelector('input[name="address"]').value // Pega o endereço
  const breadType = document.querySelector('select[name="breadType"]').value // Pega o tipo de pão escolhido
  const main = document.querySelector('input[name="main"]').value // Pega o recheio principal
  const observations = document.querySelector('textarea[name="observations"]').value // Pega as observações

  // Para as saladas é diferente: pode marcar várias opções (checkboxes)
  let salad = "" // Começa com texto vazio
  // Pega TODAS as opções de salada que estão MARCADAS (:checked)
  document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
    salad += ' - ' + item.value + '\n'
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    "Pedido realizado!" + 
    "\nNome do cliente: " + name + 
    "\nEndereço de Entrega: " + address +
    "\nTipo de pão: " + breadType + 
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  )
})