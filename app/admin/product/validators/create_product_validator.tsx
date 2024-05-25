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
  category: 'catégorie',
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
    description: vine.string().trim().minLength(10),
    category: vine.string().trim().minLength(3),
    price: vine.number(),
    quantity: vine.number(),
    published: vine.boolean().nullable().optional(),
  })
)
createProductValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { createProductValidator }