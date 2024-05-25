import { AdminProductListQueryResult } from '#admin/product/repositories/product_repository'
import { Vite } from '#resources/helpers/asset'
import { convertPrice, productImagesMinSrc } from '#resources/helpers/utils'
import { route } from '#start/view'
import { Admin } from '#viewsback/layouts/admin'
import { randomUUID } from 'node:crypto'

interface ProductListProps {
  products: AdminProductListQueryResult
}

export function ProductList(props: ProductListProps) {
  const { products } = props
  const random = randomUUID()
  return (
    <Admin
      title={'Administration - Liste des produits'}
      breadcrumb="Catalogue &gt; Produits"
      header="Liste des produits"
      bodyTitle="Liste des produits"
    >
      <>
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <div class="relative">
          <button class="btn btn-bulk-action">
            Actions groupées
            <i class="material-icons">expand_more</i>
          </button>
          <div class="dropdown bulk-dropdown" style="display: none">
            <a href="#" class="btn btn-delete" data-href="" data-action="PUT" data-token="">
              <i class="material-icons">delete</i>
              Supprimer la sélection
            </a>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Photo</th>
              <th>Nom</th>
              <th>Slug</th>
              <th>Prix</th>
              <th>Stock</th>
              <th>En ligne</th>
              <th>Catégorie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr data-id="1">
                <td>
                  <div class="checkbox-js">
                    <div class="bulk"></div>
                  </div>
                </td>
                <td>{product.id}</td>
                <td>
                  <img
                    src={productImagesMinSrc(product.productImages[0]?.path)}
                    alt={`Image principale du produit ${product.name}`}
                  />
                </td>
                <td>{product.name}</td>
                <td>-</td>
                <td>{convertPrice(product.price)}</td>
                <td>{product.stock}</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={product.published ? true : false}
                      data-href={route('admin.product.switch', { id: product.id })}
                      id="switch1"
                      disabled
                    />
                    <label class="form-check-label" for="switch1"></label>
                  </div>
                </td>
                <td>-</td>
                <td class="td-flex">
                  <a href={route('admin.product.edit', { id: product.id })} class="btn">
                    <i class="material-icons">edit</i>
                  </a>
                  <a href="" class="btn btn-dropdown">
                    <i class="material-icons">more_vert</i>
                  </a>
                  <div class="dropdown">
                    <a href="#" class="btn btn-delete">
                      <i class="material-icons">delete</i>
                      Supprimer
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </Admin>
  )
}
