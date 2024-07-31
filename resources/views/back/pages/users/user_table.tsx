import { TableHeader } from '#viewsback/components/table/table_header'
import { route } from '#start/view'
import { TableLine } from '#viewsback/components/table/table_line'
import { AdminUserListQueryResult } from '#admin/user/repositories/user_repository'
import { UserRoleText } from '#admin/user/enums/user_role'
import { Table } from '#viewsback/components/table/table'

interface UserTableProps {
  users: AdminUserListQueryResult
}

export function UserTable(props: UserTableProps) {
  const { users } = props
  return (
    <Table>
      <TableHeader fields={['Prénom', 'Nom', 'Email', 'Rôle', 'Vérifié', 'Actions']} />
      <tbody>
        {users.map((user) => (
          <>
            <TableLine id={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{UserRoleText[user.role]}</td>
              <td>
                <form method={'get'} action={route('admin.user.switch', { id: user.id })}>
                  <div up-autosubmit>
                    <input
                      type="checkbox"
                      class="toggle toggle-success"
                      name="published"
                      checked={!!user.verified}
                    />
                  </div>
                </form>
              </td>
              <th>
                <a
                  href={route('admin.user.edit', { id: user.id })}
                  class="btn btn-xs btn-ghost"
                  up-follow
                  up-target="#main-content"
                >
                  <i class="material-icons">edit</i>
                </a>
                <div class="dropdown dropdown-end">
                  <div tabindex="0" role="button" class="btn btn-md btn-ghost">
                    <i class="material-icons">more_vert</i>
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-100 rounded-box z-[99] w-52 p-2 shadow"
                  >
                    <li>
                      <a
                        href={route('admin.user.confirm.delete', { id: user.id })}
                        up-layer="new"
                        up-follow
                      >
                        <i class="material-icons">delete</i> Supprimer
                      </a>
                    </li>
                  </ul>
                </div>
              </th>
            </TableLine>
          </>
        ))}
      </tbody>
    </Table>
  )
}
