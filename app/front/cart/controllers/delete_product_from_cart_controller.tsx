import { CartService } from '#front/cart/services/cart_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { DeleteModal } from '#viewsfront/pages/cart/modals/delete_modal'
import { deleteProductFromCartValidator } from '#front/cart/validators/delete_product_from_cart_validator'

@inject()
export default class DeleteProductFromCartController {
  constructor(private cartService: CartService) {}

  render({ request }: HttpContext) {
    const productId = request.param('productId')
    return <DeleteModal productId={productId} />
  }

  async handle({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(deleteProductFromCartValidator)
    this.cartService.deleteProduct(payload.productId)
    session.flash('notification', {
      type: 'success',
      message: 'Produit supprimé avec succès',
    })
    response.redirect().toRoute('front.cart')
  }
}
