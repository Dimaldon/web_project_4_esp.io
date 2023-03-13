const cardTemplate = document.querySelector(".card__template");

class Card {
  constructor(link, name) {
    this.link = link;
    this.name = name;
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
      this._deleteCard();
    });
    this.cardImage.onclick = () => {
      this.imagePreview = document.querySelector(".overlay__preview-image");
      this.imagePreview.src = this.link;
      this.imagePreview.alt = this.name;
      this.imageCaption = document.querySelector(".overlay__preview-caption");
      this.imageCaption.textContent = this.name;

      openOverlay("#overlayCardPreview");
    };
  }

  generateCard() {
    this.cardItem = cardTemplate.content.cloneNode(true);
    this.element = this.cardItem.querySelector(".elements");
    this.cardImage = this.element.querySelector(".content__elements-image");
    this.cardTitle = this.element.querySelector(".content__elements-title");
    this.btnLike = this.element.querySelector(
      ".content__elements__button-like"
    );
    this.btnDelete = this.cardItem.querySelector(
      ".content__elements__delete-button"
    );
    this.cardImage.src = this.link;
    this.cardTitle.textContent = this.name;
    this._setEvents();
    return this.element;
  }
}
