
// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})
// Obtener elementos del DOM
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const helloButtonContainer = document.getElementById('helloButtonContainer');
const helloButton = document.getElementById('helloButton');

// Agregar evento de clic al botón "Abrir"
openButton.addEventListener('click', function() {
    // Mostrar el contenedor del botón "Hola"
    helloButtonContainer.classList.remove('hidden');
});

// Agregar evento de clic al botón "Hola"
helloButton.addEventListener('click', function() {
    // Redirigir a index2.html
    window.location.href = 'index2.html';
});

// Agregar evento de clic al botón "Cerrar"
closeButton.addEventListener('click', function() {
    // Ocultar el contenedor del botón "Hola" si está visible
    if (!helloButtonContainer.classList.contains('hidden')) {
        helloButtonContainer.classList.add('hidden');
    }
});

