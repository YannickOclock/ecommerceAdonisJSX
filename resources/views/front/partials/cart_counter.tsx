import clsx from 'clsx'
import { route } from '#start/view'

interface CartProps {
  nbProducts: number
}

export function CartCounter(props: CartProps) {
  const { nbProducts } = props
  return (
    <a
      href={route('front.cart')}
      class={clsx('btn-cart', nbProducts > 0 ? 'btn-cart-active' : '')}
      id="cart"
    >
      <i class="material-icons">shopping_cart</i>
      <span>Panier</span>
      <span class="quantity">
        (<span>{nbProducts}</span>)
      </span>
    </a>
  )
}
