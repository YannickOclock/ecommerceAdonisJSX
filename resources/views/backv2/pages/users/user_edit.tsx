import { Admin } from '#viewsbackv2/layouts/admin'
import { FormGroup } from '#viewsbackv2/components/form/form_group'
import { Label } from '#viewsbackv2/components/form/label'
import { Input } from '#viewsbackv2/components/form/input'
import { csrfField } from '#resources/helpers/csrf_field'
import { UserRoleText } from '#admin/user/enums/user_role'
import { Select } from '#viewsbackv2/components/form/select'
import { Checkbox } from '#viewsbackv2/components/form/checkbox'
import { AdminUserEditQueryResult } from '#admin/user/repositories/user_repository'

interface UserEditProps {
  user: AdminUserEditQueryResult
}

export function UserEdit(props: UserEditProps) {
  const { user } = props
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
              <li>Edition d'un utilisateur</li>
            </ul>
          </div>
          <h1 class="text-2xl">Edition d'un utilisateur</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'}>
            <FormGroup>
              <Label id={'id'} label="Id de l'utilisateur" />
              <Input name="id" id={'id'} defaultValue={user.id} required disabled />
            </FormGroup>
            <FormGroup>
              <Label id={'firstname'} label="Prénom" />
              <Input name="firstname" id={'firstname'} defaultValue={user.firstname} required />
            </FormGroup>
            <FormGroup>
              <Label id={'lastname'} label="Nom" />
              <Input name="lastname" id={'lastname'} defaultValue={user.lastname} required />
            </FormGroup>
            <FormGroup>
              <Label id={'email'} label="E-mail" />
              <Input name="email" id={'email'} defaultValue={user.email} required />
            </FormGroup>
            <FormGroup>
              <Label id={'plainPassword'} label="Mot de passe" />
              <Input name="plainPassword" id={'plainPassword'} type={'password'} />
            </FormGroup>
            <FormGroup>
              <Label id={'role'} label="Rôle attribué" />
              <Select
                id={'role'}
                name={'role'}
                placeholder={'Sélectionner un rôle'}
                options={roleValues}
                defaultValue={user.role.toString()}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'verified'} label="Est vérifié ?" />
              <Checkbox name="verified" id={'verified'} toggle defaultValue={user.verified} />
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
