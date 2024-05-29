import { AdminProductEditQueryResult } from '#admin/product/repositories/product_repository'
import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { csrfField } from '#resources/helpers/csrf_field'
import { productImagesMinSrc } from '#resources/helpers/utils'
import { Admin } from '#viewsback/layouts/admin'
import { randomUUID } from 'node:crypto'
import { FormField } from '../../components/form/form_field.tsx'
import { Vite } from '#resources/helpers/asset'
import { route } from '#start/view'

interface ProductEditProps {
  product: AdminProductEditQueryResult
  categories: AdminCategoryListQueryResult
}

export function ProductEdit(props: ProductEditProps) {
  const { product, categories } = props
  const random = randomUUID()
  return (
    <Admin
      title={'Administration - Editer un produit'}
      breadcrumb="Catalogue &gt; Produits &gt; Editer un produit"
      header="Editer un produit"
      bodyTitle="Editer un produit"
    >
      <form method="post" enctype="multipart/form-data">
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <FormField name="id" label="Id du produit" value={product.id} required />
        <FormField name="name" label="Nom du produit" value={product.name} required />
        <FormField
          name="description"
          label="Description"
          value={product.description}
          inputTagName="textarea"
        />
        <FormField name="category" label="Catégorie" value={product.name} required />
        <FormField
          name="price"
          label="Entrez le prix"
          value={`${product.price}`}
          required
          inputType="price"
        />
        <FormField
          name="quantity"
          label="Entrez le stock disponible"
          value={`${product.stock}`}
          required
          inputType="number"
        />
        <FormField
          name="published"
          label="Est en ligne ?"
          inputType="checkbox"
          value={`${product.published}`}
        />
        <FormField
          name="categoryId"
          label="Catégorie"
          inputTagName="select"
          inputValues={categories}
        />

        <div class="form-group">
          <label for="images">Images du produit</label>
          <input type="file" id="images" name="images[]" multiple class="form-control my-2" />
        </div>

        <h2 class="form-title-images">Photos du produit</h2>
        <div class="form-images">
          {product.productImages?.map((productImage) => (
            <div class="form-images-image">
              <img
                src={productImagesMinSrc(productImage.path)}
                alt="Image"
                class="border border-secondary"
              />
              <a
                class="btn-remove"
                href={route('admin.product.image.delete', {
                  id: productImage.id,
                  productId: product.id,
                })}
                up-follow
                up-target="#main-content"
              >
                Supprimer
              </a>
            </div>
          ))}
        </div>

        {csrfField()}
        <button type="submit" class="btn btn-primary my-2">
          Editer
        </button>
      </form>
    </Admin>
  )
}
