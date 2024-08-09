import vine from '@vinejs/vine'
import { properties } from '#admin/user/validators/create_user_validator'

const updateUserValidator = vine.compile(
  vine.object({
    id: vine.string().trim(),
    ...properties,
    email: vine.string().minLength(4),
  })
)
export { updateUserValidator }
