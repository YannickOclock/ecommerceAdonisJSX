import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { ProductImageRepository } from '#admin/product/repositories/product_image_repository'
import { orderProductImageValidator } from '#admin/product/validators/order_product_image_validator'

@inject()
export default class OrderProductImageController {
  constructor(private productImageRepository: ProductImageRepository) {}

  async handle({ request }: HttpContext) {
    const payload = await request.validateUsing(orderProductImageValidator)
    await this.productImageRepository.updateProductImagesOrders(payload.data)
  }
}
