export default class Api {
  constructor(options) {
    // cuerpo del constructor
    this._baseURL = options.baseUrl;
    this._headers = options.headers;
  }

  _handleFetch(endPoint, method, body) {
    return fetch(this._baseURL + endPoint, {
      method: method,
      headers: this._headers,
      body: body,
      //   body: JSON.stringify({
      //     name: name,
      //     about: about,
      //   }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // si el servidor devuelve un error, rechaza el promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getInitialCards() {
    return this._handleFetch("/cards");
  }

  getInitialUserMe() {
    return this._handleFetch("/users/me");
  }

  patchInitialUserMe(name, about) {
    return this._handleFetch(
      "/users/me",
      "PATCH",
      JSON.stringify({
        name: name,
        about: about,
      })
    );
  }

  postNewCard(name, link) {
    return this._handleFetch(
      "/cards",
      "POST",
      JSON.stringify({
        name: name,
        link: link,
      })
    );
  }

  deleteCard(cardId) {
    return this._handleFetch("/cards/" + cardId, "DELETE");
  }

  putLikeButtonCard(cardId) {
    return fetch(this._baseURL + "/cards/likes/" + cardId, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // si el servidor devuelve un error, rechaza el promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteLikeButtonCard(cardId) {
    return fetch(this._baseURL + "/cards/likes/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // si el servidor devuelve un error, rechaza el promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  updateUserMeAvatar(avatar) {
    return fetch(this._baseURL + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // si el servidor devuelve un error, rechaza el promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
