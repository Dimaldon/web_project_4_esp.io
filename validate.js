//funcion para mostrar el error
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

//funcion para ocultar el error
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

//funcion para validar el input
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//funcion para validar si algun input es invalido
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//activa o desactiva el boton de submit
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("overlay__form-button-disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("overlay__form-button-disabled");
    buttonElement.disabled = false;
  }
};

//establece los eventos de escucha para los inputs y el boton
const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".overlay__text-input")
  );
  const buttonElement = formElement.querySelector(
    ".overlay__form-submit-button"
  );

  //desactiva el boton de submit
  toggleButtonState(inputList, buttonElement);

  //agrega los eventos de escucha a cada input
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//activa la validacion de los formularios
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".overlay__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    //establece los eventos de escucha para cada formulario
    setEventListeners(formElement);
  });
}

//se activa la validacion
enableValidation();
