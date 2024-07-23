import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { ProductDeleteModale } from '#viewsbackv2/pages/products/product_delete_modale'

@inject()
export default class DeleteProductController {
  constructor(private productRepository: ProductRepository) {}

  async render({ request }: HttpContext) {
    const productId = request.param('id')
    const product = await this.productRepository.find(productId)
    return <ProductDeleteModale product={product} />
  }

  async handle({ request, response, session }: HttpContext) {
    const productId: string = request.param('id')
    const product = await this.productRepository.find(productId)
    await product.delete()
    session.flash('notification', {
      type: 'success',
      message: `Le produit a été supprimé avec succès`,
    })

    response.redirect().toRoute('admin.product.list')
  }
}
