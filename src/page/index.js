import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

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
  ],
  nameInput = document.querySelector("#overlay__form-name"),
  jobInput = document.querySelector("#overlay__form-job"),
  nameElement = document.querySelector(".content__profile-title"),
  jobElement = document.querySelector(".content__profile-description"),
  placeInput = document.querySelector("#overlay__form-place"),
  imageUrlInput = document.querySelector("#overlay__form-imageURL"),
  grid = document.querySelector(".content__elements-grid");
// pop-up card preview
document
  .querySelector("#profileForm")
  .addEventListener("submit", handleProfileFormSubmit);

document
  .querySelector("#imageForm")
  .addEventListener("submit", handleImageFormSubmit);

// pop-up edit profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closeOverlay("#overlay__profile-edit");
}

// pop-up add new place
function handleImageFormSubmit(evt) {
  evt.preventDefault();

  const card = new Card(imageUrlInput.value, placeInput.value);
  grid.prepend(card.generateCard());

  closeOverlay("#overlay__card-add");
}

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
  enableValidation();
}

// añade a todos los formularios la validación de la clase FormValidator
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".overlay__form"));
  formList.forEach((formElement) => {
    const oFormValidator = new FormValidator(
      {
        input: ".overlay__text-input",
        button: ".overlay__form-submit-button",
      },
      formElement
    );
    oFormValidator.enableValidation();
  });
}

renderGallery();
