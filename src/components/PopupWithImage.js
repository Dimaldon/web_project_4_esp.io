import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor(overlayElement) {
    super(overlayElement);
  }

  handleOverlay(link, name) {
    this.imagePreview = document.querySelector(".overlay__preview-image");
    this.imagePreview.src = link;
    this.imagePreview.alt = name;
    this.imageCaption = document.querySelector(".overlay__preview-caption");
    this.imageCaption.textContent = name;
    super.handleOverlay();
  }
}
