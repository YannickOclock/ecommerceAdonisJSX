import { ProductAdd } from '#viewsback/pages/products/product_add'
import { HttpContext } from '@adonisjs/core/http'

export default class AddProductController {
  constructor() {}

  async render({}: HttpContext) {
    return <ProductAdd />
  }
}
