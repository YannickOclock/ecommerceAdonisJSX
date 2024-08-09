import vine from '@vinejs/vine'

const deleteProductValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
export { deleteProductValidator }
