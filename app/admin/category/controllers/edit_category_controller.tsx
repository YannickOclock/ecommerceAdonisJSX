import { CategoryEdit } from '#viewsback/pages/categories/category_edit'
import { HttpContext } from '@adonisjs/core/http'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { updateCategoryValidator } from '#admin/category/validators/update_category_validator'
import { CategoryImagesService } from '#admin/category/services/category_images_service'
import { inject } from '@adonisjs/core'

@inject()
export default class EditCategoryController {
  constructor(
    private categoryRepository: CategoryRepository,
    private categoryImagesService: CategoryImagesService
  ) {}

  async render({ request }: HttpContext) {
    const category = await this.categoryRepository.find(request.param('id'))
    const categories = await this.categoryRepository.all()
    return <CategoryEdit category={category} categories={categories} />
  }

  async update({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(updateCategoryValidator)

    // On supprime l'ancienne image (s'il y en a une) et on upload la nouvelle image
    let imagePath
    if (payload.image) {
      this.categoryImagesService.deleteFromCategory(payload.id)
      imagePath = await this.categoryImagesService.create(payload.image)
    }

    // on enlève l'image et on rajoute le path de l'image
    const { image, ...categoryPayload } = { ...payload, imagePath: imagePath }
    await this.categoryRepository.update(categoryPayload)

    session.flash('notification', {
      type: 'success',
      message: 'La catégorie a été éditée avec succès',
    })
    response.redirect().toRoute('admin.category.list')
  }
}
