import { HttpContext } from '@adonisjs/core/http'
import { ProductRepository } from '#admin/product/repositories/product_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class SwitchProductController {
  constructor(private productRepository: ProductRepository) {}

  async switch({ request, response, session }: HttpContext) {
    const productId = request.param('id')
    const published = await this.productRepository.switch(productId)
    session.flash('notification', {
      type: 'success',
      message: `Le produit a été ${published === true ? 'activé' : 'désactivé'} avec succès`,
    })
    response.redirect().toRoute('admin.product.list')
  }
}
