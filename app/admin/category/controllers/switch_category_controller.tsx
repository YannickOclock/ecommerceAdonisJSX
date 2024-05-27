import { HttpContext } from '@adonisjs/core/http'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class SwitchCategoryController {
  constructor(private categoryRepository: CategoryRepository) {}

  async switch({ request, response, session }: HttpContext) {
    const categoryId = request.param('id')
    const published = await this.categoryRepository.switch(categoryId)
    session.flash('notification', {
      type: 'success',
      message: `La catégorie a été ${published === true ? 'activé' : 'désactivé'} avec succès`,
    })
    response.redirect().toRoute('admin.category.list')
  }
}
