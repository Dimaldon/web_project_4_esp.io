//variable que almacena el array de objetos con las 6 cards iniciales
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

// manejador para eliminar tarjeta
function handleDeleteButtonClick(id) {
  const grid = document.querySelector(".content__elements-grid");
  const card = document.getElementById(id);
  grid.removeChild(card);
}

// pop-up edit profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#overlay__form-name");
  const jobInput = document.querySelector("#overlay__form-job");

  const nameElement = document.querySelector(".content__profile-title");
  const jobElement = document.querySelector(".content__profile-description");

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  closeOverlay("#overlay__profile-edit");
}

// pop-up add new place
function handleImageFormSubmit(evt) {
  evt.preventDefault();

  const placeInput = document.querySelector("#overlay__form-place");
  const imageUrlInput = document.querySelector("#overlay__form-imageURL");
  const grid = document.querySelector(".content__elements-grid");

  const card = new Card(imageUrlInput.value, placeInput.value);
  grid.prepend(card.generateCard());

  closeOverlay("#overlay__card-add");
}

// pop-up card preview
const profileForm = document.querySelector("#profileForm");
profileForm.addEventListener("submit", handleProfileFormSubmit);

const imageForm = document.querySelector("#imageForm");
imageForm.addEventListener("submit", handleImageFormSubmit);

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

// codigo de la galeria
function renderGallery() {
  //obtener grid de la galeria
  const grid = document.querySelector(".content__elements-grid");
  //crea el grid de la galeria
  initialCards.forEach((item) => {
    const card = new Card(item.link, item.name);
    //agregalo al grid desde el objeto card, llamando al metodo generateCard
    grid.append(card.generateCard());
  });
}

renderGallery();
