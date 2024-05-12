import { route } from '#start/view'
import { HttpContext } from '@adonisjs/core/http'
import { Link } from '#viewsback/components/nav/link'
import { TitleLink } from '#viewsback/components/nav/title_link'
import { SubMenu } from '#viewsback/components/nav/submenu'

export function Nav() {
  const { request } = HttpContext.getOrFail()

  const dashboardLink = {
    title: 'Tableau de bord',
    icon: 'trending_up',
    url: route('admin.dashboard'),
    active: request.matchesRoute('admin.dashboard'),
  }
  const catalogLink = {
    title: 'Catalogue',
    icon: 'store',
    url: '#',
    active: false,
  }
  const productsLink = {
    title: 'Produits',
    url: '#',
    active: false,
    level: 2,
  }
  const categoriesLink = {
    title: 'Catégories',
    url: '#',
    active: false,
    level: 2,
  }

  return (
    <nav id="navbar">
      <ul>
        <Link {...dashboardLink} />
        <TitleLink title="Vendre" />
        <Link {...catalogLink}>
          <SubMenu>
            <>
              <Link {...productsLink} />
              <Link {...categoriesLink} />
            </>
          </SubMenu>
        </Link>
      </ul>
    </nav>
  )
}
