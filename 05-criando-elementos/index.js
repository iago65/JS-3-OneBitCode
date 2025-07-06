//? CRIANDO NOVOS ELEMENTOS NO DOM
function addInput() {
  // Pega a lista (ul) que já existe no HTML pelo ID
  const ul = document.getElementById('inputs')

  // Cria um novo item de lista (li)
  const newLi = document.createElement('li')
  // Adiciona uma classe CSS ao li
  newLi.className = 'list-item'

  //! MUITO cuidado usando o innerHTML, quase não usar, e se usar, usar com muito cuidado, pois pode abrir brechas de segurança (XSS), porque ele mexe direto no HTML da página
  //! newLi.innerHTML = '<span>item 1 </span>' 

  // Adiciona texto dentro do li
  newLi.innerText = 'Novo input: '

  // Cria um novo campo de input
  const newInput = document.createElement('input')
  // Define o tipo como texto
  newInput.type = 'text'
  // Define o nome do input
  newInput.name = 'input'

  // Coloca o input dentro do li
  newLi.appendChild(newInput)
  // Coloca o li dentro da lista ul
  ul.appendChild(newLi)
}