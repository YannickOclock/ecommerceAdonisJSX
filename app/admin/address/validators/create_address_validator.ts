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

/**
 * Validates the post's creation action
 */
const createAddressValidator = vine.compile(
  vine.object({
    lastname: vine.string().trim().minLength(3),
    firstname: vine.string().trim().minLength(3),
    // todo: voir si on applique une regex sur le numéro de téléphone français
    // https://vinejs.dev/docs/types/string#mobile
    phoneNumber: vine.string().trim().optional(),
    addressLine1: vine.string().trim().minLength(10),
    addressLine2: vine.string().trim().optional(),
    // todo: renommer postCode en postcode
    postCode: vine.string().trim().minLength(3),
    city: vine.string().trim().minLength(3),
    // todo: faire une entité country, validation en testant les valeurs stockées
    // revoir pour la validation du country qui ne se fait pas
    country: vine.string().trim().minLength(3),
  })
)
createAddressValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { createAddressValidator }
