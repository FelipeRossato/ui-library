class UICard extends HTMLElement {
  static observedAttributes = [
    "image",
    "title",
    "description",
    "color",
    "title-color",
    "description-color",
  ];

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const image = this.getAttribute("image") || "";
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";
    const color = this.getAttribute("color") || "white";
    const titleColor = this.getAttribute("title-color") || "black";
    const descriptionColor = this.getAttribute("description-color") || "gray";

    this.shadowRoot!.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
          background: ${color};
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 300px;
        }

        .card img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .card h3 {
          margin: 10px 0;
          font-size: 16px;
          font-weight: bold;
          color: ${titleColor};
        }

        .card p {
          text-align: left;
          font-size: 12px;
          color: ${descriptionColor};
        }

        .actions {
          margin-top: 10px;
        }
      </style>

      <div class="card">
        ${image ? `<img src="${image}" alt="${title}" />` : ""}

        <h3>${title}</h3>

        ${description ? `<p>${description}</p>` : ""}

        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("ui-card", UICard);
