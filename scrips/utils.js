// abrir formulario
function openOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.add("overlay__visible");
}

// cerrar formulario
export function closeOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.remove("overlay__visible");
}

const closeProfileOverlay = document.querySelector("#closeProfileOverlay");
closeProfileOverlay.addEventListener("click", function () {
  closeOverlay("#overlay__profile-edit");
});

const closeImageOverlay = document.querySelector("#closeImageOverlay");
closeImageOverlay.addEventListener("click", function () {
  closeOverlay("#overlay__card-add");
});

const editButton = document.querySelector(".content__profile-button-edit");
editButton.addEventListener("click", function () {
  openOverlay("#overlay__profile-edit");
});

const addButton = document.querySelector(".content__profile-button-add");
addButton.addEventListener("click", function () {
  openOverlay("#overlay__card-add");
});

const closePreviewOverlay = document.querySelector("#closePreviewOverlay ");
closePreviewOverlay.addEventListener("click", function () {
  closeOverlay("#overlayCardPreview");
});

const overlays = document.querySelectorAll(".overlay");
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
