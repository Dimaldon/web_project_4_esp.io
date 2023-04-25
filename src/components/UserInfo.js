export default class UserInfo {
  constructor({ nameElement, jobElement, imagenElement, name, job, imagen }) {
    this.nameElement = nameElement;
    this.jobElement = jobElement;
    this.imagenElement = imagenElement;
    this.name = name;
    this.job = job;
    this.imagen = imagen;
  }

  getUserInfo() {
    return { name: this.name, job: this.job, imagen: this.imagen };
  }

  setUserInfo({ name, job, imagen }) {
    this.name = name;
    this.job = job;
    this.imagen = imagen;
    this.nameElement.textContent = this.name;
    this.jobElement.textContent = this.job;
    this.imagenElement.src = this.imagen;
  }
}
