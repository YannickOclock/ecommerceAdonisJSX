import Address from '#core/models/address'
import { ResultOf } from '#types/common'

export type AdminAddressListQueryResult = ResultOf<AddressRepository, 'all'>

export interface StoreAddressRepository {
  lastname: string
  firstname: string
  phoneNumber: string | undefined
  addressLine1: string
  addressLine2: string | undefined
  postCode: string
  city: string
  country: string
}

export class AddressRepository {
  async all() {
    return Address.query().orderBy('lastname', 'asc').limit(10)
  }

  async save(payload: StoreAddressRepository) {
    const address = new Address()
    address.lastname = payload.lastname
    address.firstname = payload.firstname
    if (payload.phoneNumber) {
      address.phoneNumber = payload.phoneNumber
    }
    address.addressLine1 = payload.addressLine1
    if (payload.addressLine2) {
      address.addressLine2 = payload.addressLine2
    }
    address.postCode = payload.postCode
    address.city = payload.city
    address.country = payload.country

    await address.save()
  }
}
