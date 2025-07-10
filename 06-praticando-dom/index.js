function addContact(){
  // Pega onde vai colocar o contato
  const contactSection = document.getElementById('contacts-list')

  // Cria título
  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  // Cria lista
  const ul = document.createElement('ul')
  
  // Campo Nome
  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput) // input vai dentro do li
  ul.appendChild(nameLi) // li vai dentro da lista
  ul.appendChild(document.createElement('br'))

  // Campo Telefone
  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput) // input vai dentro do li
  ul.appendChild(phoneLi) // li vai dentro da lista
  ul.appendChild(document.createElement('br'))

  // Campo Endereço
  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressLi.appendChild(addressInput) // input vai dentro do li
  ul.appendChild(addressLi) // li vai dentro da lista
  ul.appendChild(document.createElement('br'))

  // Coloca tudo na tela
  contactSection.append(h3, ul)
}

function removeContact(){
  // Pega onde estão os contatos
  const contactSection = document.getElementById('contacts-list')
  
  // Pega todos os títulos e listas
  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')
  
  // Remove o último contato (título + lista)
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}