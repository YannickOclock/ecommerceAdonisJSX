import { Master } from '#viewsbackv2/layouts/master'
import { route } from '#start/view'
import { AdminProductEditQueryResult } from '#admin/product/repositories/product_repository'

interface ProductDeleteModaleProps {
  product: AdminProductEditQueryResult
}

export function ProductDeleteModale(props: ProductDeleteModaleProps) {
  const { product } = props
  return (
    <Master>
      <div class={'p-4'}>
        <h1 class={'text-2xl mb-4'}>Confirmation de suppression d'un produit</h1>
        <p>
          Vous êtes sur le point de supprimer le produit {product.name}. Êtes-vous sûr de vouloir
          continuer ?
        </p>
        <div class={'flex justify-evenly mt-8'}>
          <a class={'btn'} up-dismiss>
            Annuler
          </a>
          <a class={'btn btn-error'} href={route('admin.product.delete', { id: product.id })}>
            Supprimer
          </a>
        </div>
      </div>
    </Master>
  )
}
