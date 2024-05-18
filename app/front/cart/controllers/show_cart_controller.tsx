import { Cart } from '#viewsfront/partials/cart'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

const cart = {
  nbProducts: 2,
}

@inject()
export default class ShowHomeController {
  constructor() {}

  async render({}: HttpContext) {
    const nbProducts = cart.nbProducts
    return <Cart nbProducts={nbProducts} />
  }

  async add({}: HttpContext) {
    cart.nbProducts++
    console.log(`Add product to cart ${cart.nbProducts}`)
    return cart.nbProducts
  }
}
