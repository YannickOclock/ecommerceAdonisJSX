import { AdminAddressListQueryResult } from '#admin/address/repositories/address_repository'
import { Admin } from '#viewsback/layouts/admin'
import { Vite } from '#resources/helpers/asset'
import { randomUUID } from 'node:crypto'

interface AddressListProps {
  addresses: AdminAddressListQueryResult
}

export function AddressList(props: AddressListProps) {
  const { addresses } = props
  const random = randomUUID()
  return (
    <Admin
      title={'Administration - Liste des adresses'}
      breadcrumb={'Clients &gt; Adresses'}
      header="Liste des adresses"
      bodyTitle="Liste des adresses"
    >
      <>
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <div class="relative">
          <button class="btn btn-bulk-action">
            Actions groupées
            <i class="material-icons">expand_more</i>
          </button>
          <div class="dropdown bulk-dropdown" style="display: none">
            <a href="#" class="btn btn-delete" data-href="" data-action="PUT" data-token="">
              <i class="material-icons">delete</i>
              Supprimer la sélection
            </a>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Ligne d'adresse n°1</th>
              <th>Ligne d'adresse n°2</th>
              <th>Code postal</th>
              <th>Ville</th>
              <th>Pays</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address) => (
              <tr data-id="1">
                <td>
                  <div class="checkbox-js">
                    <div class="bulk"></div>
                  </div>
                </td>
                <td>{address.id}</td>
                <td>{address.lastname}</td>
                <td>{address.firstname}</td>
                <td>{address.addressLine1}</td>
                <td>{address.addressLine2}</td>
                <td>{address.postCode}</td>
                <td>{address.city}</td>
                <td>{address.country}</td>
                <td class="td-flex">
                  <a href="#" class="btn" up-follow up-target="#main-content">
                    <i class="material-icons">edit</i>
                  </a>
                  <a href="" class="btn btn-dropdown">
                    <i class="material-icons">more_vert</i>
                  </a>
                  <div class="dropdown">
                    <a href="#" class="btn btn-delete">
                      <i class="material-icons">delete</i>
                      Supprimer
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </Admin>
  )
}
