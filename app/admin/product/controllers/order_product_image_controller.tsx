import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { ProductImageRepository } from '#admin/product/repositories/product_image_repository'

@inject()
export default class OrderProductImageController {
  constructor(private productImageRepository: ProductImageRepository) {}

  /*updateOrder(tab: [], oldPos, newPos) {
    const element = tab[oldPos]
    // on supprime l'élément à déplacer
    tab.splice(oldPos, 1)
    // on rajoute l élement au bon endroit
    tab.splice(newPos, 0, element)

    // comment je fais pour récupérer les valeurs des order des autres éléments ?
    // parcourir chaque élément
    // je récupérer la clé => la clé + 1 me permet de récupérer l'ordre
  }*/

  async handle({ request, response }: HttpContext) {
    //const productId: string = request.param('productId')
    const productImageId: string = request.param('productImageId')
    const order: number = request.param('order')

    // const tab = [ 'element1', element2', 'element3' ]
    // updateOrder(tab, 0, 2) => je veux prendre 'element3' pour le placer en premier

    await this.productImageRepository.updateOrder(productImageId, order)
  }
}
