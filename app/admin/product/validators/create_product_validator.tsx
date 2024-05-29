import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
  number: 'Le champs {{ field }} doit être un nombre',
}

const fields = {
  name: 'nom du produit',
  description: 'description',
  categoryId: 'catégorie',
  price: 'prix',
  quantity: 'quantité',
  published: 'publié',
}

/**
 * Validates the post's creation action
 */
const createProductValidator = vine.compile(
  vine.object({
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
  })
)
createProductValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { createProductValidator }
