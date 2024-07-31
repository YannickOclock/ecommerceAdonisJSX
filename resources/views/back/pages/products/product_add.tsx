import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { Admin } from '#viewsbackv2/layouts/admin'
import { FormGroup } from '#viewsbackv2/components/form/form_group'
import { Label } from '#viewsbackv2/components/form/label'
import { Input } from '#viewsbackv2/components/form/input'
import { Select } from '#viewsbackv2/components/form/select'
import { csrfField } from '#resources/helpers/csrf_field'
import { Textarea } from '#viewsbackv2/components/form/textarea'
import { Checkbox } from '#viewsbackv2/components/form/checkbox'

interface ProductAddProps {
  categories: AdminCategoryListQueryResult
}

export function ProductAdd(props: ProductAddProps) {
  const { categories } = props

  // transform categories to array
  const selectCategories = [] as { label: string; value: string }[]
  for (const category of categories) {
    selectCategories.push({
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
                <a>Produits</a>
              </li>
              <li>Ajout d'un produit</li>
            </ul>
          </div>
          <h1 class="text-2xl">Ajout d'un produit</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'} enctype="multipart/form-data">
            <FormGroup>
              <Label id={'name'} label="Nom du produit" />
              <Input name="name" id={'name'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'description'} label="Description" />
              <Textarea id={'description'} name={'description'} />
            </FormGroup>
            <FormGroup>
              <Label id={'categoryId'} label="Catégorie" />
              <Select
                id={'categoryId'}
                name={'categoryId'}
                placeholder={'Sélectionner une catégorie'}
                options={selectCategories}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'price'} label="Entrez le prix" />
              <Input name="price" id={'price'} type={'number'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'quantity'} label="Entrez le stock disponible" />
              <Input name="quantity" id={'quantity'} type={'number'} required />
            </FormGroup>
            <FormGroup>
              <Label id={'images'} label="Images du produit" />
              <Input name="images[]" type={'file'} id={'image'} multiple />
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
