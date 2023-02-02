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

function openOverlay(id) {
  const overlayElement = document.querySelector(id);
  overlayElement.classList.add("overlay__visible");
}

// cerrar formulario editar perfil
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

// abrir formulario editar perfil
function closeProfileEditOverlay() {
  closeOverlay("#overlay__profile-edit");
}

// abrir formulario agregar nueva imagen
function closeImageAddOverlay() {
  closeOverlay("#overlay__card-add");
}

/* pop-up edit profile */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#job");

  const nameElement = document.querySelector(".profile__title");
  const jobElement = document.querySelector(".profile__description");

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  closeProfileEditOverlay();
}

/* pop-up add new place */

function handleImageFormSubmit(evt) {
  evt.preventDefault();

  const placeInput = document.querySelector("#place");
  const imageUrlInput = document.querySelector("#imageURL");

  const newPlace = {
    name: placeInput.value,
    link: imageUrlInput.value,
  };

  initialCards.unshift(newPlace);
  console.log(initialCards);

  renderGallery();

  closeImageAddOverlay();
}

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

/* codigo de la galeria */

const renderGallery = () => {
  //obtener grid de la galeria
  const grid = document.querySelector(".elements__grid");

  while (grid.firstChild) {
    grid.firstChild.remove();
  }

  initialCards.forEach((item) => {
    //crea nodo contenedor de la galeria
    const element = document.createElement("div");
    element.className = "element";
    grid.appendChild(element);

    //crea nodo del elemento de imagen
    const image = document.createElement("img");
    image.className = "element__image";
    image.src = item.link;
    element.appendChild(image);

    //crea nodo del elemento title continer
    const elementTitleContainer = document.createElement("div");
    elementTitleContainer.className = "element__title-container";
    element.appendChild(elementTitleContainer);

    //crea nodo del elemnto title
    const elementTitle = document.createElement("h2");
    elementTitle.className = "element__title";
    elementTitle.textContent = item.name;
    elementTitleContainer.appendChild(elementTitle);

    //crear nodo del elemenot button
    const elementButtonLike = document.createElement("button");
    elementButtonLike.className = "element__button-like";
    elementTitleContainer.appendChild(elementButtonLike);
  });
};

renderGallery();
