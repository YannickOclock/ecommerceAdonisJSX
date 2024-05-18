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
            <div id="cart" up-source={route('front.cart')} load-fragment></div>
          </nav>
        </div>
      </div>
    </header>
  )
}
