export function handleOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.toggle("overlay__visible");
}

// abrir formulario del perfil
document
  .querySelector(".content__profile-button-edit")
  .addEventListener("click", function () {
    handleOverlay("#overlay__profile-edit");
  });

// abrir pop-up de nuevo lugar
document
  .querySelector(".content__profile-button-add")
  .addEventListener("click", function () {
    handleOverlay("#overlay__card-add");
  });

// cierre con tecla X
const overlays = document.querySelectorAll(".overlay__form-close-button");
overlays.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target !== item) {
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
