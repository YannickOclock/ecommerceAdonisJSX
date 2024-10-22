import vine from '@vinejs/vine'

export const properties = {
  data: vine.array(
    vine.object({
      imageId: vine.string().trim().minLength(6),
      imageOrder: vine.number(),
    })
  ),
}

const orderProductImageValidator = vine.compile(vine.object(properties))
export { orderProductImageValidator }
