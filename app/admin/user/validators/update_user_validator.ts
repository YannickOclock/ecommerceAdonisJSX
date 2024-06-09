import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
  number: 'Le champs {{ field }} doit être un nombre',
}

const fields = {
  id: "id de l'utilisateur",
  lastname: 'nom',
  firstname: 'prénom',
  email: 'email',
  plainPassword: 'mot de passe',
  role: 'role',
  verified: 'vérifié',
}

const updateUserValidator = vine.compile(
  vine.object({
    id: vine.string().trim(),
    lastname: vine.string().trim().minLength(3),
    firstname: vine.string().trim().minLength(4),
    email: vine.string().minLength(4),
    plainPassword: vine.string().trim().minLength(8).optional(),
    role: vine.number(),
    verified: vine.boolean().optional(),
  })
)
updateUserValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { updateUserValidator }
