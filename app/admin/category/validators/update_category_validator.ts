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
const updateCategoryValidator = vine.compile(
  vine.object({
    id: vine.string().trim(),
    name: vine.string().trim().minLength(6),
    description: vine.string().trim().nullable().optional(),
    published: vine.boolean().nullable().optional(),
    order: vine.number().nullable().optional(),
    image: vine
      // @ts-ignore
      .file({
        size: '2mb',
        extnames: ['jpg', 'png'],
      })
      // @ts-ignore
      .optional(),
    parentId: vine.string().nullable().optional(),
  })
)
updateCategoryValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { updateCategoryValidator }
