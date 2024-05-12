import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
}

const fields = {
  title: 'titre',
  content: 'contenu',
  author: 'auteur',
  status: 'statut',
}

/**
 * Validates the post's creation action
 */
const createPostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6),
    content: vine.string().trim().minLength(10),
    author: vine.string().trim().minLength(6),
    status: vine.string().trim().in(['published', 'draft']),
  })
)
createPostValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { createPostValidator }
