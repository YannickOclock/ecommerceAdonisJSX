import { ProductAdd } from '#viewsbackv2/pages/products/product_add'
import { HttpContext } from '@adonisjs/core/http'
import { createProductValidator } from '#admin/product/validators/create_product_validator'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { ProductImagesService } from '#admin/product/services/product_images_service'
import { CategoryRepository } from '#admin/category/repositories/category_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class AddProductController {
  constructor(
    private productRepository: ProductRepository,
    private productImagesService: ProductImagesService,
    private categoryRepository: CategoryRepository
  ) {}

  async render({}: HttpContext) {
    const categories = await this.categoryRepository.all()
    return <ProductAdd categories={categories} />
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createProductValidator)
    const productId = await this.productRepository.create(payload)

    // upload and create Image in DB
    await this.productImagesService.create(productId, payload.images)

    session.flash('notification', {
      type: 'success',
      message: 'Le produit a été ajouté avec succès',
    })
    response.redirect().toRoute('admin.product.list')
  }
}
