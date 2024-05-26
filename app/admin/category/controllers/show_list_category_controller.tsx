import { HttpContext } from '@adonisjs/core/http'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { inject } from '@adonisjs/core'
import { CategoryList } from '#resources/views/back/pages/categories/category_list'

@inject()
export default class ShowListProductController {
  constructor(private repository: CategoryRepository) {}

  async render({}: HttpContext) {
    const categories = await this.repository.all()
    return <CategoryList categories={categories} />
  }
}
