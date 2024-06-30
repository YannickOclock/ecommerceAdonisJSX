import Category from '#core/models/category'
import { ResultOf } from '#types/common'

export type CategoryRepositoryResult = ResultOf<CategoryRepository, 'findByCategorySlug'>

export class CategoryRepository {
  async findByCategorySlug(categorySlug: string) {
    return Category.query()
      .preload('subCategories', (query) => {
        query.where('published', true)
      })
      .preload('parent')
      .where('slug', categorySlug)
      .andWhere('published', true)
      .firstOrFail()
  }
}
