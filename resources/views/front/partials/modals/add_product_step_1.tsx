import { CartProductRepositoryResult } from '#app/front/product/repositories/cart_product_repository'
import { csrfField } from '#resources/helpers/csrf_field'
import { route } from '#start/view'
import { Master } from '#viewsfront/layouts/master'
import { Vite } from '#resources/helpers/asset'
import { randomUUID } from 'node:crypto'
import { convertPrice, productImagesMinSrc } from '#resources/helpers/utils'
import ProductImage from '#core/models/product_image'
import clsx from 'clsx'

interface AddProductStep1Props {
  product: CartProductRepositoryResult
  selectedProductImageId?: string
}

export function AddProductStep1(props: AddProductStep1Props) {
  const { product, selectedProductImageId } = props
  const random = randomUUID()

  // sélectionner la première image par défaut
  let selectedThumbnail: null | ProductImage = null

  if (product.productImages.length > 0) {
    selectedThumbnail = product.productImages[0]
    if (selectedProductImageId) {
      const foundProductImage = product.productImages.find(
        (productImage) => productImage.id === selectedProductImageId
      )
      if (foundProductImage) selectedThumbnail = foundProductImage
    }
  }

  return (
    <Master>
      <div id="master">
        <Vite.Script
          type="module"
          src={`resources/assets/front/js/components/input_number.ts?random=${random}`}
        />
        <div class="modal-container">
          <div class="modal">
            <header class="modal-header">
              <div></div>
            </header>
            <section class="modal-body">
              <div class="modal-body-container">
                <div class="modal-body-thumbnails">
                  <div class="picture">
                    {selectedThumbnail ? (
                      <img
                        src={productImagesMinSrc(selectedThumbnail.path)}
                        alt={`Image principale du produit ${product.name}`}
                      />
                    ) : (
                      <img src={'https://fakeimg.pl/300x300?text=No+image'} alt="Pas d'image" />
                    )}
                  </div>
                  <ul class="thumbnails-products">
                    {product.productImages.length === 0 && (
                      <li>
                        <div class="picture">
                          <a href="#">
                            <img
                              src={'https://fakeimg.pl/300x300?text=No+image'}
                              alt="Pas d'image"
                            />
                          </a>
                        </div>
                      </li>
                    )}
                    {product.productImages.map((image) => (
                      <li>
                        <div class="picture">
                          <a
                            href={route('front.step1', {
                              id: product.id,
                              productImageId: image.id,
                            })}
                            up-follow
                            up-target=".modal-body-thumbnails"
                          >
                            <img
                              src={productImagesMinSrc(image.path)}
                              alt={`Image du produit ${product.name}`}
                              class={clsx(image === selectedThumbnail ? 'selected' : '')}
                            />
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="modal-body-details">
                  <h1>{product.name}</h1>
                  <div class="prices">
                    <div class="current-price">
                      <span class="current-price-value">{convertPrice(product.price)}</span>
                    </div>
                    <div class="tax-shipping">TTC</div>
                  </div>
                  <div class="product-description">
                    <p></p>
                  </div>
                  <div class="product-actions">
                    <form
                      id="cartModalForm"
                      action={route('front.step1.add')}
                      method="post"
                      up-submit
                    >
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
