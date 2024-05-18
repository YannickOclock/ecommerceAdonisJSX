import clsx from 'clsx'

interface CartProps {
  nbProducts: number
}

export function Cart(props: CartProps) {
  const { nbProducts } = props
  return (
    <a href="#" class={clsx('btn-cart', nbProducts > 0 ? 'btn-cart-active' : '')} id="cart">
      <i class="material-icons">shopping_cart</i>
      <span>Panier</span>
      <span class="quantity">
        (<span>{nbProducts}</span>)
      </span>
    </a>
  )
}
