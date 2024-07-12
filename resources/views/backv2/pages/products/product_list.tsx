import { Admin } from '#viewsbackv2/layouts/admin'
import { AdminProductListQueryResult } from '#admin/product/repositories/product_repository'
import { ProductTable } from '#viewsbackv2/pages/products/product_table'

interface ProductListProps {
  products: AdminProductListQueryResult
}

export function ProductList(props: ProductListProps) {
  const { products } = props
  return (
    <Admin title={'Administration - Liste des produits'}>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Catalogue</a>
              </li>
              <li>
                <a>Produits</a>
              </li>
              <li>Liste des produits</li>
            </ul>
          </div>
          <h1 class="text-2xl">Liste des produits</h1>
        </div>
        <div class="p-4 pt-8">
          <ProductTable products={products} />
        </div>
      </>
    </Admin>
  )
}
