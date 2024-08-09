import vine from '@vinejs/vine'

export const properties = {
  name: vine.string().trim().minLength(6),
  description: vine.string().trim().nullable().optional(),
  published: vine.boolean().nullable().optional(),
  order: vine.number().nullable().optional(),
  image: vine
    // @ts-ignore
    .file({
      size: '2mb',
      extnames: ['jpg', 'png', 'webp'],
    })
    // @ts-ignore
    .optional(),
  parentId: vine.string().nullable().optional(),
}

const createCategoryValidator = vine.compile(vine.object(properties))
export { createCategoryValidator }
