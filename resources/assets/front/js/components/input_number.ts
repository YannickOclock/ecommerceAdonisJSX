// Gérer les champs numériques (utilisé dans les modales produits)

export class InputNumber {
  inputValue: number

  constructor(inputValue = 1) {
    this.inputValue = inputValue
  }

  add() {
    if (this.inputValue >= 0) {
      this.inputValue++
    }
  }

  substract() {
    if (this.inputValue > 1) {
      this.inputValue--
    }
  }

  handleAddClick(e) {
    e.preventDefault()
    this.add()
    const inputGroup = e.currentTarget.closest('.input-group')
    const inputNumber = inputGroup.querySelector('input')
    inputNumber.value = this.inputValue
  }

  handleSubstractClick(e) {
    e.preventDefault()
    this.substract()
    const inputGroup = e.currentTarget.closest('.input-group')
    const inputNumber = inputGroup.querySelector('input')
    inputNumber.value = this.inputValue
  }

  initTouchButtons(formElement) {
    const touchUpButton = formElement.querySelector('.touch-up')
    const touchDownButton = formElement.querySelector('.touch-down')
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
