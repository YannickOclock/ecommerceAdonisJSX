import vine from '@vinejs/vine'
import { properties } from '#admin/product/validators/create_product_validator'

const updateProductValidator = vine.compile(
  vine.object({
    id: vine.string().trim(),
    ...properties,
  })
)
export { updateProductValidator }
