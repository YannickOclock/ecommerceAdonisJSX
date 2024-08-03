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
  phoneNumber: 'numéro de téléphone',
  addressLine1: 'adresse principale',
  addressLine2: 'adresse secondaire',
  postcode: 'code postal',
  city: 'ville',
  country: 'pays',
}

const deleteAddressValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
deleteAddressValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { deleteAddressValidator }
