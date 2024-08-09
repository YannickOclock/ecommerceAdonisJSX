import vine from '@vinejs/vine'

export const properties = {
  lastname: vine.string().trim().minLength(3),
  firstname: vine.string().trim().minLength(4),
  email: vine
    .string()
    .minLength(4)
    .unique(async (db, value) => {
      const users = await db.from('users').where('email', value).first()
      return !users
    }),
  plainPassword: vine.string().trim().minLength(8),
  role: vine.number(),
  verified: vine.boolean().optional(),
}

const createUserValidator = vine.compile(vine.object(properties))
export { createUserValidator }
