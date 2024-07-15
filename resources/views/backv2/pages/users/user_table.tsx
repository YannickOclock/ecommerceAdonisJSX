import { TableHeader } from '#viewsbackv2/components/table/table_header'
import { route } from '#start/view'
import { TableLine } from '#viewsbackv2/components/table/table_line'
import { AdminUserListQueryResult } from '#admin/user/repositories/user_repository'
import { UserRoleText } from '#admin/user/enums/user_role'

interface UserTableProps {
  users: AdminUserListQueryResult
}

export function UserTable(props: UserTableProps) {
  const { users } = props
  return (
    <div class="overflow-x-auto">
      <table class="table">
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
                  <a href="" class="btn btn-xs btn-ghost btn-dropdown">
                    <i class="material-icons">more_vert</i>
                  </a>
                </th>
              </TableLine>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
