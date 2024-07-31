import { ProductEdit } from '#viewsback/pages/products/product.edit'
import { HttpContext } from '@adonisjs/core/http'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { ProductImagesService } from '#admin/product/services/product_images_service'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { updateProductValidator } from '#admin/product/validators/update_product_validator'
import { inject } from '@adonisjs/core'

@inject()
export default class EditProductController {
  constructor(
    private productRepository: ProductRepository,
    private productImagesService: ProductImagesService,
    private categoryRepository: CategoryRepository
  ) {}

  async render({ request }: HttpContext) {
    const product = await this.productRepository.find(request.param('id'))
    const categories = await this.categoryRepository.all()
    return <ProductEdit product={product} categories={categories} />
  }

  async update({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(updateProductValidator)
    await this.productRepository.update(payload)

    // upload and create Image in DB
    await this.productImagesService.create(payload.id, payload.images)

    session.flash('notification', {
      type: 'success',
      message: 'Le produit a été édité avec succès',
    })
    response.redirect().toRoute('admin.product.list')
  }
}
