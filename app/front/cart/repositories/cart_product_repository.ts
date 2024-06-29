import Product from '#core/models/product'
import { ResultOf } from '#types/common'

export type CartProductListQueryResult = ResultOf<CartProductRepository, 'findAllByCartProductIds'>

export class CartProductRepository {
  async findOneById(id: string) {
    return await Product.query().where('id', id).firstOrFail()
  }

  async findAllByCartProductIds(ids: string[]) {
    return Product.query()
      .where('published', true)
      .andWhereIn('id', ids)
      .andWhereHas('category', (query) => {
        query.where('published', true)
      })
      .preload('productImages', (query) => {
        query.orderBy('created_at', 'asc')
      })
      .orderBy('name', 'asc');
  }
}
