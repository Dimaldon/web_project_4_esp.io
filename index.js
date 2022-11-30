let formElement = document.querySelector(".overlay__form");
let closeButton = document.querySelector(".overlay__form-close-button");
let editButton = document.querySelector(".profile__button-edit");

function openOverlay() {
  let overlayElement = document.querySelector(".overlay");
  overlayElement.classList.add("overlay__visible");
}

function closeOverlay() {
  let overlayElement = document.querySelector(".overlay");
  overlayElement.classList.remove("overlay__visible");
}

function keyPress(evt) {
  if (evt.key === "Escape") {
    closeOverlay();
  }
}

function handleProfileFormSubmit(event) {
  event.preventDefault();

  let nameInput = document.querySelector("input[name='name-input']");
  let jobInput = document.querySelector("input[name='job-input']");

  let nameElement = document.querySelector(".profile__title");
  let jobElement = document.querySelector(".profile__description");

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  closeOverlay();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
closeButton.addEventListener("click", closeOverlay);
editButton.addEventListener("click", openOverlay);
document.addEventListener("keypress", keyPress);
