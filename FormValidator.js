class FormValidator {
  constructor(oValidateInputs, eValidateForm) {
    this.oValidateInputs = oValidateInputs;
    this.eValidateForm = eValidateForm;
  }

  _showInputError = (inputElement, errorMessage) => {
    this.errorElement = this.eValidateForm.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add("form__input_type_error");
    this.errorElement.textContent = errorMessage;
    this.errorElement.classList.add("form__input-error_active");
  };

  _hideInputError = (inputElement) => {
    this.errorElement = this.eValidateForm.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove("form__input_type_error");
    this.errorElement.classList.remove("form__input-error_active");
    this.errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add("overlay__form-button-disabled");
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove("overlay__form-button-disabled");
      this.buttonElement.disabled = false;
    }
  };

  _setEventListeners = () => {
    const fv = this;
    this.inputList = Array.from(
      this.eValidateForm.querySelectorAll(this.oValidateInputs.input)
    );
    this.buttonElement = this.eValidateForm.querySelector(
      this.oValidateInputs.button
    );

    //desactiva el boton de submit
    this._toggleButtonState();

    //agrega los eventos de escucha a cada input
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        fv._checkInputValidity(inputElement);
        fv._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this.eValidateForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    //establece los eventos de escucha para cada formulario
    this._setEventListeners();
  }
}

/*
oValidateInputs={
    input:".overlay__text-input",
    button:".overlay__form-submit-button"
}
*/
