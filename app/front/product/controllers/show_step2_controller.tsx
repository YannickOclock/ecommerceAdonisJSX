import { AddProductStep2 } from '#viewsfront/partials/modals/add_product_step_2'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class ShowStep2Controller {
  constructor() {}

  async render({}: HttpContext) {
    return <AddProductStep2 />
  }
}
