import { AddProductStep2 } from '#viewsfront/partials/modals/add_product_step_2'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { CartProductRepository } from '#front/product/repositories/cart_product_repository'
import { CartService } from '#front/cart/services/cart_service'

@inject()
export default class ShowStep2Controller {
  constructor(
    private cartProductRepository: CartProductRepository,
    private cartService: CartService
  ) {}

  async render({ request }: HttpContext) {
    const id = request.param('id')
    const product = await this.cartProductRepository.findOneById(id)

    const data = {
      totalQuantityProduct: this.cartService.getTotalQuantityOfProduct(product.id),
      totalQuantityCart: this.cartService.getTotalQuantity(),
      totalPriceCart: this.cartService.getTotal(),
    }

    return <AddProductStep2 {...data} product={product} />
  }
}
