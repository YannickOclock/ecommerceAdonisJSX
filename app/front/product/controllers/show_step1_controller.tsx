import { AddProductStep1 } from '#viewsfront/partials/modals/add_product_step_1'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { cart } from '#front/cart_state'
import { CartProductRepository } from '#front/product/repositories/cart_product_repository'

@inject()
export default class ShowStep1Controller {
  constructor(private cartProductRepository: CartProductRepository) {}

  async render({ request }: HttpContext) {
    const id = request.param('id')
    const product = await this.cartProductRepository.findOneById(id)

    return <AddProductStep1 product={product} />
  }

  async add({ request, response }: HttpContext) {
    const id = request.input('product_id')
    const quantity = Number.parseInt(request.input('quantity'))
    const product = await this.cartProductRepository.findOneById(id)
    cart.addProduct(product.id, product.name, product.price, quantity)

    console.log(`Add product to cart ${cart.getTotalQuantity()}`)
    response.redirect().toRoute('front.step2', { id: product.id })
  }
}
