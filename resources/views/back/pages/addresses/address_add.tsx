import { Admin } from '#viewsback/layouts/admin'
import { FormField } from '#viewsback/components/form/form_field'
import { csrfField } from '#resources/helpers/csrf_field'

export function AddressAdd() {
  const countryList = []
  countryList['france'] = 'France'

  return (
    <Admin
      title={'Administration - Ajouter une adresse'}
      breadcrumb="Clients &gt; Ajouter une adresse"
      header="Ajouter une adresse"
      bodyTitle="Ajouter une adresse"
    >
      <form method="post" enctype="multipart/form-data">
        <FormField name="lastname" label="Nom" required />
        <FormField name="firstname" label="Prénom" required />
        <FormField name="phoneNumber" label="Numéro de téléphone" />
        <FormField name="addressLine1" label="Ligne d'adresse principale" required />
        <FormField name="addressLine2" label="Ligne d'adresse secondaire" />
        <FormField name="postCode" label="Code postal" required />
        <FormField name="city" label="Ville" required />
        <FormField name="country" label="Pays" inputTagName="select" inputValues={countryList} />

        {csrfField()}
        <button type="submit" class="btn btn-primary my-2">
          Ajouter
        </button>
      </form>
    </Admin>
  )
}
