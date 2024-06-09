import { HttpContext } from '@adonisjs/core/http'
import { ProductImagesService } from '#admin/product/services/product_images_service'
import { inject } from '@adonisjs/core'

@inject()
export default class DeleteProductImageController {
  constructor(private productImagesService: ProductImagesService) {}

  async delete({ request, response, session }: HttpContext) {
    const productId = request.param('productId')
    const productImageId = request.param('id')
    await this.productImagesService.deleteFromProductImage(productImageId)
    session.flash('notification', {
      type: 'success',
      message: `Une image de ce produit a été supprimée avec succès`,
    })
    response.redirect().toRoute('admin.product.edit', { id: productId })
  }
}
