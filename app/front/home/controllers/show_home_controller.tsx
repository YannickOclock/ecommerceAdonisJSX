import { Home } from '#viewsfront/pages/home/home'
import { HttpContext } from '@adonisjs/core/http'

export default class ShowHomeController {
  constructor() {}

  async render({}: HttpContext) {
    return <Home />
  }
}
