// src/components/header-component.js

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <link rel="stylesheet" href="style.css">
      <header>
        <div>
          <span class="logo">
            <img src="img/devLesego2.png" alt="">
          </span>
        </div>
        <button class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
        </button>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
            <li class="nav__item"><a href="services.html" class="nav__link">My Services</a></li>
            <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
            <li class="nav__item"><a href="work.html" class="nav__link">My Work</a></li>
          </ul>
        </nav>
      </header>
    `;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );

    // Access shadow DOM elements
    this.navToggle = this.shadowRoot.querySelector(".nav-toggle");
    this.nav = this.shadowRoot.querySelector(".nav");

    // Toggle navigation visibility
    this.navToggle.addEventListener("click", () => {
      this.nav.classList.toggle("nav--visible");
    });
  }
}

customElements.define("header-component", HeaderComponent);
