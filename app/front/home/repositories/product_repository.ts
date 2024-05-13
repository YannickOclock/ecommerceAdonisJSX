import Product from '#core/models/product'
import { ResultOf } from '#types/common'

export type HomeProductListQueryResult = ResultOf<HomeProductRepository, 'home'>

export class HomeProductRepository {
  async home() {
    return await Product.query()
      .preload('productImages')
      .where('published', true)
      .orderBy('created_at', 'desc')
      .limit(5)
  }
}
