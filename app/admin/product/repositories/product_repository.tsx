import Product from '#core/models/product'
import { ResultOf } from '#types/common'

interface StoreProductDTO {
  name: string
  description: string
  category: string
  price: number
  quantity: number
  published: boolean | null | undefined
}

interface UpdateProductDTO {
  id: string
  name: string
  description: string
  category: string
  price: number
  quantity: number
  published: boolean | null | undefined
}

export type AdminProductListQueryResult = ResultOf<ProductRepository, 'all'>
export type AdminProductEditQueryResult = ResultOf<ProductRepository, 'find'>

export class ProductRepository {
  async all() {
    return await Product.query()
      .orderBy('created_at', 'desc')
      .preload('productImages', (query) => {
        query.orderBy('created_at', 'asc')
      })
      .limit(5)
  }

  async find(id: string) {
    return await Product.query()
      .where('id', '=', id)
      .preload('productImages', (query) => {
        query.orderBy('created_at', 'asc')
      })
      .firstOrFail()
  }

  wideProductFromPayload(payload: StoreProductDTO | UpdateProductDTO, product: Product) {
    product.name = payload.name
    product.description = payload.description
    //product.category = payload.category
    product.price = payload.price
    product.stock = payload.quantity
    product.published = false
    if (payload.published) product.published = true
  }

  async create(payload: StoreProductDTO): Promise<string> {
    const product = new Product()
    this.wideProductFromPayload(payload, product)
    await product.save()
    return product.id
  }

  async update(payload: UpdateProductDTO) {
    const product = await this.find(payload.id)
    this.wideProductFromPayload(payload, product)
    await product.save()
  }
}
