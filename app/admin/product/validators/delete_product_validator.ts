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
  categoryId: 'catégorie',
  price: 'prix',
  quantity: 'quantité',
  published: 'publié',
  images: 'images',
}

/**
 * Validates the post's creation action
 */
const deleteProductValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
deleteProductValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { deleteProductValidator }
