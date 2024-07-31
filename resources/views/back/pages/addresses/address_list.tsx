import { Admin } from '#viewsback/layouts/admin'
import { AdminAddressListQueryResult } from '#admin/address/repositories/address_repository'
import { AddressTable } from '#viewsback/pages/addresses/address_table'

interface AddressListProps {
  addresses: AdminAddressListQueryResult
}

export function AddressList(props: AddressListProps) {
  const { addresses } = props
  return (
    <Admin title={'Administration - Liste des adresses'}>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Clients</a>
              </li>
              <li>
                <a>Adresses</a>
              </li>
              <li>Liste des adresses</li>
            </ul>
          </div>
          <h1 class="text-2xl">Liste des adresses</h1>
        </div>
        <div class="p-4 pt-8">
          <AddressTable addresses={addresses} />
        </div>
      </>
    </Admin>
  )
}
