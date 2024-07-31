import { Admin } from '#viewsback/layouts/admin'
import { FormGroup } from '#viewsback/components/form/form_group'
import { Label } from '#viewsback/components/form/label'
import { Input } from '#viewsback/components/form/input'
import { csrfField } from '#resources/helpers/csrf_field'
import { UserRoleText } from '#admin/user/enums/user_role'
import { Select } from '#viewsback/components/form/select'
import { Checkbox } from '#viewsback/components/form/checkbox'

export function UserAdd() {
  const roleValues = []
  for (const roleId of Object.keys(UserRoleText)) {
    roleValues.push({
      label: UserRoleText[roleId],
      value: roleId,
    })
  }

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
                <a>Utilisateurs</a>
              </li>
              <li>Ajout d'un utilisateur</li>
            </ul>
          </div>
          <h1 class="text-2xl">Ajout d'un utilisateur</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'}>
            <FormGroup>
              <Label id={'firstname'} label="Prénom" />
              <Input name="firstname" id={'firstname'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'lastname'} label="Nom" />
              <Input name="lastname" id={'lastname'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'email'} label="E-mail" />
              <Input name="email" id={'email'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'plainPassword'} label="Mot de passe" />
              <Input name="plainPassword" id={'plainPassword'} type={'password'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'role'} label="Rôle attribué" />
              <Select
                id={'role'}
                name={'role'}
                placeholder={'Sélectionner un rôle'}
                options={roleValues}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'verified'} label="Est vérifié ?" />
              <Checkbox name="verified" id={'verified'} toggle defaultValue={true} />
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
