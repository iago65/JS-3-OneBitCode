//? Obtendo elementos HTML do DOM
function show() {
  const contactList = document.getElementById('contact-list') //* Obtendo elementos do HTML que tem o ID 'contact-list'
  console.log(contactList)

  const listElements = document.getElementsByTagName('li') //* Obtendo elementos do HTML que tem a tag HTML 'li'
  console.log(listElements)

  const contactInputs = document.getElementsByClassName('contact-input') //* Obtendo elementos do HTML pela classe 'contact-input'
  console.log(contactInputs)

  //? O querySelector gera uma NodeList e a vantagem é que ela possibilita o uso de métodos diferentes de métodos do HTMLCollection
  const contacts = document.querySelectorAll('#contact-list > li > label') //* Obtendo elementos por query como se fosse um código CSS
  console.log(contacts) 
  
  const contact1 = document.getElementsByName('contact1') //*Obtendo elemento pelo 'name'
  console.log(contact1)

  const firstContact = document.querySelector('#contact-list > li > label') //* O querySelector pega somente 1 elemento encontrado.
  console.log(firstContact)
}