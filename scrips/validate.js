//activa la validacion de los formularios
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".overlay__form"));
  formList.forEach((formElement) => {
    const oFormValidator = new FormValidator(
      {
        input: ".overlay__text-input",
        button: ".overlay__form-submit-button",
      },
      formElement
    );
    oFormValidator.enableValidation();
  });
}

//se activa la validacion
enableValidation();
