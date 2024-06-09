import { AdminUserListQueryResult } from '#admin/user/repositories/user_repository'
import { randomUUID } from 'node:crypto'
import { Admin } from '#viewsback/layouts/admin'
import { Vite } from '#resources/helpers/asset'
import { route } from '#start/view'
import { UserRoleText } from '#admin/user/enums/user_role'

interface UserListProps {
  users: AdminUserListQueryResult
}

export function UserList(props: UserListProps): JSX.Element {
  const { users } = props
  console.log({ users })
  const random = randomUUID()
  return (
    <Admin
      title={'Administration - Liste des utilisateurs'}
      breadcrumb="Clients &gt; Utilisateurs"
      header="Liste des utilisateurs"
      bodyTitle="Liste des utilisateurs"
    >
      <>
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <div class="relative">
          <button class="btn btn-bulk-action">
            Actions groupées
            <i class="material-icons">expand_more</i>
          </button>
          <div class="dropdown bulk-dropdown" style="display: none">
            <a href="#" class="btn btn-delete" data-href="" data-action="PUT" data-token="">
              <i class="material-icons">delete</i>
              Supprimer la sélection
            </a>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôles</th>
              <th>Vérifié</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr data-id="1">
                <td>
                  <div class="checkbox-js">
                    <div class="bulk"></div>
                  </div>
                </td>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{UserRoleText[user.role]}</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={!!user.verified}
                      data-href={route('admin.user.switch', { id: user.id })}
                      id="switch1"
                      disabled
                    />
                    <label class="form-check-label" for="switch1"></label>
                  </div>
                </td>
                <td class="td-flex">
                  <a
                    href={route('admin.user.edit', { id: user.id })}
                    class="btn"
                    up-follow
                    up-target="#main-content"
                  >
                    <i class="material-icons">edit</i>
                  </a>
                  <a href="" class="btn btn-dropdown">
                    <i class="material-icons">more_vert</i>
                  </a>
                  <div class="dropdown">
                    <a href="#" class="btn btn-delete">
                      <i class="material-icons">delete</i>
                      Supprimer
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </Admin>
  )
}
