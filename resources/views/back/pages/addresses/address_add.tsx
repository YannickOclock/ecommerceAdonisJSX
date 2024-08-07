import { Admin } from '#viewsback/layouts/admin'
import { Label } from '#viewsback/components/form/label'
import { Input } from '#viewsback/components/form/input'
import { FormGroup } from '#viewsback/components/form/form_group'
import { Select } from '#viewsback/components/form/select'
import { csrfField } from '#resources/helpers/csrf_field'

export function AddressAdd() {
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
              <li>Ajout d'une adresse</li>
            </ul>
          </div>
          <h1 class="text-2xl">Ajout d'une adresse</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'}>
            <FormGroup>
              <Label id={'lastname'} label="Nom" />
              <Input name="lastname" id={'lastname'} />
            </FormGroup>
            <FormGroup>
              <Label id={'firstname'} label="Prénom" />
              <Input name="firstname" id={'firstname'} />
            </FormGroup>
            <FormGroup>
              <Label id={'phoneNumber'} label="Numéro de téléphone" />
              <Input name="phoneNumber" id={'phoneNumber'} />
            </FormGroup>
            <FormGroup>
              <Label id={'addressLine1'} label="Ligne d'adresse principale" />
              <Input name="addressLine1" id={'addressLine1'} />
            </FormGroup>
            <FormGroup>
              <Label id={'addressLine2'} label="Ligne d'adresse secondaire" />
              <Input name="addressLine2" id={'addressLine2'} />
            </FormGroup>
            <FormGroup>
              <Label id={'postCode'} label="Code postal" />
              <Input name="postCode" id={'postCode'} />
            </FormGroup>
            <FormGroup>
              <Label id={'city'} label="Ville" />
              <Input name="city" id={'city'} />
            </FormGroup>
            <FormGroup>
              <Label id={'country'} label="Pays" />
              <Select
                id={'country'}
                name={'country'}
                placeholder={'Sélectionner un pays'}
                options={countryList}
              />
            </FormGroup>

            {csrfField()}
            <div class={'flex justify-center mt-12'}>
              <button type="submit" class="btn btn-primary w-1/2">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </>
    </Admin>
  )
}
