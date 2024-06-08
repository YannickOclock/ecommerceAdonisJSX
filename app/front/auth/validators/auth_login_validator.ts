import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
  number: 'Le champs {{ field }} doit être un nombre',
}

const fields = {
  email: 'email',
  password: 'mot de passe',
}

const authLoginValidator = vine.compile(
  vine.object({
    email: vine.string().minLength(4),
    password: vine.string().trim().minLength(8),
  })
)
authLoginValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { authLoginValidator }
