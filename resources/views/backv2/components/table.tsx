import { TableHeader } from '#viewsbackv2/components/table/table_header'
import { TableSimpleLine } from '#viewsbackv2/components/table/table_simple_line'
import { TableLine } from '#viewsbackv2/components/table/table_line'

export function Table() {
  return (
    <div class="overflow-x-auto">
      <table class="table">
        <TableHeader fields={['id', 'nom', 'description', 'actions']} />
        <tbody>
          <TableSimpleLine
            dataLine={{ id: '1', name: 'Mon produit', description: 'Ma description' }}
          />
          <TableLine id={'2'}>
            <td>2</td>
            <td>
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>Mon produit</td>
            <td>Ma description</td>
          </TableLine>
        </tbody>
      </table>
    </div>
  )
}
