const formElement = document.querySelector(".overlay__form");
const closeButton = document.querySelector(".overlay__form-close-button");
const editButton = document.querySelector(".profile__button-edit");

function openOverlay() {
  const overlayElement = document.querySelector(".overlay");
  overlayElement.classList.add("overlay__visible");
}

function closeOverlay() {
  const overlayElement = document.querySelector(".overlay");
  overlayElement.classList.remove("overlay__visible");
}

function keyPress(evt) {
  if (evt.key === "Escape") {
    closeOverlay();
  }
}

function handleProfileFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.querySelector("input[name='name-input']");
  const jobInput = document.querySelector("input[name='job-input']");

  const nameElement = document.querySelector(".profile__title");
  const jobElement = document.querySelector(".profile__description");

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  closeOverlay();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
closeButton.addEventListener("click", closeOverlay);
editButton.addEventListener("click", openOverlay);
document.addEventListener("keypress", keyPress);
