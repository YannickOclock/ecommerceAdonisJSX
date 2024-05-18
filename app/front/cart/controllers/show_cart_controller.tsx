import { Cart } from '#viewsfront/partials/cart'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { cart } from '#front/cart_state'

@inject()
export default class ShowHomeController {
  constructor() {}

  async render({}: HttpContext) {
    const nbProducts = cart.getTotalQuantity()
    return <Cart nbProducts={nbProducts} />
  }
}
