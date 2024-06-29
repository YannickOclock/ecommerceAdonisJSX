import { HttpContext } from '@adonisjs/core/http'
import { CartProductRepository } from '#front/cart/repositories/cart_product_repository'
import { CartService } from '#front/cart/services/cart_service'
import { inject } from '@adonisjs/core'
import { updateQuantityCartValidator } from '#front/cart/validators/update_quantity_cart_validator'

@inject()
export default class UpdateQuantityCartController {
  constructor(
    private cartService: CartService,
    private cartProductRepository: CartProductRepository
  ) {}

  async handle({ request, response }: HttpContext) {
    const payload = await request.validateUsing(updateQuantityCartValidator)

    // Voir si le produit existe
    const product = await this.cartProductRepository.findOneById(payload.productId)
    if (!product) {
      return
    }

    // Voir si le produit est déjà présent ou non dans le panier
    this.cartService.addProduct(
      payload.productId,
      product.name,
      product.price,
      payload.lessOrMore === 'less' ? -1 : 1
    )

    // redirection vers le panier
    response.redirect().toRoute('front.cart')
  }
}
