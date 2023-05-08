export default class Popup {
  constructor(overlayElement) {
    this.overlayElement = overlayElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  handleOverlay() {
    this._identificaOverlayAbierto()
      ? document.removeEventListener("keydown", this._handleEscClose)
      : document.addEventListener("keydown", this._handleEscClose);
    this.overlayElement.classList.toggle("overlay__visible");
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this._identificaOverlayAbierto() ? this.handleOverlay() : null;
    }
  }

  _identificaOverlayAbierto() {
    return this.overlayElement.className.indexOf("overlay__visible") > -1;
  }

  setEventListeners() {
    this.overlayElement.addEventListener("click", (event) => {
      if (
        event.target !== this.overlayElement &&
        event.target.className.indexOf("overlay__form-close-button") == -1
      ) {
        return;
      }
      this._identificaOverlayAbierto() ? this.handleOverlay() : null;
    });
  }
}
