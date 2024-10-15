import { HttpContext } from '@adonisjs/core/http'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class SwitchProductController {
  constructor(private productRepository: ProductRepository) {}

  async switch({ request, response, session }: HttpContext) {
    const from = request.param('from')
    const productId = request.param('id')
    const published = await this.productRepository.switch(productId)
    session.flash('notification', {
      type: 'success',
      message: `Le produit a été ${published ? 'activé' : 'désactivé'} avec succès`,
    })

    // je retourne vers la page du produit (visualisation)
    if (from === 'show') return response.redirect().toRoute('admin.product.show', { id: productId })

    // je retourne vers la liste des produits
    return response.redirect().toRoute('admin.product.list')
  }
}
