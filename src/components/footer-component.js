class FooterComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <link rel="stylesheet" href="style.css">
      <footer class="footer fade-in">
        <!-- Replace with your own email address -->
        <a href="mailto:lesshange@gmail.com" class="footer__link">lesshange@gmail.com</a>
        <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="https://codepen.io/Lesego-Shange">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://www.linkedin.com/in/lesego-shange-442b62230/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://twitter.com/shangeATL">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com/Lesego-Shange">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    `;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}

customElements.define("footer-component", FooterComponent);
