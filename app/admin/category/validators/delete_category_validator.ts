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
  published: 'publié',
  order: "ordre d'affichage",
  image: 'image',
  parentId: 'catégorie parente',
}

/**
 * Validates the post's creation action
 */
const deleteCategoryValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
deleteCategoryValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { deleteCategoryValidator }
