import { TableHeader } from '#viewsbackv2/components/table/table_header'
import { AdminProductListQueryResult } from '#admin/product/repositories/product_repository'
import { PublicImage } from '#viewsbackv2/components/utils/image'
import { TableLine } from '#viewsbackv2/components/table/table_line'
import { convertPrice } from '#resources/helpers/utils'
import { route } from '#start/view'

interface ProductTableProps {
  products: AdminProductListQueryResult
}

export function ProductTable(props: ProductTableProps) {
  const { products } = props
  return (
    <div class="overflow-x-auto">
      <table class="table">
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
                <td>{product.published}</td>
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
