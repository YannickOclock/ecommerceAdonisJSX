import Address from '#core/models/address'
import { ResultOf } from '#types/common'

export type AdminAddressListQueryResult = ResultOf<AddressRepository, 'all'>
export type AdminAddressEditQueryResult = ResultOf<AddressRepository, 'find'>

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

interface UpdateAddressRepository {
  id: string
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

  async find(id: string): Promise<Address> {
    return await Address.query().where('id', '=', id).firstOrFail()
  }

  async wideProductFromPayload(
    payload: StoreAddressRepository | UpdateAddressRepository,
    address: Address
  ) {
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
  }

  async create(payload: StoreAddressRepository): Promise<string> {
    const address = new Address()
    await this.wideProductFromPayload(payload, address)
    await address.save()
    return address.id
  }

  async update(payload: UpdateAddressRepository) {
    const address = await this.find(payload.id)
    await this.wideProductFromPayload(payload, address)
    await address.save()
  }
}
