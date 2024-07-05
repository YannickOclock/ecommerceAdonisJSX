interface LabelProps {
  id: string
  label: string
}

export function Label(props: LabelProps) {
  const { id, label } = props
  return (
    <label for={id} class="w-1/6 text-right">
      {label}
    </label>
  )
}
