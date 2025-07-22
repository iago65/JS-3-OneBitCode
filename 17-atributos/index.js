const input = document.getElementById('input')

//* Alterando valores de um input e mostrando os atributos:
document.getElementById('value').addEventListener('click', function(){
  input.value = input.value === '' ? 'Olá, Mundo!' : '' //? Se ele estiver vazio, coloca 'Olá Mundo', se não, deixa o campo limpo, ou com outro valor, deixa ele limpo também
  console.log(input.getAttribute('value')) //? mostra o atributo value predefinido no HTML
})


//* Alterando o tipo do input, por exemplo, de text para radio:
document.getElementById('type').addEventListener('click', function(){
  // input.type = input.type !== 'radio' ? 'radio' : 'text' //? Se o tipo não for radio, muda para radio, se não, transforma em text
  input.setAttribute('type', 'radio') //? Outra forma de fazer, setando o atributo type para radio
})

//* Ao clicar no botão, aparece um placeholder no input: 
document.getElementById('placeholder').addEventListener('click', function(){
  input.placeholder = 'Digite algo...'
})

//* Desabilitando ou habilitando o input para entrada de dados:
document.getElementById('disable').addEventListener('click', function(){
  input.setAttribute('disabled', !input.disabled)
})

//* Trabalhando com atributos data-*:
document.getElementById('data').addEventListener('click', function(){
  const data = input.dataset.something
  console.log('O valor do atributo data-something é:' + data)
  input.dataset.something = 'Algum outro valor'
  console.log('O valor do atributo data-something agora é: ' +  input.dataset.something)
})

