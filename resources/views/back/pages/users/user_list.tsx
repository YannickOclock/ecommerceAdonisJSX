import { Admin } from '#viewsback/layouts/admin'
import { AdminUserListQueryResult } from '#admin/user/repositories/user_repository'
import { UserTable } from '#viewsback/pages/users/user_table'
import { ProductTable } from '#viewsback/pages/products/product_table'

interface UserListProps {
  users: AdminUserListQueryResult
}

export function UserList(props: UserListProps) {
  const { users } = props
  return (
    <Admin title={'Administration - Liste des utilisateurs'}>
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
              <li>Liste des utilisateurs</li>
            </ul>
          </div>
          <h1 class="text-2xl">Liste des utilisateurs</h1>
        </div>
        <div class="p-4 pt-8">
          {users.length === 0 ? (
            <p>Aucun utilisateur dans la base de données !</p>
          ) : (
            <UserTable users={users} />
          )}
        </div>
      </>
    </Admin>
  )
}
