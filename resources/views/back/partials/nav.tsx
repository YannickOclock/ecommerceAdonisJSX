import { route } from '#start/view'
import { HttpContext } from '@adonisjs/core/http'
import clsx from 'clsx'

export function Nav() {
  const { request } = HttpContext.getOrFail()

  const links = [
    {
      title: 'Tableau de bord',
      icon: 'trending_up',
      url: route('admin.dashboard'),
      active: request.matchesRoute('admin.dashboard'),
    },
  ]

  return (
    <nav id="navbar">
      <ul>
        <li class={clsx('link-levelone', links[0].active ? 'link-active' : '')}>
          <a href={links[0].url}>
            <i class={`material-icons mi-${links[0].icon}`}>{links[0].icon}</i>
            {links[0].title}
          </a>
        </li>
        <li class="category-title">
          <span class="title">Vendre</span>
        </li>
      </ul>
    </nav>
  )
}
