// ### Escalação do Time
// Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

// - Escalar um jogador
//     - Informar a posição do jogador a ser escalado para o time.
//     - Informar o nome do jogador.
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
//     - Após o jogador ser escalado os campos de texto devem ser limpos.
// - Remover um jogador
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
//     - Após o jogador ser removido o campo de texto deve ser limpo.

// Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

function escalarJogador(){
  const jogadorSection = document.getElementById('players-list')

  const h3 = document.createElement('h3')
  h3.innerText = 'Escalar um Jogador'

  const ul = document.createElement('ul')


  // Campo Posição
  const positionLi = document.createElement('li')
  positionLi.innerText = 'Posição: '
  const positionInput = document.createElement('input')
  positionInput.type = 'text'
  positionInput.name = 'position'
  positionLi.appendChild(positionInput) // positionInput vai dentro do positionLi
  ul.appendChild(positionLi) // e o positionLi vai dentro da ul

  // Campo Nome
  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome do jogador: '
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'name'
  nameLi.appendChild(nameInput) 
  ul.appendChild(nameLi) 

  //Campo numero da camisa
  const numberLi = document.createElement('li')
  numberLi.innerText = 'Número da camisa: '
  const numberInput = document.createElement('input')
  numberInput.type = 'text'
  numberInput.name = 'number'
  numberLi.appendChild(numberInput) 
  ul.appendChild(numberLi) 

  // Botao de escalar
  const botaoEscalar = document.createElement('button')
  botaoEscalar.innerText = 'Escalar'
  ul.appendChild(botaoEscalar)
  

  jogadorSection.append(h3, ul)
}