import { TableHeader } from '#viewsbackv2/components/table/table_header'
import { TableSimpleLine } from '#viewsbackv2/components/table/table_simple_line'
import { AdminAddressListQueryResult } from '#admin/address/repositories/address_repository'

interface AddressTableProps {
  addresses: AdminAddressListQueryResult
}

export function AddressTable(props: AddressTableProps) {
  const { addresses } = props
  return (
    <div class="overflow-x-auto">
      <table class="table">
        <TableHeader
          fields={[
            'Nom',
            'Prénom',
            "Ligne d'adresse n°1",
            "Ligne d'adresse n°2",
            'Code postal',
            'Ville',
            'Pays',
            'actions',
          ]}
        />
        <tbody>
          {addresses.map((address) => (
            <TableSimpleLine
              dataLine={{
                lastname: address.lastname,
                firstname: address.firstname,
                addressLine1: address.addressLine1,
                addressLine2: address.addressLine2 ?? '',
                postCode: address.postCode,
                city: address.city,
                country: address.country,
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
