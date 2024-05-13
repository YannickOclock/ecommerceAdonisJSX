import { Vite } from '#resources/helpers/asset'

interface ProductProps {
  id: number
  title: string
  price: string
  images: string[]
}

export function ProductSample(props: ProductProps) {
  const { id, title, price, images } = props

  return (
    <div class="product" data-id={id}>
      <div class="thumbnail">
        <Vite.Image src={images[0]} alt="Produit populaire 1" />
        <div class="hightlighted--info">
          <a href="#" class="quick-view">
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
          <a href="#">{title}</a>
        </h3>
        <div class="product--price">
          <span class="price">{price}&nbsp;€</span>
        </div>
      </div>
    </div>
  )
}
