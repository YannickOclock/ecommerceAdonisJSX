import router from '@adonisjs/core/services/router'
import edge from 'edge.js'

export function route(...args: Parameters<typeof router.makeUrl>) {
  return router.makeUrl(...args)
}

edge.global('test', function () {
  return 'test'
})
