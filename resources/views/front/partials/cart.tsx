interface CartProps {
  nbProducts: number
}

export function Cart(props: CartProps) {
  const { nbProducts } = props
  return (
    <a href="#" class="btn-cart" id="cart">
      <i class="material-icons">shopping_cart</i>
      <span>Panier</span>
      <span class="quantity">
        (<span>{nbProducts}</span>)
      </span>
    </a>
  )
}
