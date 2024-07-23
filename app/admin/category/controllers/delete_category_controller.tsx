import { inject } from '@adonisjs/core'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { CategoryDeleteModale } from '#viewsbackv2/pages/categories/category_delete_modale'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class DeleteCategoryController {
  constructor(private categoryRepository: CategoryRepository) {}

  async render({ request }: HttpContext) {
    // bouton: ouvrir le message de confirmation dans une modale
    const categoryId = request.param('id')
    const category = await this.categoryRepository.find(categoryId)
    return <CategoryDeleteModale category={category} />
  }

  async handle({ request, response, session }: HttpContext) {
    const categoryId: string = request.param('id')
    const category = await this.categoryRepository.find(categoryId)
    await category.delete()
    session.flash('notification', {
      type: 'success',
      message: `La catégorie a été supprimée avec succès`,
    })
    if (category.parent) {
      response.redirect().toRoute('admin.category.list', {
        parentId: category.parent.id,
      })
    } else {
      response.redirect().toRoute('admin.category.list')
    }
  }
}
