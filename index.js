const formElement = document.querySelector(".overlay__form");
const closeButton = document.querySelector(".overlay__form-close-button");
const editButton = document.querySelector(".profile__button-edit");

function openOverlay() {
  const overlayElement = document.querySelector(".overlay");
  overlayElement.classList.add("overlay__visible");
}

function closeOverlay() {
  const overlayElement = document.querySelector(".overlay");
  overlayElement.classList.remove("overlay__visible");
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    closeOverlay();
  }
}

/* inicia codigo del formulario */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("input[name='name-input']");
  const jobInput = document.querySelector("input[name='job-input']");

  const nameElement = document.querySelector(".profile__title");
  const jobElement = document.querySelector(".profile__description");

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  closeOverlay();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
closeButton.addEventListener("click", closeOverlay);
editButton.addEventListener("click", openOverlay);
document.addEventListener("keydown", handleEscClose);

/* inicia codigo de la galeria */

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

const renderGallery = () => {
  //obtener grid de la galeria
  const grid = document.querySelector(".elements__grid");

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
