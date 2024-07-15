import { TableHeader } from '#viewsbackv2/components/table/table_header'
import { TableSimpleLine } from '#viewsbackv2/components/table/table_simple_line'
import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { TableLine } from '#viewsbackv2/components/table/table_line'
import { PublicImage } from '#viewsbackv2/components/utils/image'
import { route } from '#start/view'

interface CategoryTableProps {
  categories: AdminCategoryListQueryResult
}

export function CategoryTable(props: CategoryTableProps) {
  const { categories } = props
  return (
    <div class="overflow-x-auto">
      <table class="table">
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
                <td>{category.published.toString()}</td>
                <td>{category.parent?.name ?? ''}</td>
                <th>
                  {category.subCategories.length > 0 && (
                    <a
                      href={route('admin.category.list', { parentId: category.id })}
                      class="btn btn-xs btn-ghost"
                      up-follow
                      up-target="#main-content"
                    >
                      <i class="material-icons">zoom_in</i>
                    </a>
                  )}
                  <a
                    href={route('admin.category.edit', { id: category.id })}
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
