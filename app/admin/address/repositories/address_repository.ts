import Address from '#core/models/address'
import { ResultOf } from '#types/common'

export type AdminAddressListQueryResult = ResultOf<AddressRepository, 'all'>

export class AddressRepository {
  async all() {
    return Address.query().orderBy('lastname', 'asc').limit(10)
  }
}
