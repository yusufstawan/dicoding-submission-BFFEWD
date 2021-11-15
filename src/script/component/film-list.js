import "./film-item.js";

class FilmList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set films(films) {
    this._films = films;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._films.forEach((film) => {
      const filmItemElement = document.createElement("film-item");
      filmItemElement.film = film;
      this.shadowDOM.appendChild(filmItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
      .placeholder {
        color: grey;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>
      `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("film-list", FilmList);
