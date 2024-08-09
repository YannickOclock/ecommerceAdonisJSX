import vine from '@vinejs/vine'

const deleteCategoryValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
export { deleteCategoryValidator }
