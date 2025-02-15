import { convertPrice, productImagesMinSrc } from '#resources/helpers/utils'
import { route } from '#start/view'

interface ProductProps {
  id: string
  name: string
  price: number
  images: string[]
}

export function ProductSample(props: ProductProps) {
  const { id, name, price, images } = props

  return (
    <div class="product" data-id={id}>
      <div class="thumbnail">
        {images[0] ? (
          <img src={productImagesMinSrc(images[0])} alt={`Image principale du produit ${name}`} />
        ) : (
          <img src={'https://fakeimg.pl/300x300?text=No+image'} alt="Pas d'image" />
        )}
        <div class="hightlighted--info">
          <a
            href={route('front.step1', { id: id })}
            class="quick-view"
            up-layer="new"
            up-mode="modal"
            up-size="grow"
            up-accept-event="cart:reload"
            up-on-accepted="up.reload('#cart')"
          >
            <i class="material-icons">search</i>
            Aperçu rapide
          </a>
        </div>
      </div>
      <ul class="product--flags">
        <li class="product-flag new">nouveau</li>
      </ul>
      <button class="wishlist-button">
        <i class="material-icons">favorite_border</i>
      </button>
      <div class="product--information">
        <h3 class="product--title">
          <a href="#">{name}</a>
        </h3>
        <div class="product--price">
          <span class="price">{convertPrice(price)}</span>
        </div>
      </div>
    </div>
  )
}
