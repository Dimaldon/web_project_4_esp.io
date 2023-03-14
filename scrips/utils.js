// abrir formulario
export function openOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.add("overlay__visible");
}

// cerrar formulario
export function closeOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.remove("overlay__visible");
}
