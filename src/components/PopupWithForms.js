import Popup from "./Popup";

export default class PopupWithForms extends Popup {
  constructor(overlayElement, handleFormSubmit) {
    super(overlayElement);
    this.handleFormSubmit = handleFormSubmit;
    this.formImputs = overlayElement.querySelectorAll(".overlay__text-input");
    this.formElement = overlayElement.querySelector(".overlay__form");
    this.formButton = overlayElement.querySelector(
      ".overlay__form-submit-button"
    );
  }

  _getInputValues() {
    this.formImputs.map((eInput) => {
      return eInput.value;
    });
  }

  setButtonProcesing() {
    this.formButton.textContent = "Guardando...";
  }

  setButtonReset() {
    this.formButton.textContent = this.formButton.dataset.valordefault;
  }

  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.setButtonProcesing();
      this.handleFormSubmit();
    });
  }

  handleOverlay() {
    super.handleOverlay();
    this.formImputs.forEach((element) => {
      element.value = "";
    });
  }
}
