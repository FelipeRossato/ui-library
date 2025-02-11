class UIInputField extends HTMLElement {
  static observedAttributes = ['label', 'placeholder', 'value', 'type', 'border-color', 'disabled'];

  private theme = {
    primary: 'rgb(20, 197, 109)',
    secondary: 'rgb(100, 122, 152)',
    danger: 'rgb(255, 39, 89)',
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.shadowRoot?.querySelector('input')?.addEventListener('input', (event) => {
      const inputEvent = new CustomEvent('custom-input', {
        detail: { value: (event.target as HTMLInputElement).value }
      });
      this.dispatchEvent(inputEvent);
    });
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const placeholder = this.getAttribute('placeholder') || 'Enter text';
    const value = this.getAttribute('value') || '';
    const type = this.getAttribute('type') || 'text';
    const borderColor = this.theme[this.getAttribute('border-color') as keyof typeof this.theme] || this.theme.primary;
    const disabled = this.getAttribute('disabled') === 'true';
    const label = this.getAttribute('label') || 'Input Field';

    this.shadowRoot!.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
        }

        .input-container {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 600px;
        }

        label {
          font-size: 14px;
          font-weight: bold;
        }

        input {
          border: 2px solid darkgray;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          font-size: 16px;
          max-width: 600px;
          padding: 12px;
          width: 100%;
          transition: all 0.3s ease-in-out;
        }

        input::placeholder {
          font-style: italic;
          transition: color 0.3s ease-in-out;
          opacity: 0.6;
        }

        input:focus {
          border-color: ${borderColor};
          outline: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        input:disabled {
          cursor: not-allowed;
          box-shadow: none;
        }
      </style>

      <div class="input-container">
        <label for="input-field">${label}</label>
        <input id="input-field" type="${type}" placeholder="${placeholder}" value="${value}" ${disabled ? 'disabled' : ''} />
      </div>
    `;
  }
}

customElements.define('ui-inputfield', UIInputField);

export default UIInputField;