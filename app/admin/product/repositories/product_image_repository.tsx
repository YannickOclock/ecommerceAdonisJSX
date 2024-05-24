import ProductImage from '#core/models/product_image'
import { ResultOf } from '#types/common'

export interface StoreProductImageDTO {
  path: string
  productId: string
}

export class ProductImageRepository {
  async create(payload: StoreProductImageDTO) {
    const productImage = new ProductImage()
    productImage.path = payload.path
    productImage.productId = payload.productId

    await productImage.save()
  }
}
