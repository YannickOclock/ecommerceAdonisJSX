import { HttpContext } from '@adonisjs/core/http'
import { route } from '#start/view'
import { Link } from '#viewsbackv2/components/nav/link'

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
      'admin.user.list',
      'admin.user.edit',
      'admin.user.add',
      'admin.address.list',
      'admin.address.add',
      'admin.address.edit',
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
  const addressesLink = {
    title: 'Adresses',
    url: route('admin.address.list'),
    active: request.matchesRoute(['admin.address.list', 'admin.address.edit']),
    level: 2,
  }
  const addressesAddLink = {
    title: 'Ajouter une adresse',
    url: route('admin.address.add'),
    active: request.matchesRoute('admin.address.add'),
    level: 2,
  }

  return (
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <Link {...dashboardLink} />
      <li>
        <details open>
          <summary>
            <Link {...catalogLink} />
          </summary>
          <ul>
            <Link {...productsLink} />
            <Link {...productsAddLink} />
            <Link {...categoriesLink} />
            <Link {...categoriesAddLink} />
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary>
            <Link {...clientsLink} />
          </summary>
          <ul>
            <Link {...usersLink} />
            <Link {...usersAddLink} />
            <Link {...addressesLink} />
            <Link {...addressesAddLink} />
          </ul>
        </details>
      </li>
    </ul>
  )
}
