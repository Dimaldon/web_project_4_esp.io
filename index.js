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

// abrir formulario editar perfil
function openProfileEditOverlay() {
  openOverlay("#overlay__profile-edit");
}

// abrir formulario agregar nueva imagen
function openImageAddOverlay() {
  openOverlay("#overlay__card-add");
}

// abrir formulario imagen preview
function openImagePreviewOverlay() {
  openOverlay("#overlayCardPreview");
}

// cerrar formulario editar perfil
function closeProfileEditOverlay() {
  closeOverlay("#overlay__profile-edit");
}

// cerrar formulario agregar nueva imagen
function closeImageAddOverlay() {
  closeOverlay("#overlay__card-add");
}

// cerrar popup imagen preview
function closePreviewImageOverlay() {
  closeOverlay("#overlayCardPreview");
}

// encuentra tarjeta activa
function handleLikeButtonClick(id) {
  const card = document.getElementById(id);
  const button = card.querySelector(".element__button-like");
  button.classList.toggle("element__button-like-active");
}

// manejador para eliminar tarjeta
function handleDeleteButtonClick(id) {
  const grid = document.querySelector(".elements__grid");
  const card = document.getElementById(id);
  grid.removeChild(card);
}

/* pop-up edit profile */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#overlay__form-name");
  const jobInput = document.querySelector("#overlay__form-job");

  const nameElement = document.querySelector(".profile__title");
  const jobElement = document.querySelector(".profile__description");

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  closeProfileEditOverlay();
}

/* pop-up add new place */

function handleImageFormSubmit(evt) {
  evt.preventDefault();

  const placeInput = document.querySelector("#overlay__form-place");
  const imageUrlInput = document.querySelector("#overlay__form-imageURL");
  const grid = document.querySelector(".elements__grid");

  const newPlace = {
    name: placeInput.value,
    link: imageUrlInput.value,
  };

  const card = createCard(newPlace);
  grid.prepend(card);

  closeImageAddOverlay();
}

/* pop-up card preview */

const profileForm = document.querySelector("#profileForm");
profileForm.addEventListener("submit", handleProfileFormSubmit);

const imageForm = document.querySelector("#imageForm");
imageForm.addEventListener("submit", handleImageFormSubmit);

const closeProfileOverlay = document.querySelector("#closeProfileOverlay");
closeProfileOverlay.addEventListener("click", closeProfileEditOverlay);

const closeImageOverlay = document.querySelector("#closeImageOverlay");
closeImageOverlay.addEventListener("click", closeImageAddOverlay);

const editButton = document.querySelector(".profile__button-edit");
editButton.addEventListener("click", openProfileEditOverlay);

const addButton = document.querySelector(".profile__button-add");
addButton.addEventListener("click", openImageAddOverlay);

const closePreviewOverlay = document.querySelector("#closePreviewOverlay ");
closePreviewOverlay.addEventListener("click", closePreviewImageOverlay);

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

/* cierre con tecla escape */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeOverlay("#overlay__profile-edit");
    closeOverlay("#overlay__card-add");
    closeOverlay("#overlayCardPreview");
  }
});

const createCard = (item) => {
  const randomId = Math.random();
  //crea nodo contenedor de la galeria
  const element = document.createElement("div");
  element.className = "element";
  element.id = randomId;

  //crea nodo del elemento de imagen
  const image = document.createElement("img");
  image.className = "element__image";
  image.src = item.link;
  image.onclick = () => {
    const imagePreview = document.querySelector(".overlay__preview-image");
    imagePreview.src = item.link;
    imagePreview.alt = item.name;

    const imageCaption = document.querySelector(".overlay__preview-caption");
    imageCaption.textContent = item.name;

    openImagePreviewOverlay();
  };
  element.appendChild(image);

  //crea bote de basura
  const deleteButton = document.createElement("button");
  deleteButton.className = "element__delete-button";
  deleteButton.onclick = () => {
    handleDeleteButtonClick(randomId);
  };
  element.appendChild(deleteButton);

  //crea nodo del elemento title continer
  const elementTitleContainer = document.createElement("div");
  elementTitleContainer.className = "element__title-container";
  element.appendChild(elementTitleContainer);

  //crea nodo del elemento title
  const elementTitle = document.createElement("h2");
  elementTitle.className = "element__title";
  elementTitle.textContent = item.name;
  elementTitleContainer.appendChild(elementTitle);

  //crear nodo del elemento button
  const elementButtonLike = document.createElement("button");
  elementButtonLike.className = "element__button-like";
  elementButtonLike.onclick = () => {
    handleLikeButtonClick(randomId);
  };

  elementTitleContainer.appendChild(elementButtonLike);

  return element;
};

/* codigo de la galeria */

function renderGallery() {
  //obtener grid de la galeria
  const grid = document.querySelector(".elements__grid");

  initialCards.forEach((item) => {
    const card = createCard(item);
    grid.appendChild(card);
  });
}

renderGallery();
