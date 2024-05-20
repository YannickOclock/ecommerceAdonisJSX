// Gérer les champs numériques (utilisé dans les modales produits)

export class InputNumber {
  constructor(private inputValue = 1) {}

  add(): void {
    if (this.inputValue >= 0) {
      this.inputValue++
    }
  }

  substract(): void {
    if (this.inputValue > 1) {
      this.inputValue--
    }
  }

  handleAddClick(e: SubmitEvent): void {
    e.preventDefault()
    this.add()
    const formElement = e.currentTarget as HTMLFormElement
    const inputGroup = formElement.closest('.input-group')
    const inputNumber = inputGroup.querySelector('input')
    inputNumber.value = this.inputValue.toString()
  }

  handleSubstractClick(e: SubmitEvent): void {
    e.preventDefault()
    this.substract()
    const formElement = e.currentTarget as HTMLFormElement
    const inputGroup = formElement.closest('.input-group')
    const inputNumber = inputGroup.querySelector('input')
    inputNumber.value = this.inputValue.toString()
  }

  initTouchButtons(document: Document): void {
    const touchUpButton = document.querySelector('.touch-up')
    const touchDownButton = document.querySelector('.touch-down')
    if (touchUpButton !== null && touchDownButton !== null) {
      touchUpButton.addEventListener('click', this.handleAddClick.bind(this))
      touchDownButton.addEventListener('click', this.handleSubstractClick.bind(this))
    }
  }
}

const formElement = document.getElementById('cartModalForm')
if (formElement !== null) {
  const inputNumber = new InputNumber()
  inputNumber.initTouchButtons(document)
}
