import Product from '#core/models/product'
import { ResultOf } from '#types/common'

export type CategoryProductRepositoryResult = ResultOf<
  CategoryProductRepository,
  'findAllByCategorySlug'
>

export class CategoryProductRepository {
  async findAllByCategorySlug(categorySlug: string) {
    return Product.query()
      .select('products.*')
      .join('product_images', 'product_images.product_id', 'products.id')
      .join('categories', 'products.category_id', 'categories.id')
      .where('categories.slug', categorySlug)
      .groupBy('products.id')
      .preload('productImages')
  }
}
