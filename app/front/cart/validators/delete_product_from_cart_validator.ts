import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
  number: 'Le champs {{ field }} doit être un nombre',
}

const fields = {
  productId: 'id du produit',
}

const deleteProductFromCartValidator = vine.compile(
  vine.object({
    productId: vine.string().uuid(),
  })
)
deleteProductFromCartValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { deleteProductFromCartValidator }
