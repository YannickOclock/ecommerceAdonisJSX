import { Master } from '#viewsback/layouts/master'
import { route } from '#start/view'
import { AdminUserEditQueryResult } from '#admin/user/repositories/user_repository'

interface UserDeleteModaleProps {
  user: AdminUserEditQueryResult
}

export function UserDeleteModale(props: UserDeleteModaleProps) {
  const { user } = props
  return (
    <Master>
      <div class={'p-4'}>
        <h1 class={'text-2xl mb-4'}>Confirmation de suppression d'un utilisateur</h1>
        <p>
          Vous êtes sur le point de supprimer l'utilisateur {user.firstname} {user.lastname}.
          Êtes-vous sûr de vouloir continuer ?
        </p>
        <div class={'flex justify-evenly mt-8'}>
          <a class={'btn'} up-dismiss>
            Annuler
          </a>
          <a class={'btn btn-error'} href={route('admin.user.delete', { id: user.id })}>
            Supprimer
          </a>
        </div>
      </div>
    </Master>
  )
}
