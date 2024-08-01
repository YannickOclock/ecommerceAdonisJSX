import { TableHeader } from '#viewsback/components/table/table_header'
import { AdminProductListQueryResult } from '#admin/product/repositories/product_repository'
import { PublicImage } from '#viewsback/components/utils/image'
import { TableLine } from '#viewsback/components/table/table_line'
import { convertPrice } from '#resources/helpers/utils'
import { route } from '#start/view'
import { Table } from '#viewsback/components/table/table'

interface ProductTableProps {
  products: AdminProductListQueryResult
}

export function ProductTable(props: ProductTableProps) {
  const { products } = props
  return (
    <Table>
      <a
        href={route('admin.product.confirm.delete')}
        class={'btn btn-primary'}
        disabled="disabled"
        up-follow
        up-layer={'new'}
        data-delete-btn=""
      >
        Supprimer les produits
      </a>
      <TableHeader
        fields={['Photo', 'Nom', 'Slug', 'Prix', 'Stock', 'En ligne', 'Catégorie', 'Actions']}
      />
      <tbody>
        {products.map((product) => (
          <>
            <TableLine id={product.id}>
              <td>
                <PublicImage
                  src={product.productImages[0]?.path}
                  alt={`Image principale du produit ${product.name}`}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.slug}</td>
              <td>{convertPrice(product.price)}</td>
              <td>{product.stock}</td>
              <td>
                <form method={'get'} action={route('admin.product.switch', { id: product.id })}>
                  <div up-autosubmit>
                    <input
                      type="checkbox"
                      class="toggle toggle-success"
                      name="published"
                      checked={!!product.published}
                    />
                  </div>
                </form>
              </td>
              <td>{product.category?.name ?? 'aucune'}</td>
              <th>
                <a
                  href={route('admin.product.edit', { id: product.id })}
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
                        href={route('admin.product.confirm.delete', { ids: [product.id] })}
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
