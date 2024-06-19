import { inject } from '@adonisjs/core'
import { AddressAdd } from '#viewsback/pages/addresses/address_add'
import { HttpContext } from '@adonisjs/core/http'
import { createAddressValidator } from '#admin/address/validators/create_address_validator'
import { AddressRepository } from '#admin/address/repositories/address_repository'

@inject()
export default class AddAddressController {
  constructor(private addressRepository: AddressRepository) {}

  async render() {
    return <AddressAdd />
  }

  async store({ request, response, session }: HttpContext) {
    // création du validateur pour valider les données provenant du front
    const payload = await request.validateUsing(createAddressValidator)
    await this.addressRepository.save(payload)

    session.flash('notification', {
      type: 'success',
      message: "l'adresse a été rajoutée avec succès",
    })

    response.redirect().toRoute('admin.address.list')
  }
}
