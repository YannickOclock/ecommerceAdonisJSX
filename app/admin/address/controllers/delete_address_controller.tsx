import { inject } from '@adonisjs/core'

import { HttpContext } from '@adonisjs/core/http'
import { AddressRepository } from '#admin/address/repositories/address_repository'
import { AddressDeleteModale } from '#viewsback/pages/addresses/address_delete_modale'
import { deleteAddressValidator } from '#admin/address/validators/delete_address_validator'

@inject()
export default class DeleteAddressController {
  constructor(private addressRepository: AddressRepository) {}

  async render({ request }: HttpContext) {
    const addressIds = request.param('ids').split(',')
    const addresses = await this.addressRepository.findByIds(addressIds)
    return <AddressDeleteModale addresses={addresses} />
  }

  async handle({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(deleteAddressValidator)
    const addresses = await this.addressRepository.findByIds(payload.ids)
    for (const address of addresses) {
      await address.delete()
    }
    session.flash('notification', {
      type: 'success',
      message:
        addresses.length > 1
          ? `Les adresses ont été supprimées avec succès`
          : `L'adresse a été supprimée avec succès`,
    })
    response.redirect().toRoute('admin.address.list')
  }
}
