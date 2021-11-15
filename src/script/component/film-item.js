class FilmItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 15px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      .poster-film {
        width: 100%;
        max-height: 400px;
        object-fit: contain;
        object-position: center;
      }
      .detail-film {
        padding: 24px;
        font-size: 15px;
        margin-bottom: 15px;
        text-align: center;
      }
      </style>
      <img class="poster-film" src="${this._film.Poster}" alt="Poster Film">
      <div class="detail-film">
      <h2>${this._film.Title}</h2>
      <h4>Tahun Rilis: ${this._film.Year}</h4>
      <h4>Jenis Film: ${this._film.Type}</h4>
      
      </div>
      `;
  }
}

customElements.define("film-item", FilmItem);
