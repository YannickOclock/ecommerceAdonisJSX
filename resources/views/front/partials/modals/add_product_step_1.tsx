import { CartProductRepositoryResult } from '#app/front/product/repositories/cart_product_repository'
import { csrfField } from '#resources/helpers/csrf_field'
import { route } from '#start/view'
import { Master } from '#viewsfront/layouts/master'

interface AddProductStep1Props {
  product: CartProductRepositoryResult
}

export function AddProductStep1(props: AddProductStep1Props) {
  const { product } = props
  const publicPath = `/images/products/`
  return (
    <Master>
      <div id="master">
        <div class="modal-container">
          <div class="modal">
            <header class="modal-header">
              <div></div>
            </header>
            <section class="modal-body">
              <div class="modal-body-container">
                <div class="modal-body-thumbnails">
                  <div class="picture">
                    <img
                      src={`${publicPath}${product.productImages[0].path}`}
                      alt={`Image principale du produit ${product.name}`}
                    />
                  </div>
                  <ul class="thumbnails-products">
                    {product.productImages.map((image) => (
                      <li>
                        <div class="picture">
                          <img
                            src={`${publicPath}${image.path}`}
                            alt={`Image du produit ${product.name}`}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="modal-body-details">
                  <h1>{product.name}</h1>
                  <div class="prices">
                    <div class="current-price">
                      <span class="current-price-value">{product.price},00 €</span>
                    </div>
                    <div class="tax-shipping">TTC</div>
                  </div>
                  <div class="product-description">
                    <p></p>
                  </div>
                  <div class="product-actions">
                    <form action={route('front.step1.add')} method="post" up-submit>
                      {csrfField()}
                      <input type="hidden" name="product_id" value={product.id} />
                      <div class="add-to-cart">
                        <span class="label">Quantité</span>
                        <div class="product-quantity">
                          <div class="input-group">
                            <input type="number" name="quantity" value="1" />
                            <span class="input-group-vertical">
                              <button class="touch-up">
                                <i class="material-icons">keyboard_arrow_up</i>
                              </button>
                              <button class="touch-down">
                                <i class="material-icons">keyboard_arrow_down</i>
                              </button>
                            </span>
                          </div>
                          <div class="add">
                            <button class="btn btn-primary btn-submit" type="submit">
                              <i class="material-icons">shopping_cart</i>
                              Ajouter au panier
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            <section class="modal-footer"></section>
          </div>
        </div>
      </div>
    </Master>
  )
}
