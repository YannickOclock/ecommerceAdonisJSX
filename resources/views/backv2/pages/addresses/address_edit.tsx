import { Admin } from '#viewsbackv2/layouts/admin'
import { Label } from '#viewsbackv2/components/form/label'
import { Input } from '#viewsbackv2/components/form/input'
import { FormGroup } from '#viewsbackv2/components/form/form_group'
import { Select } from '#viewsbackv2/components/form/select'
import { csrfField } from '#resources/helpers/csrf_field'
import { AdminAddressEditQueryResult } from '#admin/address/repositories/address_repository'

interface AddressEditProps {
  address: AdminAddressEditQueryResult
}

export function AddressEdit(props: AddressEditProps) {
  const { address } = props
  const countryList = [{ label: 'France', value: 'france' }]
  return (
    <Admin>
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
              <li>Edition d'une adresse</li>
            </ul>
          </div>
          <h1 class="text-2xl">Edition d'un adresse</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'}>
            <FormGroup>
              <Label id={'lastname'} label="Nom" />
              <Input name="lastname" id={'lastname'} defaultValue={address.lastname} required />
            </FormGroup>
            <FormGroup>
              <Label id={'firstname'} label="Prénom" />
              <Input name="firstname" id={'firstname'} defaultValue={address.firstname} required />
            </FormGroup>
            <FormGroup>
              <Label id={'phoneNumber'} label="Numéro de téléphone" />
              <Input name="phoneNumber" id={'phoneNumber'} defaultValue={address.phoneNumber} />
            </FormGroup>
            <FormGroup>
              <Label id={'addressLine1'} label="Ligne d'adresse principale" />
              <Input
                name="addressLine1"
                id={'addressLine1'}
                defaultValue={address.addressLine1}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'addressLine2'} label="Ligne d'adresse secondaire" />
              <Input name="addressLine2" id={'addressLine2'} defaultValue={address.addressLine2} />
            </FormGroup>
            <FormGroup>
              <Label id={'postCode'} label="Code postal" />
              <Input name="postCode" id={'postCode'} defaultValue={address.postCode} required />
            </FormGroup>
            <FormGroup>
              <Label id={'city'} label="Ville" />
              <Input name="city" id={'city'} defaultValue={address.city} required />
            </FormGroup>
            <FormGroup>
              <Label id={'country'} label="Pays" />
              <Select
                id={'country'}
                name={'country'}
                placeholder={'Sélectionner un pays'}
                options={countryList}
                defaultValue={address.country}
                required
              />
            </FormGroup>

            {csrfField()}
            <div class={'flex justify-center mt-12'}>
              <button type="submit" class="btn btn-primary w-1/2">
                Editer
              </button>
            </div>
          </form>
        </div>
      </>
    </Admin>
  )
}
