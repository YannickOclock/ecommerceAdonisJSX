import { AddressRepository } from '#admin/address/repositories/address_repository'
import { AddressList } from '#viewsbackv2/pages/addresses/address_list'
import { inject } from '@adonisjs/core'

@inject()
export default class ShowListAddressController {
  constructor(private addressRepository: AddressRepository) {}

  async render() {
    const addresses = await this.addressRepository.all()
    return <AddressList addresses={addresses} />
  }
}
