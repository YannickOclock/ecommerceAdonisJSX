import { csrfField } from '#resources/helpers/csrf_field'
import { Admin } from '#viewsback/layouts/admin'
import { FormField } from '../../components/form/form_field.tsx'

export function ProductAdd() {
  return (
    <Admin
      title={'Administration - Ajouter un produit'}
      breadcrumb="Catalogue &gt; Produits &gt; Nouveau produit"
      header="Ajouter un produit"
      bodyTitle="Ajouter un produit"
    >
      <form method="post" enctype="multipart/form-data">
        <FormField name="name" label="Nom du produit" required />
        <FormField name="description" label="Description" required inputTagName="textarea" />
        <FormField name="category" label="Catégorie" required />
        <FormField name="price" label="Entrez le prix" required inputType="number" />
        <FormField name="quantity" label="Entrez le stock disponible" required inputType="number" />
        <FormField name="published" label="Est en ligne ?" inputType="checkbox" value="1" />

        <div class="form-group">
          <label for="images">Images du produit</label>
          <input type="file" id="images" name="images[]" multiple class="form-control my-2" />
        </div>
        {csrfField()}
        <button type="submit" class="btn btn-primary my-2">
          Ajouter
        </button>
      </form>
    </Admin>
  )
}
