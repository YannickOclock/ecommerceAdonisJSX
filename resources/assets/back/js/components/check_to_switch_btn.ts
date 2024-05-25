// -- switch du bouton
const checkboxToSwitchBtn = {
  // -- classes
  onClass: 'ps-switch--on',
  parentClass: 'parent-switch',

  // -- comportement du click du switch (lorsqu'il est activé)
  handleSwitchButton: function (e: MouseEvent): void {
    const el = e.currentTarget as HTMLElement
    if (el) {
      el.classList.toggle(checkboxToSwitchBtn.onClass)
      // il faudra un module pour définir le parent en amont !
      const parentEl = el.closest('.' + checkboxToSwitchBtn.parentClass)
      if (parentEl) {
        const inputEl = parentEl.querySelector('input[type=checkbox]') as HTMLInputElement
        if (inputEl) {
          // lancer l'action d'update en backend (s'il est défini dans l'élément html)
          console.log(inputEl.dataset.href)
          //if (inputEl.dataset.href !== undefined) updateComponent.updateBackendAction(inputEl)
          // on met enfin à jour la vrai checkbox
          inputEl.checked = !inputEl.checked
        }
      }
    }
  },

  // -- construction des switch (plus fun)
  createPsSwitchEl: function (btnState = false, btnEnabled = true): HTMLDivElement {
    const psSwitchEl = document.createElement('div')
    psSwitchEl.classList.add('ps-switch')

    // Son état doit être par défaut activé/désactivé ?
    if (btnState) psSwitchEl.classList.add(checkboxToSwitchBtn.onClass)

    const stateEl = document.createElement('div')
    stateEl.classList.add('state')

    // Doit-on activer le comportement du bouton ?
    if (btnEnabled) psSwitchEl.addEventListener('click', checkboxToSwitchBtn.handleSwitchButton)

    psSwitchEl.append(stateEl)

    return psSwitchEl
  },

  // -- création des switchs dans les formulaires (à partir des checkbox)
  createFormSwitchBtn: function (): void {
    // -- chercher tous les input checkbox, dans le formulaire admin pour les remplacer
    const inputEls = document.querySelectorAll(
      'form input[type=checkbox]'
    ) as NodeListOf<HTMLInputElement>

    for (const inputEl of [...Array.from(inputEls)]) {
      inputEl.style.display = 'none'
      const inputFormEl = inputEl.closest('div')
      if (inputFormEl) {
        inputFormEl.classList.add('parent-switch')
        // création de bouton activé, en écriture (2ème paramètre)
        inputFormEl.append(checkboxToSwitchBtn.createPsSwitchEl(inputEl.checked, true))
      }
    }
  },

  // -- création des switchs dans les tables (à partir des checkbox)
  createTableSwitchBtn: function (): void {
    // -- chercher tous les input checkbox pour les remplacer (dans les tables admin)
    const inputEls = document.querySelectorAll(
      'input.form-check-input'
    ) as NodeListOf<HTMLInputElement>

    for (const inputEl of [...Array.from(inputEls)]) {
      inputEl.style.display = 'none'
      const tdEl = inputEl.closest('td')
      if (tdEl) {
        tdEl.classList.add('parent-switch')
        // création de bouton  activés, en écriture (2ème paramètre)
        tdEl.append(checkboxToSwitchBtn.createPsSwitchEl(inputEl.checked, true))
      }
    }
  },

  // -- fonction init
  init: function (): void {
    checkboxToSwitchBtn.createFormSwitchBtn()
    checkboxToSwitchBtn.createTableSwitchBtn()
  },
}

checkboxToSwitchBtn.init()
