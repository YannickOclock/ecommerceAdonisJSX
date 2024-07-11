import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { AddressRepository } from '#admin/address/repositories/address_repository'
import { AddressEdit } from '#viewsbackv2/pages/addresses/address_edit'

@inject()
export default class EditCategoryController {
  constructor(private addressRepository: AddressRepository) {}

  async render({ request }: HttpContext) {
    const address = await this.addressRepository.find(request.param('id'))
    return <AddressEdit address={address} />
  }
}
