import vine from '@vinejs/vine'

const deleteAddressValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
export { deleteAddressValidator }
