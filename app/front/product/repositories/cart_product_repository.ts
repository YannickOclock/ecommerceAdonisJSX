import Product from '#core/models/product'
import { ResultOf } from '#types/common'

export type CartProductRepositoryResult = ResultOf<CartProductRepository, 'findOneById'>

export class CartProductRepository {
  async findOneById(id: string) {
    return await Product.query().preload('productImages').where('id', id).firstOrFail()
  }
}
