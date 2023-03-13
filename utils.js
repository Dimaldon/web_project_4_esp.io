// abrir formulario
function openOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.add("overlay__visible");
}

// cerrar formulario
function closeOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.remove("overlay__visible");
}
