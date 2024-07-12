import { Admin } from '#viewsbackv2/layouts/admin'
import { Label } from '#viewsbackv2/components/form/label'
import { Input } from '#viewsbackv2/components/form/input'
import { FormGroup } from '#viewsbackv2/components/form/form_group'
import { Select } from '#viewsbackv2/components/form/select'
import { csrfField } from '#resources/helpers/csrf_field'
import { Textarea } from '#viewsbackv2/components/form/textarea'
import {
  AdminCategoryEditQueryResult,
  AdminCategoryListQueryResult,
} from '#admin/category/repositories/category_repository'
import { Checkbox } from '#viewsbackv2/components/form/checkbox'

interface CategoryEditProps {
  category: AdminCategoryEditQueryResult
  categories: AdminCategoryListQueryResult
}

export function CategoryEdit(props: CategoryEditProps) {
  const { category, categories } = props

  // transform categories to array
  const selectParentCategories = [] as { label: string; value: string }[]
  for (const parentCategory of categories) {
    selectParentCategories.push({
      label: parentCategory.name,
      value: parentCategory.id,
    })
  }

  return (
    <Admin>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Catalogue</a>
              </li>
              <li>
                <a>Catégories</a>
              </li>
              <li>Edition d'une catégorie</li>
            </ul>
          </div>
          <h1 class="text-2xl">Edition d'une catégorie</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'} enctype="multipart/form-data">
            <FormGroup>
              <Label id={'id'} label="Id de la catégorie" />
              <Input name="id" id={'id'} defaultValue={category.id} required disabled />
            </FormGroup>
            <FormGroup>
              <Label id={'name'} label="Nom de la catégorie" />
              <Input name="name" id={'name'} defaultValue={category.name} required />
            </FormGroup>
            <FormGroup>
              <Label id={'description'} label="Description" />
              <Textarea
                id={'description'}
                defaultValue={category.description}
                name={'description'}
              />
            </FormGroup>
            <FormGroup>
              <Label id={'order'} label="Entrez l'ordre d'affichage" />
              <Input name="order" type={'number'} defaultValue={category.order} id={'order'} />
            </FormGroup>
            <FormGroup>
              <Label id={'parentId'} label="Catégorie parente" />
              <Select
                id={'parentId'}
                name={'parentId'}
                defaultValue={category.parent?.id}
                placeholder={'Sélectionner une catégorie parente'}
                options={selectParentCategories}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'image'} label="Image de la catégorie" />
              <Input name="image" type={'file'} id={'image'} />
            </FormGroup>
            <FormGroup>
              <Label id={'published'} label="Est en ligne ?" />
              <Checkbox
                name="published"
                id={'published'}
                toggle
                defaultValue={category.published}
              />
            </FormGroup>

            {csrfField()}
            <div class={'flex justify-center mt-12'}>
              <button type="submit" class="btn btn-primary w-1/2">
                Editer
              </button>
            </div>
          </form>
        </div>
      </>
    </Admin>
  )
}
