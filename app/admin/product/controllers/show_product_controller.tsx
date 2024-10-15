import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { inject } from '@adonisjs/core'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { HttpContext } from '@adonisjs/core/http'
import { ProductShow } from '#viewsback/pages/products/product.show'

@inject()
export default class ShowProductController {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ) {}

  async render({ request }: HttpContext) {
    const product = await this.productRepository.find(request.param('id'))
    const categories = await this.categoryRepository.all()
    return <ProductShow product={product} categories={categories} />
  }
}
