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
    active: request.matchesRoute([
      'admin.product.list',
      'admin.product.add',
      'admin.product.edit',
      'admin.category.list',
      'admin.category.add',
      'admin.category.edit',
    ]),
  }
  const productsLink = {
    title: 'Produits',
    url: route('admin.product.list'),
    active: request.matchesRoute(['admin.product.list', 'admin.product.edit']),
    level: 2,
  }
  const productsAddLink = {
    title: 'Ajouter un produit',
    url: route('admin.product.add'),
    active: request.matchesRoute('admin.product.add'),
    level: 2,
  }
  const categoriesLink = {
    title: 'Catégories',
    url: route('admin.category.list'),
    active: request.matchesRoute(['admin.category.list', 'admin.category.edit']),
    level: 2,
  }
  const categoriesAddLink = {
    title: 'Ajouter une catégorie',
    url: route('admin.category.add'),
    active: request.matchesRoute('admin.category.add'),
    level: 2,
  }
  const clientsLink = {
    title: 'Clients',
    icon: 'account_circle',
    url: '#',
    active: request.matchesRoute([
      'admin.users.list',
    ]),
  }
  const usersLink = {
    title: 'Utilisateurs',
    url: route('admin.user.list'),
    active: request.matchesRoute(['admin.user.list', 'admin.user.edit']),
    level: 2,
  }
  const usersAddLink = {
    title: 'Ajouter un utilisateur',
    url: route('admin.user.add'),
    active: request.matchesRoute('admin.user.add'),
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
              <Link {...productsAddLink} />
              <Link {...categoriesLink} />
              <Link {...categoriesAddLink} />
            </>
          </SubMenu>
        </Link>
        <TitleLink title="Clients" />
        <Link {...clientsLink}>
          <SubMenu>
            <>
              <Link {...usersLink} />
              <Link {...usersAddLink} />
            </>
          </SubMenu>
        </Link>
      </ul>
    </nav>
  )
}
