import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { Admin } from '#viewsback/layouts/admin'
import { FormGroup } from '#viewsback/components/form/form_group'
import { Label } from '#viewsback/components/form/label'
import { Input } from '#viewsback/components/form/input'
import { Select } from '#viewsback/components/form/select'
import { csrfField } from '#resources/helpers/csrf_field'
import { Textarea } from '#viewsback/components/form/textarea'
import { Checkbox } from '#viewsback/components/form/checkbox'
import { AdminProductEditQueryResult } from '#admin/product/repositories/product_repository'

interface ProductEditProps {
  product: AdminProductEditQueryResult
  categories: AdminCategoryListQueryResult
}

export function ProductEdit(props: ProductEditProps) {
  const { product, categories } = props

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
              <li>Edition d'un produit</li>
            </ul>
          </div>
          <h1 class="text-2xl">Edition d'un produit</h1>
        </div>
        <div class="p-4 pt-8">
          <form method={'post'} enctype="multipart/form-data">
            <FormGroup>
              <Label id={'id'} label="Id du produit" />
              <Input name="id" id={'id'} defaultValue={product.id} required disabled />
            </FormGroup>
            <FormGroup>
              <Label id={'name'} label="Nom du produit" />
              <Input name="name" id={'name'} defaultValue={product.name} required />
            </FormGroup>
            <FormGroup>
              <Label id={'description'} label="Description" />
              <Textarea
                id={'description'}
                defaultValue={product.description}
                name={'description'}
              />
            </FormGroup>
            <FormGroup>
              <Label id={'categoryId'} label="Catégorie" />
              <Select
                id={'categoryId'}
                name={'categoryId'}
                placeholder={'Sélectionner une catégorie'}
                options={selectCategories}
                defaultValue={product.categoryId}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'price'} label="Entrez le prix" />
              <Input
                name="price"
                id={'price'}
                type={'number'}
                defaultValue={product.price}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'quantity'} label="Entrez le stock disponible" />
              <Input
                name="quantity"
                id={'quantity'}
                type={'number'}
                defaultValue={product.stock}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label id={'images'} label="Images du produit" />
              <Input name="images[]" type={'file'} id={'image'} multiple />
            </FormGroup>
            <FormGroup>
              <Label id={'published'} label="Est en ligne ?" />
              <Checkbox name="published" id={'published'} toggle defaultValue={product.published} />
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
