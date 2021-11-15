class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
           * {
             margin: 0;
             padding: 0;
             box-sizing: border-box;
             font-family: "Bebas Neue", cursive;
           }
           :host {
             display: block;
             width: 100%;
             background-color: #161E54;
             color: #FF9B6A;
             box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
             border-radius: 0px 0px 8px 8px;
           }
           h1 {
             padding: 15px;
             text-align: center;
             letter-spacing: 4px;
             font-size: 40px;
           }
        </style>
        <h1>Dicoding Movie</h1>
    `;
  }
}

customElements.define("app-bar", AppBar);
