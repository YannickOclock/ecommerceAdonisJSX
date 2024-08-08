import vine from '@vinejs/vine'
import { properties } from '#admin/address/validators/create_address_validator'

const updateAddressValidator = vine.compile(
  vine.object({
    id: vine.string().trim(),
    ...properties,
  })
)
export { updateAddressValidator }
