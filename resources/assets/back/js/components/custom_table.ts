export class CustomTableComponent extends HTMLElement {
  #theadCheckboxElement: HTMLInputElement | null = null
  #tbodyCheckboxElements: NodeListOf<HTMLInputElement> | [] = []
  #deleteButton: HTMLAnchorElement | null = null
  #initDeleteRoute: string | null = null

  constructor() {
    super()
  }
  connectedCallback() {
    this.#theadCheckboxElement = this.querySelector('thead input[data-table-checkbox]')
    this.#tbodyCheckboxElements = this.querySelectorAll('tbody input[data-table-checkbox]')
    this.#deleteButton = this.querySelector('a[data-delete-btn]')
    if (this.#deleteButton) this.#initDeleteRoute = this.#deleteButton.getAttribute('href')

    // Lorsque je coche la case TOUS LES ELEMENTS
    if (this.#theadCheckboxElement) {
      this.#theadCheckboxElement.addEventListener('click', () => {
        this.#toggleElements()
        this.#toggleDeleteButton()
        this.#updateDeleteLink()
      })
    }

    // Lorsque je coche UN ELEMENT
    this.#tbodyCheckboxElements.forEach((checkboxElement) => {
      checkboxElement.addEventListener('click', () => {
        this.#updateDeleteLink()
        this.#toggleDeleteButton()
      })
    })
  }

  /**
   * Renvoi la liste des ids à partir des éléments sélectionnés
   * @private
   * @return Tableau des uuids des éléments sélectionnés
   */
  #getSelectedIds(): string[] {
    const ids: string[] = []
    for (const checkboxElement of Array.from(this.#tbodyCheckboxElements)) {
      const tableLineElement = checkboxElement.closest('tr')
      if (tableLineElement && checkboxElement.checked) {
        const id = tableLineElement.dataset.id
        if (id) ids.push(id)
      }
    }
    return ids
  }

  /**
   * Méthode qui s'occupe de mettre à jour le lien de suppression du tableau
   * @private
   */
  #updateDeleteLink() {
    if (this.#deleteButton && this.#initDeleteRoute) {
      const ids = this.#getSelectedIds()
      const route = this.#initDeleteRoute + `/${ids.join(',')}`
      this.#deleteButton?.setAttribute('href', route)
    }
  }

  #toggleDeleteButton() {
    if (this.#deleteButton) {
      const checkElement = Array.from(this.#tbodyCheckboxElements).find(
        (checkboxElement: { checked: any }) => checkboxElement.checked
      )
      if (checkElement) {
        console.log('un élément est coché !')
        this.#deleteButton.removeAttribute('disabled')
      } else {
        this.#deleteButton.setAttribute('disabled', 'disabled')
      }
    }
  }

  /**
   * Méthode qui s'occupe de cocher/décocher les checkbox de chaque ligne
   * @private
   */
  #toggleElements() {
    this.#tbodyCheckboxElements.forEach((checkboxElement) => {
      if (this.#theadCheckboxElement && !checkboxElement.disabled) {
        checkboxElement.checked = this.#theadCheckboxElement.checked
      }
    })
  }
}

customElements.define('custom-table', CustomTableComponent)
