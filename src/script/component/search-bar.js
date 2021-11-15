class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
         <style>
         .search-container {
           max-width: 800px;
           background-color: #2F86A6;
           padding: 15px;
           box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
           border-radius: 25px;
           display: flex;
           position: sticky;
           top: 10px;
         }
         .search-container > input {
           width: 80%;
           padding: 15px;
           border: 0;
           border-radius: 5px;
         }
         .search-container > input:focus {
          outline: 0;
          border-bottom: 1px solid #161E54;
        }
        .search-container >  input::placeholder {
          color: grey;
        }
        .search-container > button {
          width: 20%;
          cursor: pointer;
          margin-left: auto;
          padding: 10px;
          background-color: #161E54;
          color: #FF9B6A;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          font-size: 18px;
        }
        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: column;
            position: static;
          }
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
          .search-container > button {
            width: 100%;
          }
        }
         </style>
         <div id="search-container" class="search-container">
             <input placeholder="Cari judul film" id="searchElement" type="search">
             <button id="searchButtonElement" type="submit">Search</button>
         </div>
         `;
    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
