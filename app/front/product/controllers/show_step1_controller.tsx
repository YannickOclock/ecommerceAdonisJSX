import { AddProductStep1 } from '#viewsfront/partials/modals/add_product_step_1'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { CartProductRepository } from '#front/product/repositories/cart_product_repository'
import { CartService } from '#front/cart/services/cart_service'

@inject()
export default class ShowStep1Controller {
  constructor(
    private cartProductRepository: CartProductRepository,
    private cartService: CartService
  ) {}

  async render({ request }: HttpContext) {
    const id = request.param('id')
    const productImageId = request.param('productImageId')
    const product = await this.cartProductRepository.findOneById(id)

    return <AddProductStep1 product={product} selectedProductImageId={productImageId} />
  }

  async add({ request, response }: HttpContext) {
    const id = request.input('product_id')
    const quantity = Number.parseInt(request.input('quantity'))
    const product = await this.cartProductRepository.findOneById(id)
    this.cartService.addProduct(product.id, product.name, product.price, quantity)

    console.log(`Add product to cart ${this.cartService.getTotalQuantity()}`)
    response.redirect().toRoute('front.step2', { id: product.id })
  }
}
