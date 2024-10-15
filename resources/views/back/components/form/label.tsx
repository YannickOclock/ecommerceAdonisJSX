interface LabelProps {
  id: string
  label: string
  classes: string
}

export function Label(props: LabelProps) {
  const { id, label, classes = 'w-1/6 text-right' } = props
  return (
    <label for={id} class={classes}>
      {label}
    </label>
  )
}
