import { route } from '#start/view'

export function Nav() {
  return (
    <header id="header">
      <div id="header-nav">
        <div class="container">
          <nav class="left-nav">
            <a href="#">Contactez-nous</a>
          </nav>
          <nav class="right-nav">
            <a class="nav-link" href="#">
              <i class="material-icons">person</i>
              <span>Me déconnecter</span>
            </a>
            <a class="nav-link" href={route('admin.dashboard')}>
              <i class="material-icons">admin_panel_settings</i>
              <span>Administration</span>
            </a>
            <a href="#" class="btn-cart" id="btn-cart">
              <i class="material-icons">shopping_cart</i>
              <span>Panier</span>
              <span class="quantity">
                (<span>0</span>)
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
