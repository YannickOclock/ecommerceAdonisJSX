import { CategoryAdd } from '#viewsback/pages/categories/category_add'
import { HttpContext } from '@adonisjs/core/http'
import { createCategoryValidator } from '#admin/category/validators/create_category_validator'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class AddCategoryController {
  constructor(private categoryRepository: CategoryRepository) {}

  async render({}: HttpContext) {
    return <CategoryAdd />
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createCategoryValidator)
    const categoryId = await this.categoryRepository.create(payload)

    // upload and create Image in DB
    //const images = request.files('images')
    //await this.productImagesService.create(productId, images)

    session.flash('notification', {
      type: 'success',
      message: 'La catégorie a été ajouté avec succès',
    })
    response.redirect().toRoute('admin.category.list')
  }
}
