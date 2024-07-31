import { route } from '#start/view'
import { DrawerBtn } from '#viewsback/components/drawer_btn'
import { DarkModeBtn } from '#viewsback/components/user/dark_mode_btn'

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
            <a href={route('front.home')}>
              <i class="material-icons">visibility</i>
              <span>Voir la boutique</span>
            </a>
          </li>
          <li>
            <i class="material-icons">notifications_none</i>
          </li>
          <li>
            <i class="material-icons">account_circle</i>
          </li>
          <li>
            <DarkModeBtn />
          </li>
        </ul>
      </div>
    </div>
  )
}
