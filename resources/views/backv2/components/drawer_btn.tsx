interface DrawerBtnProps {
  id?: string
}

export function DrawerBtn(props: DrawerBtnProps) {
  const { id = 'my-drawer' } = props
  return (
    <label for={id} class="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  )
}
