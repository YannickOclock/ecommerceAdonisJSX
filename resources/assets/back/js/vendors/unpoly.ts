import 'unpoly'

declare var up: any

up.log.enable('debug')

/*up.compiler('[up-flashes] > *', function (message: HTMLElement) {
  setTimeout(() => up.destroy(message), 5000)
  const alertCloseButton = message.querySelector('button.close')
  if (alertCloseButton) {
    alertCloseButton.addEventListener('click', () => up.destroy(message))
  }
})*/

up.compiler('[load-fragment]', (el: HTMLElement) => {
  console.log(el)
  up.reload(el)
})
