// Genera un número mágico aleatorio entre 0 y 99
let numeroMagico = Math.floor(Math.random() * 100);

// Selecciona los elementos del DOM
let input = document.querySelector("#numero-usuario");
let boton = document.querySelector("#boton-adivinar");
let mensaje = document.querySelector("#mensaje");

// Imprime el número mágico en la consola (para depuración)
console.log(numeroMagico);

// Añade el evento click al botón
boton.addEventListener("click", () => {
  // Obtiene el valor del input y lo convierte a número
  const valorInput = parseInt(input.value);
  
  // Verifica si el valor del input es igual al número mágico
  if (valorInput === numeroMagico) {
    
    mensaje.innerText = "¡Ganaste!";
    document.querySelector("main").classList.toggle("success");
  } else {
    mensaje.innerText = "Perdiste. Inténtalo de nuevo.";
  }
});
