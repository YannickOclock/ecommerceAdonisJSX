interface DrawerProps {
  nav: JSX.Element
  children: JSX.Element | JSX.Element[]
  id?: string
}

export function Drawer(props: DrawerProps) {
  const { nav, children, id = 'my-drawer' } = props
  return (
    <div class="drawer lg:drawer-open">
      <input id={id} type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">{children}</div>
      <div class="drawer-side lg:max-h-[calc(100dvh-4rem)]">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        {nav}
      </div>
    </div>
  )
}
