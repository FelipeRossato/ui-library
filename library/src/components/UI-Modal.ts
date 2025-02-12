class UIModal extends HTMLElement {
  static observedAttributes = ['open', 'title', 'message', 'theme'];

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

  addListeners() {
    const dialog = this.shadowRoot!.querySelector('dialog');
    const closeBtns = this.shadowRoot!.querySelectorAll('.close-btn');
  
    closeBtns.forEach((btn) => {      
      btn.addEventListener('click', () => {
        this.close();
      });
    });
  
    dialog?.addEventListener('click', (event) => {
      if (event.target === dialog) this.close();
    });
  }

  attributeChangedCallback() {
    this.render();
  }

  open() {
    const dialog = this.shadowRoot!.querySelector('dialog');
    if (dialog) dialog.showModal();
    this.setAttribute('open', 'true');
  }

  close() {
    const dialog = this.shadowRoot!.querySelector('dialog');
    
    if (dialog) dialog.close();
    
    this.removeAttribute('open');
  }

  render() {
    const isOpen = this.hasAttribute('open');
    const title = this.getAttribute('title') || 'Modal Title';
    const message = this.getAttribute('message') || 'This is a modal message.';
    const themeColor = this.theme[this.getAttribute('theme') as keyof typeof this.theme] || this.theme.primary;

    this.shadowRoot!.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
        }

        dialog {
          width: 400px;
          border: none;
          border-radius: 12px;
          padding: 20px;
          background: white;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 1000;
        }

        dialog[open] {
          opacity: 1;
          transform: translateY(0);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }

        .modal-header h2 {
          font-size: 18px;
          color: ${themeColor};
        }

        .modal-body {
          font-size: 14px;
          margin-bottom: 16px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .close-btn {
          background: ${themeColor};
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 16px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .close-btn:hover {
          filter: brightness(120%);
        }

      </style>

      <dialog ${isOpen ? 'open' : ''}>
        <div class="modal-header">
          <h2>${title}</h2>
          <button class="close-btn">X</button>
        </div>
        <div class="modal-body">
          <p>${message}</p>
        </div>
        <div class="modal-footer">
          <button class="close-btn">Close</button>
        </div>
      </dialog>
    `;

    this.addListeners();
  }
}

customElements.define('ui-modal', UIModal);

export default UIModal;
