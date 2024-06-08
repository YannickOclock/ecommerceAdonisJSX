import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
  number: 'Le champs {{ field }} doit être un nombre',
}

const fields = {
  lastname: 'nom',
  firstname: 'prénom',
  email: 'email',
  plainPassword: 'mot de passe',
}

const authRegisterValidator = vine.compile(
  vine.object({
    lastname: vine.string().trim().minLength(4),
    firstname: vine.string().trim().minLength(4),
    email: vine
      .string()
      .minLength(4)
      .unique(async (db, value) => {
        const users = await db.from('users').where('email', value).first()
        return !users
      }),
    plainPassword: vine.string().trim().minLength(8),
  })
)
authRegisterValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { authRegisterValidator }
