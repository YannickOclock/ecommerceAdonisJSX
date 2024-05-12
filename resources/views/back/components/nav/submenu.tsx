interface SubMenuProps {
  children?: JSX.Element
}

export function SubMenu(props: SubMenuProps) {
  const { children } = props
  return <ul class="submenu">{children}</ul>
}
