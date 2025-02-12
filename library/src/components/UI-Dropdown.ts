class UIDropdown extends HTMLElement {
  static observedAttributes = ['label', 'options', 'selected', 'border-color', 'disabled'];

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
    this.shadowRoot?.querySelector('select')?.addEventListener('change', (event) => {
      const selectedValue = (event.target as HTMLSelectElement).value;
      
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: selectedValue },
        bubbles: true,
        composed: true
      }));
    });
  }
  
  attributeChangedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute('label') || 'Select an option';
    const options = JSON.parse(this.getAttribute('options') || '[]');
    const selected = this.getAttribute('selected') || '';
    const borderColor = this.theme[this.getAttribute('border-color') as keyof typeof this.theme] || this.theme.primary;
    const disabled = this.getAttribute('disabled') === 'true';
  
    this.shadowRoot!.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
        }
  
        .dropdown-container {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 600px;
        }
  
        label {
          font-size: 14px;
          font-weight: bold;
        }

        select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          border: 2px solid darkgray;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          font-size: 16px;
          max-width: 600px;
          padding: 12px;
          width: 100%;
          transition: all 0.3s ease-in-out;
          background: white;
          cursor: pointer;

          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M7 10l5 5 5-5z"/></svg>');
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 20px;
          padding-right: 50px;
        }

        select:focus {
          border-color: ${borderColor};
          outline: none;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        select:disabled {
          cursor: not-allowed;
          box-shadow: none;
          opacity: 0.6;
        }

        select::-webkit-scrollbar {
          width: 8px;
        }

        select::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        select::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 8px;
        }

        select option {
          padding: 10px;
          border-radius: 8px;
          transition: background 0.3s ease-in-out;
        }

        select option:hover {
          background: lightgray;
        }
      </style>
  
      <div class="dropdown-container">
        <label for="dropdown-field">${label}</label>
        <select id="dropdown-field" ${disabled ? 'disabled' : ''}>
          ${options.map((opt: string) => `<option value="${opt}" ${opt === selected ? 'selected' : ''}>${opt}</option>`).join('')}
        </select>
      </div>
    `;
  }    
}

customElements.define('ui-dropdown', UIDropdown);

export default UIDropdown;
