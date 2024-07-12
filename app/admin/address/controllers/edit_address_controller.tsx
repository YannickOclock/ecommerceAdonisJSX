import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { AddressRepository } from '#admin/address/repositories/address_repository'
import { AddressEdit } from '#viewsbackv2/pages/addresses/address_edit'
import { updateAddressValidator } from '#admin/address/validators/update_address_validator'

@inject()
export default class EditAddressController {
  constructor(private addressRepository: AddressRepository) {}

  async render({ request }: HttpContext) {
    const address = await this.addressRepository.find(request.param('id'))
    return <AddressEdit address={address} />
  }

  async update({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(updateAddressValidator)

    await this.addressRepository.update(payload)

    session.flash('notification', {
      type: 'success',
      message: "L'adresse a été éditée avec succès",
    })
    response.redirect().toRoute('admin.address.list')
  }
}
