import { Master } from '#viewsback/layouts/master'
import { route } from '#start/view'
import { AdminUserByIdsQueryResult } from '#admin/user/repositories/user_repository'
import { csrfField } from '#resources/helpers/csrf_field'

interface UserDeleteModaleProps {
  users: AdminUserByIdsQueryResult
}

export function UserDeleteModale(props: UserDeleteModaleProps) {
  const { users } = props
  return (
    <Master>
      <div class={'p-4'}>
        <h1 class="text-2xl mb-4">
          Confirmation de suppression{' '}
          {users.length > 1 ? 'de plusieurs utilisateurs' : "d'un utilisateur"}
        </h1>
        <p>Vous êtes sur le point de supprimer le(s) utilisateur(s) suivant(s) :</p>
        <ul class="list-disc ml-8">
          {users.map((user) => (
            <li>
              {user.firstname} {user.lastname}
            </li>
          ))}
        </ul>
        <p>Êtes-vous sûr de vouloir continuer ?</p>
        <div class={'flex justify-evenly mt-8'}>
          <a class={'btn'} up-dismiss>
            Annuler
          </a>
          <form method="post" action={route('admin.user.delete')}>
            {users.map((user) => (
              <input type="hidden" name="ids[]" value={user.id} />
            ))}
            {csrfField()}
            <button class="btn btn-error">Supprimer</button>
          </form>
        </div>
      </div>
    </Master>
  )
}
