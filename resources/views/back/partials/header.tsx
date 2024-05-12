//import { HttpContext } from "@adonisjs/core/http";

export async function Header() {
  //const { auth } = HttpContext.getOrFail()
  //await auth.check()

  return (
    <header id="header">
      <nav id="header_infos">
        <a href="#" id="header_logo"></a>
        <span id="shop-version">0.0.1</span>
        <div id="quick-access">Menu rapide</div>
        <div id="header-search">Recherche</div>
        <div id="header-right">
          <a id="show-boutique" href="#">
            <i class="material-icons">visibility</i>
            Voir la boutique
          </a>
          <div id="notifications">
            <i class="material-icons">notifications_none</i>
          </div>
          <div id="menu_employee">
            <i class="material-icons">account_circle</i>
          </div>
        </div>
      </nav>
    </header>
  )
}
