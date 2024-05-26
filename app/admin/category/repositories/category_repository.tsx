import Category from '#core/models/category'
import { ResultOf } from '#types/common'

export type AdminCategoryListQueryResult = ResultOf<CategoryRepository, 'all'>

export class CategoryRepository {
  async all() {
    return await Category.query().orderBy('name', 'desc').limit(10)
  }
}
