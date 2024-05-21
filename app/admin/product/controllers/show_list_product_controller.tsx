import { ProductList } from '#viewsback/pages/products/product_list'
import { HttpContext } from '@adonisjs/core/http'

export default class ShowListProductController {
  constructor() {}

  async render({}: HttpContext) {
    return <ProductList />
  }
}
