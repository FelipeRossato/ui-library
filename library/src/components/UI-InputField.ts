class UIInputField extends HTMLElement {
  static observedAttributes = ['label', 'placeholder', 'value', 'type', 'border-color', 'disabled'];

  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' });
    
    this.render();
  }

  addListener() {
    const input = this.shadowRoot?.querySelector('input');

    input?.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent('inputfield-change', {
        bubbles: true,
        detail: {
          value: input?.value
        }
      }));
    })
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const placeholder = this.getAttribute('placeholder') || 'Enter text';
    const value = this.getAttribute('value') || '';
    const type = this.getAttribute('type') || 'text';
    const borderColor = this.getAttribute('border-color');
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
          width: fit-content;
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
          width: fit-content;
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

    this.addListener();
  }
}

customElements.define('ui-inputfield', UIInputField);

export default UIInputField;