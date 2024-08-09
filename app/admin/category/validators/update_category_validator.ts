import vine from '@vinejs/vine'
import { properties } from '#admin/category/validators/create_category_validator'

const updateCategoryValidator = vine.compile(
  vine.object({
    id: vine.string().trim(),
    ...properties,
  })
)
export { updateCategoryValidator }
