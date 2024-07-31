import { TableHeader } from '#viewsbackv2/components/table/table_header'
import { TableSimpleLine } from '#viewsbackv2/components/table/table_simple_line'
import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { TableLine } from '#viewsbackv2/components/table/table_line'
import { PublicImage } from '#viewsbackv2/components/utils/image'
import { route } from '#start/view'
import { Table } from '#viewsbackv2/components/table/table'

interface CategoryTableProps {
  categories: AdminCategoryListQueryResult
}

export function CategoryTable(props: CategoryTableProps) {
  const { categories } = props
  return (
    <Table>
      <TableHeader fields={['Photo', 'Nom', 'En ligne', 'Parent', 'Actions']} />
      <tbody>
        {categories.map((category) => (
          <>
            <TableLine id={category.id}>
              <td>
                <PublicImage
                  src={category.imagePath ?? ''}
                  alt={`Image principale du produit ${category.name}`}
                  type="category"
                />
              </td>
              <td>{category.name}</td>
              <td>
                <form method={'get'} action={route('admin.category.switch', { id: category.id })}>
                  <div up-autosubmit>
                    <input
                      type="checkbox"
                      class="toggle toggle-success"
                      name="published"
                      checked={!!category.published}
                    />
                  </div>
                </form>
              </td>
              <td>{category.parent?.name ?? ''}</td>
              <th>
                {category.subCategories.length > 0 && (
                  <a
                    href={route('admin.category.list', { parentId: category.id })}
                    class="btn btn-md btn-ghost"
                    up-follow
                    up-target="#main-content"
                  >
                    <i class="material-icons">zoom_in</i>
                  </a>
                )}
                <a
                  href={route('admin.category.edit', { id: category.id })}
                  class="btn btn-md btn-ghost"
                  up-follow
                  up-target="#main-content"
                >
                  <i class="material-icons">edit</i>
                </a>
                <div class="dropdown dropdown-bottom">
                  <div tabindex="0" role="button" class="btn btn-md btn-ghost">
                    <i class="material-icons">more_vert</i>
                  </div>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu bg-base-100 rounded-box z-[99] w-52 p-2 shadow"
                  >
                    <li>
                      <a
                        href={route('admin.category.confirm.delete', { id: category.id })}
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
