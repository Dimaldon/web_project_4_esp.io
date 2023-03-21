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

function handleOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.toggle("overlay__visible");
}

// cerrar formulario del perfil
document
  .querySelector("#closeProfileOverlay")
  .addEventListener("click", function () {
    handleOverlay("#overlay__profile-edit");
  });

// cerrar formulario de nuevo lugar
document
  .querySelector("#closeImageOverlay")
  .addEventListener("click", function () {
    handleOverlay("#overlay__card-add");
  });

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

// cerrar pop-up de nuevo lugar
document
  .querySelector("#closePreviewOverlay ")
  .addEventListener("click", function () {
    handleOverlay("#overlayCardPreview");
  });

// cierre con tecla X
const overlays = document.querySelectorAll(".overlay__form-close-button");
overlays.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target !== item) {
      return;
    }
    closeOverlay("#overlay__profile-edit");
    closeOverlay("#overlay__card-add");
    closeOverlay("#overlayCardPreview");
  });
});

// cierre con tecla escape
const keydownListener = (event) => {
  if (event.key === "Escape") {
    closeOverlay("#overlay__profile-edit");
    closeOverlay("#overlay__card-add");
    closeOverlay("#overlayCardPreview");
  }
};

document.addEventListener("keydown", keydownListener);
