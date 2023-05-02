import Popup from "./Popup";

export default class PopUpDeleteImage extends Popup {
  constructor(overlayElement) {
    super(overlayElement);
    this._handleImageFormDelete;
    this.formButton = overlayElement.querySelector(
      ".overlay__form-submit-button"
    );
  }

  setButtonProcesing() {
    this.formButton.textContent = "Guardando...";
  }

  setButtonReset() {
    this.formButton.textContent = this.formButton.dataset.valordefault;
  }

  setHandleImageFormDelete(handleAction) {
    this._handleImageFormDelete = handleAction;
  }

  setEventListeners() {
    super.setEventListeners();
    document.querySelector("#FormCardDelete").addEventListener("submit", () => {
      this.setButtonProcesing();
      this._handleImageFormDelete();
    });
  }
}
