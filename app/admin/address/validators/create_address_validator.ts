import vine from '@vinejs/vine'

export const properties = {
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
}

const createAddressValidator = vine.compile(vine.object(properties))
export { createAddressValidator }
