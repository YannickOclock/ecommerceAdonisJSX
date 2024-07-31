import { ProductList } from '#viewsback/pages/products/product_list'
import { HttpContext } from '@adonisjs/core/http'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class ShowListProductController {
  constructor(private repository: ProductRepository) {}

  async render({}: HttpContext) {
    const products = await this.repository.all()
    return <ProductList products={products} />
  }
}
