import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { csrfField } from '#resources/helpers/csrf_field'
import { Admin } from '#viewsback/layouts/admin'
import { randomUUID } from 'node:crypto'
import { FormField } from '../../components/form/form_field.tsx'
import { Vite } from '#resources/helpers/asset'

interface CategoryAddProps {
  categories: AdminCategoryListQueryResult
}

export function CategoryAdd(props: CategoryAddProps) {
  const { categories } = props
  const random = randomUUID()
  return (
    <Admin
      title={'Administration - Ajouter une catégorie'}
      breadcrumb="Catalogue &gt; Catégories &gt; Nouvelle catégorie"
      header="Ajouter une catégorie"
      bodyTitle="Ajouter une catégorie"
    >
      <form method="post" enctype="multipart/form-data">
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <FormField name="name" label="Nom de la catégorie" required />
        <FormField name="description" label="Description" inputTagName="textarea" />
        <FormField name="published" label="Est en ligne ?" inputType="checkbox" value="1" />
        <FormField name="order" label="Entrez l'ordre d'affichage" inputType="number" />
        <FormField
          name="parentId"
          label="Catégorie parente"
          inputTagName="select"
          inputValues={categories}
        />

        <div class="form-group">
          <label for="images">Image de la catégorie</label>
          <input type="file" id="image" name="image" class="form-control my-2" />
        </div>
        {csrfField()}
        <button type="submit" class="btn btn-primary my-2">
          Ajouter
        </button>
      </form>
    </Admin>
  )
}
