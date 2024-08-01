import { Master } from '#viewsback/layouts/master'
import { route } from '#start/view'
import { AdminProductByIdsQueryResult } from '#admin/product/repositories/product_repository'
import { csrfField } from '#resources/helpers/csrf_field'

interface ProductDeleteModaleProps {
  products: AdminProductByIdsQueryResult
}

export function ProductDeleteModale(props: ProductDeleteModaleProps) {
  const { products } = props
  return (
    <Master>
      <div class="p-4">
        <h1 class="text-2xl mb-4">
          Confirmation de suppression{' '}
          {products.length > 1 ? 'de plusieurs produits' : "d'un produit"}
        </h1>
        <p>Vous êtes sur le point de supprimer le(s) produit(s) suivant(s) :</p>
        <ul class="list-disc ml-8">
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        <p>Êtes-vous sûr de vouloir continuer ?</p>
        <div class="flex justify-evenly mt-8">
          <a class="btn" up-dismiss>
            Annuler
          </a>
          <form method="post" action={route('admin.product.delete')}>
            {products.map((product) => (
              <input type="hidden" name="ids[]" value={product.id} />
            ))}
            {csrfField()}
            <button class="btn btn-error">Supprimer</button>
          </form>
        </div>
      </div>
    </Master>
  )
}
