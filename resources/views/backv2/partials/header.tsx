import { route } from '#start/view'
import { DrawerBtn } from '#viewsbackv2/components/drawer_btn'

export function Header() {
  return (
    <div class="navbar bg-neutral-900 h-16 text-primary">
      <div class="navbar-start">
        <DrawerBtn />
        <a href={route('admin.dashboard')} id="header_logo"></a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-5">
          <li>0.01</li>
          <li>Menu rapide</li>
          <li>Recherche</li>
        </ul>
      </div>
      <div class="navbar-end">
        <ul class="menu menu-horizontal">
          <li>
            <a>
              <i class="material-icons">visibility</i>Voir la boutique
            </a>
          </li>
          <li>
            <i class="material-icons">notifications_none</i>
          </li>
          <li>
            <i class="material-icons">account_circle</i>
          </li>
        </ul>
      </div>
    </div>
  )
}
