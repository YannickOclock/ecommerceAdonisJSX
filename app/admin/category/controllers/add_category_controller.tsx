import { CategoryAdd } from '#viewsback/pages/categories/category_add'
import { HttpContext } from '@adonisjs/core/http'
import { createCategoryValidator } from '#admin/category/validators/create_category_validator'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { CategoryImagesService } from '#admin/category/services/category_images_service'
import { inject } from '@adonisjs/core'

@inject()
export default class AddCategoryController {
  constructor(
    private categoryRepository: CategoryRepository,
    private categoryImagesService: CategoryImagesService
  ) {}

  async render({}: HttpContext) {
    return <CategoryAdd />
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createCategoryValidator)

    // upload and create Image in DB
    const imagePath = await this.categoryImagesService.create(payload.image)

    // on enlève l'image et on rajoute le path de l'image
    const { image, ...categoryPayload } = { ...payload, imagePath: imagePath }
    await this.categoryRepository.create(categoryPayload)

    session.flash('notification', {
      type: 'success',
      message: 'La catégorie a été ajouté avec succès',
    })
    response.redirect().toRoute('admin.category.list')
  }
}
