import "./page/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { handleOverlay } from "./components/utils";
import Api from "./components/api";
import UserInfo from "./components/UserInfo";
//variable que almacena el array de objetos con las 6 cards iniciales
const nameInput = document.querySelector("#overlay__form-name"),
  jobInput = document.querySelector("#overlay__form-job"),
  nameElement = document.querySelector(".content__profile-title"),
  jobElement = document.querySelector(".content__profile-description"),
  placeInput = document.querySelector("#overlay__form-place"),
  imageUrlInput = document.querySelector("#overlay__form-imageURL"),
  grid = document.querySelector(".content__elements-grid"),
  imagenElement = document.querySelector(".content__profile-image"),
  api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03",
    headers: {
      authorization: "361c2497-73b4-4dd1-9a02-2225ff5963b5",
      "Content-Type": "application/json",
    },
  });

api.getInitialUserMe().then((data) => {
  const name = data.name;
  const job = data.about;
  const imagen = data.avatar;
  const cUserInfo = new UserInfo({
    nameElement,
    jobElement,
    imagenElement,
    name,
    job,
    imagen,
  });
  cUserInfo.setUserInfo(cUserInfo.getUserInfo());
});

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
  api.patchInitialUserMe(nameInput.value, jobInput.value).then((data) => {
    const name = data.name;
    const job = data.about;
    const imagen = data.avatar;
    const cUserInfo = new UserInfo({
      nameElement,
      jobElement,
      imagenElement,
      name,
      job,
      imagen,
    });
    cUserInfo.setUserInfo(cUserInfo.getUserInfo());
    handleOverlay("#overlay__profile-edit");
  });
  // nameElement.textContent = nameInput.value;
  // jobElement.textContent = jobInput.value;
}

// pop-up add new place
function handleImageFormSubmit(evt) {
  evt.preventDefault();
  api.postNewCard(placeInput.value, imageUrlInput.value).then((data) => {
    const card = new Card(data.link, data.name);
    grid.prepend(card.generateCard());

    handleOverlay("#overlay__card-add");
  });
}

// codigo de la galeria
function renderGallery() {
  //obtener grid de la galeria
  const grid = document.querySelector(".content__elements-grid");
  api.getInitialCards().then((data) => {
    //crea el grid de la galeria
    data.forEach((item) => {
      const card = new Card(item.link, item.name);
      //agregalo al grid desde el objeto card, llamando al metodo generateCard
      grid.append(card.generateCard());
    });
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
