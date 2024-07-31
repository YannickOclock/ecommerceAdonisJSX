export class CustomAlertComponent extends HTMLElement {
  #timeoutId: NodeJS.Timeout | null

  constructor() {
    super()
    this.#timeoutId = null
  }

  connectedCallback() {
    const buttonCloseElement: HTMLButtonElement | null = this.querySelector('button.close')
    this.#timeoutId = setTimeout(() => this.remove(), 5000)
    if (buttonCloseElement) {
      buttonCloseElement.addEventListener('click', () => {
        this.remove()
      })
    }
  }

  disconnectedCallback() {
    if (this.#timeoutId) {
      clearTimeout(this.#timeoutId)
    }
  }
}
customElements.define('custom-alert', CustomAlertComponent)
