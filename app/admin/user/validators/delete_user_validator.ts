import vine from '@vinejs/vine'

const deleteUserValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
export { deleteUserValidator }
