import { Admin } from '#viewsback/layouts/admin'

export function ProductList() {
  return (
    <Admin
      title={'Administration - Liste des produits'}
      breadcrumb="Produits"
      header="Liste des produits"
      bodyTitle="Liste des produits"
    >
      <>
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
            <tr data-id="1">
              <td>
                <div class="checkbox-js">
                  <div class="bulk"></div>
                </div>
              </td>
              <td>1</td>
              <td>image</td>
              <td>Produit 1</td>
              <td>produit-1</td>
              <td>10,00 €</td>
              <td>10</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switch1"
                    disabled
                  />
                  <label class="form-check-label" for="switch1"></label>
                </div>
              </td>
              <td>Catégorie 1</td>
              <td class="td-flex">
                <a href="#" class="btn">
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
          </tbody>
        </table>
      </>
    </Admin>
  )
}
