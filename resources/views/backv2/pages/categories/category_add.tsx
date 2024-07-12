import { Admin } from '#viewsbackv2/layouts/admin'
import { Label } from '#viewsbackv2/components/form/label'
import { Input } from '#viewsbackv2/components/form/input'
import { FormGroup } from '#viewsbackv2/components/form/form_group'
import { Select } from '#viewsbackv2/components/form/select'
import { csrfField } from '#resources/helpers/csrf_field'
import { Textarea } from '#viewsbackv2/components/form/textarea'
import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { Checkbox } from '#viewsbackv2/components/form/checkbox'

interface CategoryAddProps {
  categories: AdminCategoryListQueryResult
}

export function CategoryAdd(props: CategoryAddProps) {
  const { categories } = props

  // transform categories to array
  const selectParentCategories = [] as { label: string; value: string }[]
  for (const category of categories) {
    selectParentCategories.push({
      label: category.name,
      value: category.id,
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
              <li>Ajout d'une catégorie</li>
            </ul>
          </div>
          <h1 class="text-2xl">Ajout d'une catégorie</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'} enctype="multipart/form-data">
            <FormGroup>
              <Label id={'name'} label="Nom de la catégorie" />
              <Input name="name" id={'name'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'description'} label="Description" />
              <Textarea id={'description'} name={'description'} />
            </FormGroup>
            <FormGroup>
              <Label id={'order'} label="Entrez l'ordre d'affichage" />
              <Input name="order" type={'number'} id={'order'} />
            </FormGroup>
            <FormGroup>
              <Label id={'parentId'} label="Catégorie parente" />
              <Select
                id={'parentId'}
                name={'parentId'}
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
              <Checkbox name="published" id={'published'} toggle defaultValue={true} />
            </FormGroup>

            {csrfField()}
            <div class={'flex justify-center mt-12'}>
              <button type="submit" class="btn btn-primary w-1/2">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </>
    </Admin>
  )
}
