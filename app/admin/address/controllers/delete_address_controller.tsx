import { inject } from '@adonisjs/core'

import { HttpContext } from '@adonisjs/core/http'
import { AddressRepository } from '#admin/address/repositories/address_repository'
import { AddressDeleteModale } from '#viewsback/pages/addresses/address_delete_modale'

@inject()
export default class DeleteAddressController {
  constructor(private addressRepository: AddressRepository) {}

  async render({ request }: HttpContext) {
    const addressId = request.param('id')
    const address = await this.addressRepository.find(addressId)
    return <AddressDeleteModale address={address} />
  }

  async handle({ request, response, session }: HttpContext) {
    const addressId: string = request.param('id')
    const address = await this.addressRepository.find(addressId)
    await address.delete()
    session.flash('notification', {
      type: 'success',
      message: `L'adresse a été supprimée avec succès`,
    })
    response.redirect().toRoute('admin.address.list')
  }
}
