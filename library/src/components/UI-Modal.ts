class UIModal extends HTMLElement {
  static observedAttributes = ['open', 'title', 'message', 'color'];

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.render();
  }

  addListener() {
    const closeButton = this.shadowRoot!.querySelector('.close-button');
    const confirmButton = this.shadowRoot!.querySelector('.confirm-button');

    closeButton?.addEventListener('click', () => {
      this.close();
    });

    confirmButton?.addEventListener('click', () => {
      this.close();
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
    const title = this.getAttribute('title') || 'Título da modal';
    const message = this.getAttribute('message') || 'Mensagem da modal.';
    const color = this.getAttribute('color');

    this.shadowRoot!.innerHTML = `
      <style>
      * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      dialog {
        background: white;
        border: none;
        border-radius: 12px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        opacity: 0;
        padding: 20px;
        transform: translate(-50%, -50%) scale(0.8);
        transition: opacity 0.3s ease, transform 0.3s ease;
        width: 400px;
        z-index: 1000;
        position: fixed;
        top: 50%;
        left: 50%;
      }

      dialog[open] {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }

      .modal-header {
        align-items: center;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        padding-bottom: 10px;
      }

      .modal-header h2 {
        font-size: 16px;
      }

      .modal-body {
        font-size: 12px;
        margin-bottom: 16px;
      }

      .modal-footer {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
      }

      .close-button {
        cursor: pointer;
        font-size: 12px;
        color: gray;
        transition: all 0.3s;

        &:hover {
        color: black;
        }
      }

      .confirm-button {
        background: ${color};
        color: white;
        border: none;
        border-radius: 8px;
        padding: 6px 12px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .confirm-button:hover {
        filter: brightness(120%);
      }

      </style>

      <dialog ${isOpen ? 'open' : ''}>
      <div class="modal-header">
        <h2>${title}</h2>
        
        <span class="close-button">x</span>
      </div>

      <div class="modal-body">
        <p>${message}</p>
      </div>

      <div class="modal-footer">
        <button class="confirm-button">Confirmar</button>
      </div>
      </dialog>
    `;

    this.addListener();
  }
}

customElements.define('ui-modal', UIModal);

export default UIModal;
