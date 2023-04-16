import "./page/index.css";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { handleOverlay } from "./components/utils";
import Api from "./components/api";
import UserInfo from "./components/UserInfo";
import PopUpDeleteImage from "./components/PopUpDeleteImage";
import Popup from "./components/Popup";
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
let nIdUser;
api.getInitialUserMe().then((data) => {
  const name = data.name;
  const job = data.about;
  const imagen = data.avatar;
  nIdUser = data._id;
  const cUserInfo = new UserInfo({
    nameElement,
    jobElement,
    imagenElement,
    name,
    job,
    imagen,
  });
  cUserInfo.setUserInfo(cUserInfo.getUserInfo());
  renderGallery();
});

imagenElement.addEventListener("click", function () {
  const openAvatarPopup = new Popup(
    document.querySelector("#overlayAvatarUpdate")
  );
  openAvatarPopup.handleOverlay();
});

// pop-up card preview
document
  .querySelector("#profileForm")
  .addEventListener("submit", handleProfileFormSubmit);

document
  .querySelector("#imageForm")
  .addEventListener("submit", handleImageFormSubmit);

document
  .querySelector("#imageAvatar")
  .addEventListener("submit", handleAvatarProfileFormSubmit);

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
}

// pop-up add new place
function handleImageFormSubmit(evt) {
  evt.preventDefault();

  api.postNewCard(placeInput.value, imageUrlInput.value).then((data) => {
    createCard({
      cardData: data,
      eContainer: grid,
      idUser: nIdUser,
    });

    handleOverlay("#overlay__card-add");
  });
}

// pop-up update avatar

function handleAvatarProfileFormSubmit(evt) {
  evt.preventDefault();
  console.log("actualiza");
}

// codigo de la galeria
function renderGallery() {
  //obtener grid de la galeria
  const grid = document.querySelector(".content__elements-grid");
  api.getInitialCards().then((data) => {
    //crea el grid de la galeria
    data.forEach((item) => {
      createCard({
        cardData: item,
        eContainer: grid,
        idUser: nIdUser,
      });
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

const overlayCardDelete = document.querySelector("#overlayCardDelete");
export const popupDeleteImage = new PopUpDeleteImage(overlayCardDelete);
popupDeleteImage.setEventListeners();

function createCard(oProperties) {
  const card = new Card(
    oProperties.cardData,
    oProperties.cardData.owner._id == oProperties.idUser,
    (nIdCard) => {
      popupDeleteImage.handleOverlay();
      popupDeleteImage.setHandleImageFormDelete(() => {
        api.deleteCard(nIdCard).then(() => {
          card._deleteCard();
          popupDeleteImage.handleOverlay();
        });
      });
    },
    (nIdCard) => {
      api.putLikeButtonCard(nIdCard).then((data) => {
        card.likes = data.likes;
        card.handleAddLike();
        card.setCardLikes();
      });
    },
    (nIdCard) => {
      api.deleteLikeButtonCard(nIdCard).then((data) => {
        card.likes = data.likes;
        card.handleRemoveLike();
        card.setCardLikes();
      });
    }
  );
  //agregalo al grid desde el objeto card, llamando al metodo generateCard
  oProperties.eContainer.append(card.generateCard());
}
