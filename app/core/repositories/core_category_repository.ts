import Category from '#core/models/category'

export class CoreCategoryRepository {
  async allRootCategories() {
    return await Category.query()
      .orderBy('name', 'asc')
      .whereNull('parentId')
      .preload('subCategories')
  }
}
