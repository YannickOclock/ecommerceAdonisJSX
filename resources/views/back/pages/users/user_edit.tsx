import { csrfField } from '#resources/helpers/csrf_field'
import { Admin } from '#viewsback/layouts/admin'
import { randomUUID } from 'node:crypto'
import { FormField } from '../../components/form/form_field.tsx'
import { Vite } from '#resources/helpers/asset'
import { AdminUserEditQueryResult } from '#admin/user/repositories/user_repository'
import { UserRole, UserRoleText } from '#admin/user/enums/user_role'

interface UserEditProps {
  user: AdminUserEditQueryResult
}

export function UserEdit(props: UserEditProps) {
  const { user } = props
  const random = randomUUID()

  return (
    <Admin
      title={'Administration - Editer un utilisateur'}
      breadcrumb="Clients &gt; Utilisateurs &gt; Editer un utilisateur"
      header="Editer un utilisateur"
      bodyTitle="Editer un utilisateur"
    >
      <form method="post">
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <FormField name="id" label="Id de l'utilisateur" value={user.id} required disabled />
        <FormField name="firstname" label="Prénom" value={user.firstname} required />
        <FormField name="lastname" label="Nom" value={user.lastname} required />
        <FormField name="email" label="E-mail" value={user.email} required disabled />
        <FormField name="plainPassword" label="Mot de passe" inputType="password" />
        <FormField
          name="role"
          label="Rôle attribué"
          inputTagName="select"
          inputValues={UserRoleText}
          value={user.role}
        />
        <FormField
          name="verified"
          label="Adresse vérifiée ?"
          inputType="checkbox"
          value={user.verified.toString()}
        />

        {csrfField()}
        <button type="submit" class="btn btn-primary my-2">
          Editer
        </button>
      </form>
    </Admin>
  )
}
