import { HttpContext } from '@adonisjs/core/http'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { inject } from '@adonisjs/core'
import { CategoryList } from '#viewsbackv2/pages/categories/category_list'

@inject()
export default class ShowListProductController {
  constructor(private repository: CategoryRepository) {}

  async render({ request }: HttpContext) {
    const parentId = request.param('parentId') ?? null
    const categories = await this.repository.allFromParent(parentId)
    return <CategoryList categories={categories} parentId={parentId} />
  }
}
