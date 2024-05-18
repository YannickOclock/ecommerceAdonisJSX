import 'unpoly'

declare var up: any

up.log.enable('debug')

console.log(document.querySelector('.cart'))

up.compiler('[load-fragment]', (el) => {
  console.log(el)
  up.reload(el)
})
