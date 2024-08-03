import { inject } from '@adonisjs/core'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { CategoryDeleteModale } from '#viewsback/pages/categories/category_delete_modale'
import { HttpContext } from '@adonisjs/core/http'
import { deleteCategoryValidator } from '#admin/category/validators/delete_category_validator'

@inject()
export default class DeleteCategoryController {
  constructor(private categoryRepository: CategoryRepository) {}

  async render({ request }: HttpContext) {
    const categoryIds = request.param('ids').split(',')
    const categories = await this.categoryRepository.findByIds(categoryIds)
    return <CategoryDeleteModale categories={categories} />
  }

  async handle({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(deleteCategoryValidator)
    const categories = await this.categoryRepository.findByIds(payload.ids)
    // TODO: Vérifier la suppression des images dans le dossier public
    for (const category of categories) {
      await category.delete()
    }
    session.flash('notification', {
      type: 'success',
      message:
        categories.length > 1
          ? `Les catégories ont été supprimées avec succès`
          : `La catégorie a été supprimée avec succès`,
    })
    if (categories[0].parent) {
      response.redirect().toRoute('admin.category.list', {
        parentId: categories[0].parent.id,
      })
    } else {
      response.redirect().toRoute('admin.category.list')
    }
  }
}
