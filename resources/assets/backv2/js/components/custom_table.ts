export class CustomTableComponent extends HTMLElement {
  #theadCheckboxElement: HTMLInputElement | null
  #tbodyCheckboxElements: NodeListOf<HTMLInputElement> | []

  constructor() {
    super()
    this.#theadCheckboxElement = null
    this.#tbodyCheckboxElements = []
  }
  connectedCallback() {
    this.#theadCheckboxElement = this.querySelector('thead input[data-table-checkbox]')
    this.#tbodyCheckboxElements = this.querySelectorAll('tbody input[data-table-checkbox]')

    if (this.#theadCheckboxElement) {
      this.#theadCheckboxElement.addEventListener('click', () => {
        this.#tbodyCheckboxElements.forEach((checkboxElement) => {
          if (this.#theadCheckboxElement) {
            checkboxElement.checked = this.#theadCheckboxElement.checked
          }
        })
      })
    }
  }
}

customElements.define('custom-table', CustomTableComponent)
