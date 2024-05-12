import { HttpContext } from '@adonisjs/core/http'

export function getFlashMessages() {
  // Note the usage of ALS here.
  const { session } = HttpContext.getOrFail()

  return session.flashMessages
}
