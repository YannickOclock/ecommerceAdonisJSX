import vine from '@vinejs/vine'

export const properties = {
  name: vine.string().trim().minLength(6),
  description: vine.string().trim().nullable().optional(),
  categoryId: vine.string().trim().optional(),
  price: vine.number(),
  quantity: vine.number(),
  published: vine.boolean().nullable().optional(),
  images: vine
    .array(
      // @ts-ignore
      vine.file({
        size: '2mb',
        extnames: ['jpg', 'png'],
      })
    )
    .optional(),
}

const createProductValidator = vine.compile(vine.object(properties))
export { createProductValidator }
