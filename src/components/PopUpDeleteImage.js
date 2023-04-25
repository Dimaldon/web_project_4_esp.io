import Popup from "./Popup";

export default class PopUpDeleteImage extends Popup {
  constructor(overlayElement) {
    super(overlayElement);
    this._handleImageFormDelete;
  }

  setHandleImageFormDelete(handleAction) {
    this._handleImageFormDelete = handleAction;
  }

  setEventListeners() {
    super.setEventListeners();
    document.querySelector("#FormCardDelete").addEventListener("submit", () => {
      this._handleImageFormDelete();
    });
  }
}
