import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
  number: 'Le champs {{ field }} doit être un nombre',
}

const fields = {
  lessOrMore: 'plus ou moins',
  productId: 'id du produit',
}

const updateQuantityCartValidator = vine.compile(
  vine.object({
    lessOrMore: vine.string().in(['less', 'more']),
    productId: vine.string().uuid(),
  })
)
updateQuantityCartValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { updateQuantityCartValidator }
