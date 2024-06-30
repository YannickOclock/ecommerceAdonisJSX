import Product from '#core/models/product'
import { ResultOf } from '#types/common'

export type HomeProductListQueryResult = ResultOf<HomeProductRepository, 'home'>

export class HomeProductRepository {
  async home() {
    // récupérer uniquement les produits qui ont une catégorie qui est publiée
    // NB : si le produit n'a pas de catégorie, il n'apparaîtra pas
    return Product.query()
      .where('published', true)
      .orderBy('created_at', 'desc')
      .whereHas('category', (query) => {
        query.where('published', true)
      })
      .preload('productImages', (query) => {
        query.orderBy('created_at', 'asc')
      })
      .limit(10)
  }
}
