class FooterBar extends HTMLElement {
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
      }
      p {
        display: block;
        width: 100%;
        background-color: #161E54;
        color: #FF9B6A;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
        padding: 8px;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        font-family: 'M PLUS 1', sans-serif;
        border-radius: 8px 8px 0px 0px;
        position: absolute;
        bottom: 0px;
      }
    </style>
    <p>Tugas Submission <a href="https://github.com/yusufstawan">@yusufstawan</a> "Belajar Fundamental Front-End Web Development" &copy; 2021, Dicoding Academy</p>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
