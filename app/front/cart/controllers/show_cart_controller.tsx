import { Cart } from '#viewsfront/pages/cart/cart'
import { CartProductRepository } from '#front/cart/repositories/cart_product_repository'
import { CartService } from '#front/cart/services/cart_service'
import { inject } from '@adonisjs/core'

@inject()
export default class ShowCartController {
  constructor(
    private cartService: CartService,
    private cartProductRepository: CartProductRepository
  ) {}

  async render() {
    const productIds = this.cartService.getProductIds()

    // il faut que je construise un tableau avec les infos des produits et quantité associée
    const products = await this.cartProductRepository.findAllByCartProductIds(productIds)
    const cartProducts = []
    for (const product of products) {
      const quantity = this.cartService.getProduct(product.id)?.quantity ?? 0
      cartProducts.push({
        product: product,
        quantity,
        totalPrice: product.price * quantity,
      })
    }

    const data = {
      totalQuantityCart: this.cartService.getTotalQuantity(),
      totalPriceCart: this.cartService.getTotal(),
      cartProducts,
    }

    return <Cart {...data} />
  }
}
