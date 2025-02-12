class UIButton extends HTMLElement {
  static observedAttributes = ['icon', 'label', 'color'];

  private theme = {
    primary: 'rgb(20, 197, 109)',
    secondary: 'rgb(100, 122, 152)',
    danger: 'rgb(255, 39, 89)',
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.preloadFont().then(() => {
      this.render();
      
      this.addListener();
    });
  }

  addListener() {
    const button = this.shadowRoot?.querySelector('button');
    
    button?.addEventListener('click', (event) => {
      const selectedValue = (event.target as HTMLButtonElement).innerText;
      
      this.dispatchEvent(new CustomEvent('custom-click', {
        detail: { value: selectedValue },
        bubbles: true,
        composed: true
      }));
    });
  } 

  attributeChangedCallback() {
    this.render();
  }

  async preloadFont() {
    let link: HTMLLinkElement | null = document.querySelector("#material-icons-font");

    if (!link) {
      link = document.createElement('link');
      link.id = "material-icons-font";
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
      document.head.appendChild(link);
    }
    
    return new Promise<void>((resolve) => {
      link!.onload = () => resolve();
    });
  }

  render() {
    const icon = this.getAttribute('icon') || 'add';
    const label = this.getAttribute('label') || 'Button';
    const color = this.theme[this.getAttribute('color') as keyof typeof this.theme] || this.theme.primary;

    this.shadowRoot!.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
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
          padding: 7px 20px;
          position: relative;
          text-decoration: none;
          transition: all 0.25s ease;
          user-select: none;
          width: fit-content;

          &:hover:enabled {
            filter: brightness(120%);
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

customElements.define('ui-button', UIButton);

export default UIButton;
