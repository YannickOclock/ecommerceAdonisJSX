import { Vite } from '#resources/helpers/asset'

interface ProductProps {
  id: string
  name: string
  price: number
  images: string[]
}

export function ProductSample(props: ProductProps) {
  const { id, name, price, images } = props
  // Il faut placer les images dans le dossier public/images/products/
  // directement (sans utiliser le fichier hot.json)
  const publicPath = `images/products/`

  return (
    <div class="product" data-id={id}>
      <div class="thumbnail">
        <img src={`${publicPath}${images[0]}`} alt="Produit populaire 1" />
        <div class="hightlighted--info">
          <a
            href="/step1"
            class="quick-view"
            up-layer="new"
            up-mode="modal"
            up-on-dismissed="up.reload('#cart')"
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
          <span class="price">{price}&nbsp;€</span>
        </div>
      </div>
    </div>
  )
}
