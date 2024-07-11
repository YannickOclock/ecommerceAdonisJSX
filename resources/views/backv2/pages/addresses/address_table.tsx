import { TableHeader } from '#viewsbackv2/components/table/table_header'
import { AdminAddressListQueryResult } from '#admin/address/repositories/address_repository'
import { route } from '#start/view'
import { TableLine } from '#viewsbackv2/components/table/table_line'

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
            <>
              <TableLine id={address.id}>
                <td>{address.lastname}</td>
                <td>{address.firstname}</td>
                <td>{address.addressLine1}</td>
                <td>{address.addressLine2 ?? ''}</td>
                <td>{address.postCode}</td>
                <td>{address.city}</td>
                <td>{address.country}</td>
                <th>
                  <a
                    href={route('admin.address.edit', { id: address.id })}
                    class="btn btn-xs btn-ghost"
                    up-follow
                    up-target="#main-content"
                  >
                    <i class="material-icons">edit</i>
                  </a>
                  <a href="" class="btn btn-xs btn-ghost btn-dropdown">
                    <i class="material-icons">more_vert</i>
                  </a>
                </th>
              </TableLine>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
