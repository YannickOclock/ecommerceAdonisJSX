import {
  AdminCategoryEditQueryResult,
  AdminCategoryListQueryResult,
} from '#admin/category/repositories/category_repository'
import { Admin } from '#viewsback/layouts/admin'
import { randomUUID } from 'node:crypto'
import { FormField } from '../../components/form/form_field.tsx'
import { Vite } from '#resources/helpers/asset'
import { csrfField } from '#resources/helpers/csrf_field'

interface CategoryEditProps {
  category: AdminCategoryEditQueryResult
  categories: AdminCategoryListQueryResult
}

export function CategoryEdit(props: CategoryEditProps) {
  const { category, categories } = props
  const random = randomUUID()

  // transform categories to array
  const selectParentCategories = [] as Array<string>
  for (const parentCategory of categories) {
    selectParentCategories[parentCategory.id] = parentCategory.name
  }

  return (
    <Admin
      title={'Administration - Editer une catégorie'}
      breadcrumb="Catalogue &gt; Catégories &gt; Editer une catégorie"
      header="Editer une catégorie"
      bodyTitle="Editer une catégorie"
    >
      <form method="post" enctype="multipart/form-data">
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <FormField name="id" label="Id du produit" value={category.id} required disabled />
        <FormField name="name" label="Nom du produit" value={category.name} required />
        <FormField
          name="description"
          label="Description"
          value={category.description}
          inputTagName="textarea"
        />
        <FormField
          name="published"
          label="Est en ligne ?"
          inputType="checkbox"
          value={`${category.published}`}
        />
        <FormField name="order" label="Entrez l'ordre d'affichage" inputType="number" />
        <FormField
          name="parentId"
          label="Catégorie parente"
          inputTagName="select"
          inputValues={selectParentCategories}
          value={category.parentId}
        />

        <div class="form-group">
          <label for="images">Image de la catégorie</label>
          <input type="file" id="image" name="image" class="form-control my-2" />
        </div>

        {csrfField()}
        <button type="submit" class="btn btn-primary my-2">
          Editer
        </button>
      </form>
    </Admin>
  )
}
