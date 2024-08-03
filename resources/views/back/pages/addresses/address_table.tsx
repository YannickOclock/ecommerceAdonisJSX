import { TableHeader } from '#viewsback/components/table/table_header'
import { AdminAddressListQueryResult } from '#admin/address/repositories/address_repository'
import { route } from '#start/view'
import { TableLine } from '#viewsback/components/table/table_line'
import { Table } from '#viewsback/components/table/table'

interface AddressTableProps {
  addresses: AdminAddressListQueryResult
}

export function AddressTable(props: AddressTableProps) {
  const { addresses } = props
  return (
    <Table>
      <a
        href={route('admin.address.confirm.delete')}
        class={'btn btn-primary'}
        disabled="disabled"
        up-follow
        up-layer={'new'}
        data-delete-btn=""
      >
        Supprimer les adresses
      </a>
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
                <div class="dropdown dropdown-end">
                  <div tabindex="0" role="button" class="btn btn-md btn-ghost">
                    <i class="material-icons">more_vert</i>
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-100 rounded-box z-[99] w-52 p-2 shadow"
                  >
                    <li>
                      <a
                        href={route('admin.address.confirm.delete', { ids: [address.id] })}
                        up-layer="new"
                        up-follow
                      >
                        <i class="material-icons">delete</i> Supprimer
                      </a>
                    </li>
                  </ul>
                </div>
              </th>
            </TableLine>
          </>
        ))}
      </tbody>
    </Table>
  )
}
