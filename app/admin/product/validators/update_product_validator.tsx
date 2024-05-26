import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
  number: 'Le champs {{ field }} doit être un nombre',
}

const fields = {
  id: 'id du produit',
  name: 'nom du produit',
  description: 'description',
  category: 'catégorie',
  price: 'prix',
  quantity: 'quantité',
  published: 'publié',
  images: 'images',
}

/**
 * Validates the post's creation action
 */
const updateProductValidator = vine.compile(
  vine.object({
    id: vine.string().trim(),
    name: vine.string().trim().minLength(6),
    description: vine.string().trim().nullable().optional(),
    category: vine.string().trim().minLength(3),
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
updateProductValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { updateProductValidator }
