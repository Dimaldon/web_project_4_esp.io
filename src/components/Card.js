import PopupWithImage from "./PopupWithImage.js";
import Popup from "./Popup.js";
export default class Card {
  constructor(
    cardData,
    myCard,
    handleDeleteClick,
    handleLikeAdd,
    handleLikeDelete
  ) {
    this.cardData = cardData;
    this.link = cardData.link;
    this.name = cardData.name;
    this.likes = cardData.likes;
    this.myCard = myCard;
    this.handleDeleteClick = handleDeleteClick;
    this.handleLikeAdd = handleLikeAdd;
    this.handleLikeDelete = handleLikeDelete;
  }

  handleRemoveLike() {
    this.btnLike.classList.remove("content__elements__button-like-active");
  }

  handleAddLike() {
    this.btnLike.classList.add("content__elements__button-like-active");
  }

  _deleteCard() {
    this.element.remove();
  }

  _setEvents() {
    this.btnLike.addEventListener("click", () => {
      if (
        this.btnLike.className.indexOf(
          "content__elements__button-like-active"
        ) > -1
      ) {
        this.handleLikeDelete(this.cardData._id);
      } else {
        this.handleLikeAdd(this.cardData._id);
      }
    });

    this.btnDelete.addEventListener("click", () => {
      this.handleDeleteClick(this.cardData._id);
    });
    this.cardImage.onclick = () => {
      const overlayCardPreview = document.querySelector("#overlayCardPreview");
      const popupImage = new PopupWithImage(overlayCardPreview);
      popupImage.setEventListeners();
      popupImage.handleOverlay(this.link, this.name);
    };
  }

  setCardLikes() {
    this.cardLikes.textContent = this.likes.length;
  }

  generateCard() {
    const cardTemplate = document.querySelector(".card__template");
    this.cardItem = cardTemplate.content.cloneNode(true);
    this.element = this.cardItem.querySelector(".elements");
    this.cardImage = this.element.querySelector(".content__elements-image");
    this.cardTitle = this.element.querySelector(".content__elements-title");
    this.cardLikes = this.element.querySelector(
      ".content__elements__numbers-like"
    );
    this.btnLike = this.element.querySelector(
      ".content__elements__button-like"
    );
    this.btnDelete = this.cardItem.querySelector(
      ".content__elements__delete-button"
    );
    if (!this.myCard) this.btnDelete.remove();
    this.cardImage.src = this.link;
    this.cardTitle.textContent = this.name;
    this.setCardLikes();
    this._setEvents();
    return this.element;
  }
}
