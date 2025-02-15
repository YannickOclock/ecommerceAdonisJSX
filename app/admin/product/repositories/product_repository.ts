import Product from '#core/models/product'
import { ResultOf } from '#types/common'

interface StoreProductDTO {
  name: string
  description: string | null | undefined
  categoryId: string | undefined
  price: number
  quantity: number
  published: boolean | null | undefined
}

interface UpdateProductDTO {
  id: string
  name: string
  description: string | null | undefined
  categoryId: string | undefined
  price: number
  quantity: number
  published: boolean | null | undefined
}

export type AdminProductListQueryResult = ResultOf<ProductRepository, 'all'>
export type AdminProductEditQueryResult = ResultOf<ProductRepository, 'find'>
export type AdminProductByIdsQueryResult = ResultOf<ProductRepository, 'findByIds'>

export class ProductRepository {
  async all(): Promise<Product[]> {
    return Product.query()
      .orderBy('name', 'asc')
      .preload('productImages', (query) => {
        query.orderBy('order', 'asc')
      })
      .preload('category')
      .limit(5)
  }

  async find(id: string): Promise<Product> {
    return Product.query()
      .where('id', '=', id)
      .preload('productImages', (query) => {
        query.orderBy('order', 'asc')
      })
      .firstOrFail()
  }

  async findByIds(ids: string[]): Promise<Product[]> {
    return Product.query()
      .whereIn('id', ids)
      .preload('productImages', (query) => {
        query.orderBy('order', 'asc')
      })
  }

  wideProductFromPayload(payload: StoreProductDTO | UpdateProductDTO, product: Product) {
    product.name = payload.name
    if (payload.description) product.description = payload.description
    //product.category = payload.category
    product.price = payload.price
    product.stock = payload.quantity
    product.published = false
    if (payload.published) product.published = true
    if (payload.categoryId) product.categoryId = payload.categoryId
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

  async switch(productId: string): Promise<boolean> {
    const product = await this.find(productId)
    product.published = !product.published
    await product.save()
    return product.published
  }

  // Functions for switch category controller

  async findByCategory(categoryId: string): Promise<Product[]> {
    return Product.query().preload('category').where('categoryId', categoryId)
  }

  async switchFromCategory(categoryId: string, published: boolean): Promise<boolean> {
    const products = await this.findByCategory(categoryId)
    for (const product of products) {
      product.published = published
      await product.save()
    }
    return true
  }
}
