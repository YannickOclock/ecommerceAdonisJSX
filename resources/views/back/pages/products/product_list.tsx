import { Admin } from '#viewsback/layouts/admin'
import { AdminProductListQueryResult } from '#admin/product/repositories/product_repository'
import { ProductTable } from '#viewsback/pages/products/product_table'
import { CategoryTable } from '#viewsback/pages/categories/category_table'

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
          {products.length === 0 ? (
            <p>Aucun produit dans la base de données !</p>
          ) : (
            <ProductTable products={products} />
          )}
        </div>
      </>
    </Admin>
  )
}
