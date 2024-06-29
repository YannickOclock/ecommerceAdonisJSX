import { CartCounter } from '#viewsfront/partials/cart_counter'
import { CartService } from '#front/cart/services/cart_service'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class ShowCartCounterController {
  constructor(private cartService: CartService) {}

  async render({}: HttpContext) {
    const nbProducts = this.cartService.getTotalQuantity()
    return <CartCounter nbProducts={nbProducts} />
  }
}
