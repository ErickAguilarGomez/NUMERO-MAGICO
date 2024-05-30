let numeroMagico = Math.floor(Math.random() * 100);

// Selecciona los elementos del DOM
let input = document.querySelector("#numero-usuario");
let boton = document.querySelector("#boton-adivinar");
let mensaje = document.querySelector("#mensaje");

console.log(numeroMagico);

// Añade el evento click al botón
boton.addEventListener("click", () => {
  const valorInput = parseInt(input.value);
  
  if (valorInput === numeroMagico) {
    
    mensaje.innerText = "¡Ganaste!";
    document.querySelector("main").classList.toggle("success");
  } else {
    mensaje.innerText = "Perdiste. Inténtalo de nuevo.";
  }
});
