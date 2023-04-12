import PopupWithImage from "./PopupWithImage.js";
import Popup from "./Popup.js";
export default class Card {
  constructor(link, name, likes) {
    this.link = link;
    this.name = name;
    this.likes = likes;
  }

  _handleLike() {
    this.btnLike.classList.toggle("content__elements__button-like-active");
  }

  _deleteCard() {
    this.element.remove();
  }

  _setEvents() {
    this.btnLike.addEventListener("click", () => {
      this._handleLike();
    });

    this.btnDelete.addEventListener("click", () => {
      // this._deleteCard();
      const overlayCardDelete = document.querySelector("#overlayCardDelete");
      const popupDelete = new Popup(overlayCardDelete);
      popupDelete.handleOverlay();
    });
    this.cardImage.onclick = () => {
      const overlayCardPreview = document.querySelector("#overlayCardPreview");
      const popupImage = new PopupWithImage(overlayCardPreview);
      popupImage.handleOverlay(this.link, this.name);
    };
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
    this.cardImage.src = this.link;
    this.cardTitle.textContent = this.name;
    this.cardLikes.textContent = this.likes.length;
    this._setEvents();
    return this.element;
  }
}
