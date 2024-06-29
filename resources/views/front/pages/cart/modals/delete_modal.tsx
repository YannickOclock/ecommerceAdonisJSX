import { Master } from '#viewsfront/layouts/master'
import { csrfField } from '#resources/helpers/csrf_field'
import { route } from '#start/view'

interface DeleteModalProps {
  productId: string
}

export function DeleteModal(props: DeleteModalProps) {
  const { productId } = props
  return (
    <Master>
      <h1>Confirmation de suppression</h1>
      <p>Êtes-vous sûr de vouloir supprimer cet article de votre panier ?</p>
      <div class="modal-action-buttons">
        <a class="btn cancel" href="#" up-dismiss>
          <i class="material-icons">cancel</i>
          Annuler
        </a>
        <form method="post" action={route('front.cart.product.delete.post')}>
          <input type="hidden" name="productId" value={productId} />
          {csrfField()}
          <button class="btn btn-primary">
            <i class="material-icons">done</i> Confirmer
          </button>
        </form>
      </div>
    </Master>
  )
}
