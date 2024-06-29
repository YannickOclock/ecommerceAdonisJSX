import { Base } from '#viewsfront/layouts/base'
import Product from '#core/models/product'
import { convertPrice, productImagesMinSrc } from '#resources/helpers/utils'
import { route } from '#start/view'
import { csrfField } from "#resources/helpers/csrf_field";

interface CartProps {
  totalQuantityCart: number
  totalPriceCart: number
  cartProducts: { product: Product; quantity: number; totalPrice: number }[]
}

export function Cart(props: CartProps) {
  const { totalPriceCart, totalQuantityCart, cartProducts } = props
  return (
    <Base title={`Page d'accueil`} slider={false}>
      <>
        <main class="wrapper cart_container">
          <section class="flex">
            <div class="left_column block_white">
              <h1>Panier</h1>
              <hr class="separator" />
              <div class="cart-overview">
                {cartProducts.map((cartProduct) => (
                  <div class="cart-line">
                    <img
                      src={productImagesMinSrc(cartProduct.product.productImages[0].path)}
                      alt={`Image principale du produit ${cartProduct.product.name}`}
                    />
                    <div class="product--information">
                      <a href="" class="product--title">
                        {cartProduct.product.name}
                      </a>
                      <div class="product-price">
                        <span class="price">{convertPrice(cartProduct.product.price)}</span>
                      </div>
                    </div>
                    <div class="product-quantity">
                      <div class="input-group">
                        <input type="number" name="quantity" value={cartProduct.quantity} />
                        <span class="input-group-vertical">
                          <form method="post" action={route('front.cart.update.quantity')}>
                            <input type="hidden" name="lessOrMore" value="more" />
                            <input type="hidden" name="productId" value={cartProduct.product.id} />
                            {csrfField()}
                            <button class="touch-up" type="submit">
                              <i class="material-icons">keyboard_arrow_up</i>
                            </button>
                          </form>
                          <form method="post" action={route('front.cart.update.quantity')}>
                            <input type="hidden" name="lessOrMore" value="less" />
                            <input type="hidden" name="productId" value={cartProduct.product.id} />
                            {csrfField()}
                            <button class="touch-down" type="submit">
                              <i class="material-icons">keyboard_arrow_down</i>
                            </button>
                          </form>
                        </span>
                      </div>
                    </div>
                    <div class="line-total-price">{convertPrice(cartProduct.totalPrice)}</div>
                    <div class="line-delete">
                      <a
                        href={route('front.cart.product.delete', {
                          productId: cartProduct.product.id,
                        })}
                        up-layer="new"
                        up-mode="modal"
                      >
                        <i class="material-icons">delete</i>
                      </a>
                    </div>
                  </div>
                ))}
                {cartProducts.length === 0 && (
                  <div>
                    <p>Il n'y a plus d'articles dans votre panier</p>
                  </div>
                )}
              </div>
            </div>
            <div class="right_column block_white">
            <div class="cart-summary">
                <div class="flex">
                  <p>{totalQuantityCart} article(s)</p>
                  <p>
                    <strong>{convertPrice(totalPriceCart)}</strong>
                  </p>
                </div>
                <div class="flex">
                  <p>Livraison</p>
                  <p>
                    <strong>gratuit</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div class="cart-total">
                <div class="flex">
                  <p>
                    <strong>Total (TTC)</strong>
                  </p>
                  <p>
                    <strong>{convertPrice(totalPriceCart)}</strong>
                  </p>
                </div>
              </div>
              <div class="cart-actions">
                <a href="#" class="btn btn-primary">
                  COMMANDER
                </a>
              </div>
            </div>
          </section>
        </main>
      </>
    </Base>
  )
}
