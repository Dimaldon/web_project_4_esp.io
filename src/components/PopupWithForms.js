import Popup from "./Popup";

class PopupWithForms extends Popup {
  constructor(overlayElement, handleFormSubmit) {
    super(overlayElement);
    this.handleFormSubmit = handleFormSubmit;
    this.formImputs = overlayElement.querySelectorAll(".overlay__text-input");
    this.formElement = overlayElement.querySelector(".overlay__form");
  }

  _getInputValues() {
    this.formImputs.map((eInput) => {
      return eInput.value;
    });
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
