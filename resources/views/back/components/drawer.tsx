import clsx from 'clsx'

interface DrawerProps {
  nav: JSX.Element
  children: JSX.Element | JSX.Element[]
  id?: string
  classes?: string
}

export function Drawer(props: DrawerProps) {
  const { nav, children, id = 'my-drawer', classes = 'pb-48' } = props
  return (
    <div class="drawer lg:drawer-open">
      <input id={id} type="checkbox" class="drawer-toggle" />
      <div class={clsx('drawer-content', classes)}>{children}</div>
      <div class="drawer-side lg:max-h-[calc(100dvh-4rem)]">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        {nav}
      </div>
    </div>
  )
}
