import { inject } from '@adonisjs/core'
import { CategoryProductRepository } from '#front/category/repositories/category_product_repository'
import { HttpContext } from '@adonisjs/core/http'
import { CategoryProducts } from '#viewsfront/pages/category/category_products'
import { CategoryRepository } from '#front/category/repositories/category_repository'

@inject()
export default class ShowCategoryProductsController {
  constructor(
    private categoryRepository: CategoryRepository,
    private categoryProductRepository: CategoryProductRepository
  ) {}

  async render({ request }: HttpContext) {
    const categorySlug = request.param('slug')
    const [category, products] = await Promise.all([
      this.categoryRepository.findByCategorySlug(categorySlug),
      this.categoryProductRepository.findAllByCategorySlug(categorySlug),
    ])
    return <CategoryProducts category={category} products={products} />
  }
}
