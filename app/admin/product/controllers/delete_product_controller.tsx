import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { ProductDeleteModale } from '#viewsback/pages/products/product_delete_modale'
import { deleteProductValidator } from '#admin/product/validators/delete_product_validator'

@inject()
export default class DeleteProductController {
  constructor(private productRepository: ProductRepository) {}

  async render({ request }: HttpContext) {
    const productIds: string[] = request.param('ids').split(',')
    const products = await this.productRepository.findByIds(productIds)
    return <ProductDeleteModale products={products} />
  }

  async handle({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(deleteProductValidator)
    const products = await this.productRepository.findByIds(payload.ids)
    for (const product of products) {
      // TODO: Supprimer les images des produits aussi au passage (le delete cascade est bien géré)
      await product.delete()
    }
    session.flash('notification', {
      type: 'success',
      message:
        products.length > 1
          ? `Les produits ont été supprimés avec succès`
          : `Le produit a été supprimé avec succès`,
    })

    response.redirect().toRoute('admin.product.list')
  }
}
