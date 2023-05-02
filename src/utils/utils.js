// abrir y cerrar el overlay
export function handleOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.toggle("overlay__visible");
}

// cierre con tecla X
const overlays = document.querySelectorAll(".overlay");
overlays.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (
      event.target !== item &&
      event.target.className.indexOf("overlay__form-close-button") == -1
    ) {
      return;
    }
    identificaOverlayAbierto() != null
      ? handleOverlay("#" + identificaOverlayAbierto())
      : null;
  });
});

// cierre con tecla escape
const keydownListener = (event) => {
  if (event.key === "Escape") {
    identificaOverlayAbierto() != null
      ? handleOverlay("#" + identificaOverlayAbierto())
      : null;
  }
};

function identificaOverlayAbierto() {
  return document.getElementsByClassName("overlay__visible").length > 0
    ? document.getElementsByClassName("overlay__visible")[0].id
    : null;
}

document.addEventListener("keydown", keydownListener);
