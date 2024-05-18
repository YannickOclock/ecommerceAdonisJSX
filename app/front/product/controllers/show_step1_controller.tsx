import { AddProductStep1 } from '#viewsfront/partials/modals/add_product_step_1'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { cart } from '#front/cart_state'

@inject()
export default class ShowStep1Controller {
  constructor() {}

  async render({}: HttpContext) {
    return <AddProductStep1 />
  }

  async add({ response }: HttpContext) {
    cart.nbProducts++
    console.log(`Add product to cart ${cart.nbProducts}`)
    response.redirect().toRoute('front.step2')
  }
}
