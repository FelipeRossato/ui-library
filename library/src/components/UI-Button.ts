class UIButton extends HTMLElement {
  static observedAttributes = ["icon", "label", "color"];

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.preloadFont().then(() => {
      this.render();
    });
  }

  attributeChangedCallback() {
    this.render();
  }

  async preloadFont() {
    let link: HTMLLinkElement | null = document.querySelector(
      "#material-icons-font",
    );

    if (!link) {
      link = document.createElement("link");
      link.id = "material-icons-font";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
      document.head.appendChild(link);
    }

    return new Promise<void>((resolve) => {
      link!.onload = () => resolve();
    });
  }

  render() {
    const icon = this.getAttribute("icon") || "add";
    const label = this.getAttribute("label") || "Adicionar";
    const color = this.getAttribute("color");

    this.shadowRoot!.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        
        button {
          align-items: center;
          background: ${color};
          border: none;
          border-radius: 23px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          color: white;
          cursor: pointer;
          display: flex;
          font-size: 14px;
          font-weight: 600;
          gap: 6px;
          padding: 7px 14px;
          position: relative;
          text-decoration: none;
          transition: all 0.25s ease;
          user-select: none;
          width: fit-content;

          &:hover:enabled {
            transform: scale(1.05);
          }
        }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-size: 18px;
        }
      </style>

      <button>
        <span class="material-symbols-outlined">${icon}</span>
        <span>${label}</span>
      </button>
    `;
  }
}

customElements.define("ui-button", UIButton);

export default UIButton;
