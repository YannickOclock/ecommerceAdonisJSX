import { AddProductStep2 } from '#viewsfront/partials/modals/add_product_step_2'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { cart } from '#app/front/cart_state'
import { CartProductRepository } from '#front/product/repositories/cart_product_repository'

@inject()
export default class ShowStep2Controller {
  constructor(private cartProductRepository: CartProductRepository) {}

  async render({ request }: HttpContext) {
    const id = request.param('id')
    const product = await this.cartProductRepository.findOneById(id)
    return <AddProductStep2 cart={cart} product={product} />
  }
}
