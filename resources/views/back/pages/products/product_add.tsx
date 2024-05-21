import { route } from '#start/view'
import { Admin } from '#viewsback/layouts/admin'

export function ProductAdd() {
  return (
    <Admin
      title={'Administration - Ajouter un produit'}
      breadcrumb="Produits &gt; Nouveau produit"
      header="Ajouter un produit"
      bodyTitle="Ajouter un produit"
    >
      <form method="post">
        <div class="form-group">
          <label for="name" class="required">
            Entrez le nom du produit
          </label>
          <input type="text" id="name" name="name" class="form-control my-2" required />
        </div>
        <div class="form-group">
          <label for="description" class="required">
            Entrez la description
          </label>
          <textarea id="description" name="description" class="form-control my-2" required />
        </div>
        <div class="form-group">
          <label for="category" class="required">
            Catégorie
          </label>
          <input type="text" id="category" name="category" class="form-control my-2" required />
        </div>
        <div class="form-group">
          <label for="price" class="required">
            Entrez le prix
          </label>
          <input type="number" id="price" name="price" class="form-control my-2" required />
        </div>
        <div class="form-group">
          <label for="quantity">Entrez le stock disponible</label>
          <input type="number" id="quantity" name="quantity" class="form-control my-2" />
        </div>
        <div class="form-group">
          <label for="published">Est en ligne ?</label>
          <input type="checkbox" id="published" name="published" value="1" checked />
        </div>
        <div class="form-group">
          <label for="images">Images du produit</label>
          <input type="file" id="images" name="images" multiple class="form-control my-2" />
        </div>
        <button type="submit" class="btn btn-primary my-2">
          Ajouter
        </button>
      </form>
    </Admin>
  )
}
