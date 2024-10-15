import { Cart } from '#app/front/cart_state'
import { CartProductRepositoryResult } from '#app/front/product/repositories/cart_product_repository'
import { convertPrice, productImagesMinSrc } from '#resources/helpers/utils'
import { Master } from '#viewsfront/layouts/master'
import { route } from '#start/view'

interface AddProductStep2Props {
  totalQuantityProduct: number
  totalQuantityCart: number
  totalPriceCart: number
  product: CartProductRepositoryResult
}

export function AddProductStep2(props: AddProductStep2Props) {
  const { cart, product, totalQuantityProduct, totalQuantityCart, totalPriceCart } = props
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
                    {product.productImages[0] ? (
                      <img
                        src={productImagesMinSrc(product.productImages[0].path)}
                        alt={`Image principale du produit ${product.name}`}
                      />
                    ) : (
                      <img src={'https://fakeimg.pl/300x300?text=No+image'} alt="Pas d'image" />
                    )}
                  </div>
                  <div class="info-product">
                    <h6>{product.name}</h6>
                    <p class="product-price">{convertPrice(product.price)}</p>
                    <p class="product-quantity">
                      Quantité : <strong class="quantity">{totalQuantityProduct}</strong>
                    </p>
                  </div>
                </div>
                <div class="modal-info-cart">
                  <p class="cart-products-count">
                    Il y a <span class="quantity">{totalQuantityCart}</span> produit(s) dans panier.
                  </p>
                  <div class="line-cart subtotal">
                    <p>
                      <strong>Sous-total</strong>
                    </p>
                    <p>
                      <strong class="value">{convertPrice(totalPriceCart)}</strong>
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
                      <strong class="value">{convertPrice(totalPriceCart)}</strong>
                    </p>
                  </div>
                  <div class="modal-action-buttons">
                    <a class="btn cancel btn-space" up-emit="cart:reload">
                      Continuer mes achats
                    </a>
                    <a class="btn btn-primary" href={route('front.cart')}>
                      <i class="material-icons">done</i>
                      Commander
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Master>
  )
}
