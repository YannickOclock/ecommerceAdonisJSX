import ProductImage from '#core/models/product_image'

export interface StoreProductImageDTO {
  path: string
  productId: string
  order: number
}

export class ProductImageRepository {
  async create(payload: StoreProductImageDTO) {
    const productImage = new ProductImage()
    productImage.path = payload.path
    productImage.productId = payload.productId
    productImage.order = payload.order

    await productImage.save()
  }

  async updateProductImagesOrders(payload: { imageId: string; imageOrder: number }[]) {
    for (const image of payload) {
      const productImage = await this.find(image.imageId)
      productImage.order = image.imageOrder
      await productImage.save()
    }
  }

  async find(productImageId: string): Promise<ProductImage> {
    return await ProductImage.query().where('id', '=', productImageId).firstOrFail()
  }

  async delete(productImage: ProductImage): Promise<void> {
    await productImage.delete()
  }
}
