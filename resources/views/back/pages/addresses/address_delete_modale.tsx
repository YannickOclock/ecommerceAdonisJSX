import { Master } from '#viewsback/layouts/master'
import { route } from '#start/view'
import { AdminAddressByIdsQueryResult } from '#admin/address/repositories/address_repository'
import { csrfField } from '#resources/helpers/csrf_field'

interface AddressDeleteModaleProps {
  addresses: AdminAddressByIdsQueryResult
}

export function AddressDeleteModale(props: AddressDeleteModaleProps) {
  const { addresses } = props
  return (
    <Master>
      <div class={'p-4'}>
        <h1 class={'text-2xl mb-4'}>
          Confirmation de suppression{' '}
          {addresses.length > 1 ? 'de plusieurs adresses' : "d'une adresse"}
        </h1>
        <p>Vous êtes sur le point de supprimer le(s) adresse(s) suivante(s) :</p>
        <ul class="list-disc ml-8">
          {addresses.map((address) => (
            <li>
              {address.addressLine1} {address.postCode} {address.city}
            </li>
          ))}
        </ul>
        <p>Êtes-vous sûr de vouloir continuer ?</p>
        <div class={'flex justify-evenly mt-8'}>
          <a class={'btn'} up-dismiss>
            Annuler
          </a>
          <form method="post" action={route('admin.address.delete')}>
            {addresses.map((address) => (
              <input type="hidden" name="ids[]" value={address.id} />
            ))}
            {csrfField()}
            <button class="btn btn-error">Supprimer</button>
          </form>
        </div>
      </div>
    </Master>
  )
}
