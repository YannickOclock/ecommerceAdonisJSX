import 'unpoly'

declare var up: any

up.log.enable('debug')

up.compiler('[load-fragment]', (el) => {
  console.log(el)
  up.reload(el)
})
