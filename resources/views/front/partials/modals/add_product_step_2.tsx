import { Cart } from '#app/front/cart_state'
import { CartProductRepositoryResult } from '#app/front/product/repositories/cart_product_repository'
import { convertPrice } from '#resources/helpers/utils'
import { Master } from '#viewsfront/layouts/master'

interface AddProductStep2Props {
  cart: Cart
  product: CartProductRepositoryResult
}

export function AddProductStep2(props: AddProductStep2Props) {
  const { cart, product } = props
  const publicPath = `/images/products/`
  return (
    <Master>
      <div id="master">
        <div class="modal-container">
          <div class="modal">
            <header class="modal-header modal-header-bordered">
              <h5 class="modal-title">
                <i class="material-icons">done</i>
                Produit ajouté au panier avec succès
              </h5>
            </header>
            <section class="modal-body">
              <div class="modal-body-container">
                <div class="modal-cart-product">
                  <div class="picture">
                    <img
                      src={`${publicPath}${product.productImages[0].path}`}
                      alt={`Image principale du produit ${product.name}`}
                    />
                  </div>
                  <div class="info-product">
                    <h6>{product.name}</h6>
                    <p class="product-price">{product.price},00 €</p>
                    <p class="product-quantity">
                      Quantité :{' '}
                      <strong class="quantity">{cart.getTotalQuantityOfProduct(product.id)}</strong>
                    </p>
                  </div>
                </div>
                <div class="modal-info-cart">
                  <p class="cart-products-count">
                    Il y a <span class="quantity">{cart.getTotalQuantity()}</span> produit(s) dans
                    panier.
                  </p>
                  <div class="line-cart subtotal">
                    <p>
                      <strong>Sous-total</strong>
                    </p>
                    <p>
                      <strong class="value">{convertPrice(cart.getTotal())}</strong>
                    </p>
                  </div>
                  <div class="line-cart">
                    <p>Transport</p>
                    <p>
                      <strong>gratuit</strong>
                    </p>
                  </div>
                  <div class="line-cart product-total total">
                    <p>
                      <strong>Total (TTC)</strong>
                    </p>
                    <p>
                      <strong class="value">{convertPrice(cart.getTotal())}</strong>
                    </p>
                  </div>
                  <a class="btn cancel btn-space" up-emit="cart:reload">
                    Continuer mes achats
                  </a>
                  <a class="btn btn-primary" href="#">
                    <i class="material-icons">done</i>
                    Commander
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Master>
  )
}
