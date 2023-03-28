import Popup from "./Popup";

class PopupWithForms extends Popup {
  constructor(overlayElement, handleFormSubmit) {
    super(overlayElement);
    this.handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this.formImputs = this.overlayElement.querySelectorAll(
      ".overlay__text-input"
    );
    this.formElement = this.overlayElement.querySelector(".overlay__form");
  }

  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
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
