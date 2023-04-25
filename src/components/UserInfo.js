class UserInfo {
  constructor({ nameElement, jobElement }) {
    this.nameElement = nameElement;
    this.jobElement = jobElement;
    this.name = "Jacques Cousteau";
    this.job = "Explorador";
  }

  getUserInfo() {
    return { name: this.name, job: this.job };
  }

  setUserInfo({ name, job }) {
    this.name = name;
    this.job = job;
    this.nameElement.textContent = this.name;
    this.job.textContent = this.job;
  }
}
