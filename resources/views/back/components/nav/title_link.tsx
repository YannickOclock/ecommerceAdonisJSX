interface TitleLinkProps {
  title: string
}

export function TitleLink(props: TitleLinkProps) {
  const { title } = props

  return (
    <li class="category-title">
      <span class="title">{title}</span>
    </li>
  )
}
