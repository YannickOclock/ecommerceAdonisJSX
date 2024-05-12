import clsx from 'clsx'

interface LinkProps {
  level?: number
  title: string
  icon?: string
  url: string
  active: boolean
  children?: JSX.Element
}

export function Link(props: LinkProps) {
  const { level = 1, title, icon, url, active, children } = props

  const classes = level < 2 ? 'link-levelone' : 'link-level-two'
  const iconElement = icon ? <i class={`material-icons mi-${icon}`}>{icon}</i> : null

  return (
    <li class={clsx(classes, active ? 'link-active' : '')}>
      <a href={url}>
        {iconElement}
        {title}
      </a>
      {children}
    </li>
  )
}
