class CardBox extends HTMLElement {
  get title() {
    return this.getAttribute("title")
  }

  get content() {
    return this.getAttribute("content");
  }

  get actions() {
    return this.getAttribute("actions");
  }

  get timestamp() {
    return this.getAttribute("time");
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: "open",
    });

    shadowRoot.innerHTML = `
        <style>
            :host {
                contain: content;
            }

            p {
                margin: 0;
            }

            .title {
                margin: 0 0 0.75rem 0;
                font-size: 1.375rem;
            }

            .content {
                font-size: 0.90rem;
                color: #333333;
                font-weight: 500;
                max-width: 100%;
                line-height: 1.35;
            }

            .action {
                border-radius: 25px;
                outline: none;
                border: none;
                padding: 0.5rem 0.75rem;
                margin: 0 0.5rem 0.5rem 0;
                background: #049CE4;
                color: white;
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                font: inherit;
            }
            
            .action:hover {
                background: black;
                color: white;
            }

            .actions {
                padding-top: 1rem;
                font-size: 0.85rem;
            }
        </style>
        
        <div class="container">
            <h6 class="title"></h6>
            <p class="content"></p>
            <div class="actions buttons"></div>
        <div>
    `;

    this.card = this.shadowRoot.querySelector(".container");
    const fields = {
        title: this.card.querySelector('.title'),
        content: this.card.querySelector('.content'),
        actions: this.card.querySelector('.actions'),
    }
    requestAnimationFrame(() => {
        fields.title.innerText = this.title
        fields.content.innerText = this.content
        this.actions.split(',').forEach(action => {
            const btn = document.createElement("button");
            btn.innerText = action.trimStart()
            btn.classList.add('action')
            fields.actions.appendChild(btn)
        })
    })
  }
}

customElements.define("card-box", CardBox);
