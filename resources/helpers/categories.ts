import { CoreCategoryRepository } from '#app/core/repositories/core_category_repository'
import { inject } from '@adonisjs/core'
import app from '@adonisjs/core/services/app'

// todo : refactor dans la partie core (pour le service)
@inject()
class CategoryService {
  constructor(private coreCategoryRepository: CoreCategoryRepository) {}
  async getCategories() {
    const categories = await this.coreCategoryRepository.allRootCategories()
    return categories
  }
}
export const categoryService = await app.container.make(CategoryService)
