import { Master } from '#viewsback/layouts/master'
import { route } from '#start/view'
import { AdminAddressEditQueryResult } from '#admin/address/repositories/address_repository'

interface AddressDeleteModaleProps {
  address: AdminAddressEditQueryResult
}

export function AddressDeleteModale(props: AddressDeleteModaleProps) {
  const { address } = props
  return (
    <Master>
      <div class={'p-4'}>
        <h1 class={'text-2xl mb-4'}>Confirmation de suppression d'une adresse</h1>
        <p>
          Vous êtes sur le point de supprimer l'adresse {address.addressLine1} {address.postCode}{' '}
          {address.city}. Êtes-vous sûr de vouloir continuer ?
        </p>
        <div class={'flex justify-evenly mt-8'}>
          <a class={'btn'} up-dismiss>
            Annuler
          </a>
          <a class={'btn btn-error'} href={route('admin.address.delete', { id: address.id })}>
            Supprimer
          </a>
        </div>
      </div>
    </Master>
  )
}
