// # 14 - Exercício 12
// ## Cadastro de Devs
// Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

// - A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
// - Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
//     - um campo de texto para o nome da tecnologia
//     - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
//     - um botão de remover que deve excluir essa linha.
// - O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

// Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.

const form = document.getElementById('devForm')

function addNewTech(ev) {
  //primeiro passo: criar uma section ou div pra colocar tudo da tecnologia dentro
  const techDiv = document.createElement('div')
  techDiv.className = 'tech-row'

  //segundo passo: criar o input pra digitar o nome da tecnologia
  const techNameInput = document.createElement('input')
  techNameInput.type = 'text'
  techNameInput.name = 'techName'
  techNameInput.placeholder = 'Nome da tecnologia'

  //terceiro: criando a label para os botões de experiência
  const experienceLabel = document.createElement('label')
  experienceLabel.textContent = 'Tempo de experiência: '

  //quarto passo: criar os botões de experiência (radio buttons)
  const radio1 = document.createElement('input')
  radio1.type = 'radio'
  radio1.name = 'experience'
  radio1.value = '0-2 anos'

  const label1 = document.createElement('label')
  label1.textContent = '0-2 anos'

  const radio2 = document.createElement('input')
  radio2.type = 'radio'
  radio2.name = 'experience'
  radio2.value = '3-4 anos'

  const label2 = document.createElement('label')
  label2.textContent = '3-4 anos'

  const radio3 = document.createElement('input')
  radio3.type = 'radio'
  radio3.name = 'experience'
  radio3.value = '5+ anos'
  
  const label3 = document.createElement('label')
  label3.textContent = '5+ anos'

  //quinto passo: criar o botão de remover
  const removeButton = document.createElement('button')
  removeButton.textContent = 'Remover'
  removeButton.type = 'button' 

  // sexto passo: colocar tudo dentro da div que eu criei
  techDiv.appendChild(techNameInput)
  techDiv.appendChild(experienceLabel)
  techDiv.appendChild(radio1)
  techDiv.appendChild(label1)
  techDiv.appendChild(radio2)
  techDiv.appendChild(label2)
  techDiv.appendChild(radio3)
  techDiv.appendChild(label3)
  techDiv.appendChild(removeButton)

  form.appendChild(techDiv)

  // sétimo passo: fazer o botão de remover funcionar
  removeButton.addEventListener('click', function() {
    techDiv.remove()
  })
}

const button = document.getElementById('newTech')
button.addEventListener('click', addNewTech)

form.addEventListener('submit', function(ev) {
  ev.preventDefault() 

  const devName = document.querySelector('input[name="name"]').value

  const techRows = document.querySelectorAll('.tech-row')

  const technologies = []

  techRows.forEach(function(row) {
    const techName = row.querySelector('input[name="techName"]').value

    const selectedExperience = row.querySelector('input[name="experience"]:checked')

    const experience = selectedExperience ? selectedExperience.value : 'Não informado'
    
    if (techName.trim() !== '') {
      technologies.push({
        name: techName,
        experience: experience
      })
    }
  })

  const developer = {
    name: devName,
    technologies: technologies
  }

  console.log('Desenvolvedor cadastrado:', developer)

  form.reset()
  techRows.forEach(function(row) {
    row.remove()
  })
})