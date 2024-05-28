import ProductImage from '#core/models/product_image'

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

  async find(productImageId: string): Promise<ProductImage> {
    return await ProductImage.query().where('id', '=', productImageId).firstOrFail()
  }

  async delete(productImage: ProductImage): Promise<void> {
    await productImage.delete()
  }
}
